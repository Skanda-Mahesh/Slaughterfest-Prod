// Builds the web-ready images in public/assets from the masters in assets-src.
//   npm run assets
// Everything visual that used to be a runtime CSS effect (tint, grading, emboss, fades, drop shadows)
// is baked into the images here, so the browser only has to paint plain pictures.
import sharp from 'sharp';
import { mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import path from 'node:path';

const SRC = 'assets-src';
const OUT = 'public/assets';
const bands = JSON.parse(readFileSync('src/data/bands.json', 'utf8'));
const partners = JSON.parse(readFileSync('src/data/partners.json', 'utf8'));
const manifest = {};
const kb = (p) => Math.round(readFileSync(p).length / 1024);

for (const d of ['logos', 'bands', 'photos', 'partners', 'art']) {
  rmSync(path.join(OUT, d), { recursive: true, force: true });
  mkdirSync(path.join(OUT, d), { recursive: true });
}

const clamp = (v, a = 0, b = 255) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
async function save(raw, w, h, ch, rel, opts) {
  const out = path.join(OUT, rel);
  await sharp(raw, { raw: { width: w, height: h, channels: ch } }).webp(opts).toFile(out);
  return { src: rel, width: w, height: h, kb: kb(out) };
}

// ---------- plain alpha images (band logos, partner logos, ticket button) ----------
async function plain(srcRel, maxW, maxH, key) {
  const input = path.join(SRC, srcRel);
  const out = srcRel.replace(/\.(png|jpe?g)$/i, '.webp');
  let p = sharp(input).resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true });
  const info = await p.webp({ quality: 82, alphaQuality: 90, effort: 6 }).toFile(path.join(OUT, out));
  manifest[key ?? srcRel] = { src: out, width: info.width, height: info.height };
  console.log('  ', out, info.width + 'x' + info.height, kb(path.join(OUT, out)) + ' KB');
}

// ---------- photos: baked grading (wide = desktop hover row, mob = phone card) ----------
async function photos() {
  const W = 1600, H = 900, MW = 720, MH = 450;
  for (const b of bands) {
    const srcRel = b.photo.src;
    const input = path.join(SRC, srcRel);
    // wide: grayscale, contrast, rose duotone, wine wash, darker top for the text
    {
      const { data, info } = await sharp(input).resize(W, H, { fit: 'cover' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      const out = Buffer.alloc(W * H * 3);
      const dark = [18, 8, 10], light = [214, 176, 168], wine = [58, 18, 19], void_ = [11, 10, 10];
      for (let y = 0; y < H; y++) {
        const t = y / H;
        const o = t < 0.32 ? lerp(0.72, 0.25, t / 0.32) : t < 0.55 ? 0.25 * (1 - (t - 0.32) / 0.23) : 0;
        for (let x = 0; x < W; x++) {
          const i = (y * W + x) * 3;
          let l = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          l = clamp(((l - 0.5) * 1.1 + 0.5) * 0.9, 0, 1);
          for (let c = 0; c < 3; c++) {
            const duo = dark[c] + (light[c] - dark[c]) * l;
            const v = 0.8 * duo + 0.2 * wine[c];
            out[i + c] = clamp(v * (1 - o) + void_[c] * o);
          }
        }
      }
      const r = await save(out, W, H, 3, `photos/${b.slug}-wide.webp`, { quality: 66, effort: 6 });
      (manifest[srcRel] ??= {}).wide = r;
    }
    // mobile: neutral grayscale card, fades to the page colour at the bottom
    {
      const { data } = await sharp(input).resize(MW, MH, { fit: 'cover' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      const out = Buffer.alloc(MW * MH * 3);
      for (let y = 0; y < MH; y++) {
        const t = y / MH, o = t > 0.45 ? (t - 0.45) / 0.55 : 0;
        for (let x = 0; x < MW; x++) {
          const i = (y * MW + x) * 3;
          let l = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          l = clamp(((l - 0.5) * 1.1 + 0.5) * 0.8, 0, 1) * 255;
          for (let c = 0; c < 3; c++) out[i + c] = clamp(l * (1 - o) + [11, 10, 10][c] * o);
        }
      }
      const r = await save(out, MW, MH, 3, `photos/${b.slug}-mob.webp`, { quality: 66, effort: 6 });
      manifest[srcRel].mob = r;
    }
    console.log('  ', b.slug, 'wide', manifest[srcRel].wide.kb + ' KB', 'mob', manifest[srcRel].mob.kb + ' KB');
  }
}

// ---------- main logo: dimmed 20% and a hard drop shadow baked in ----------
async function logo() {
  const input = path.join(SRC, 'logos/slaughterfest-white.png');
  const meta = await sharp(input).metadata();
  const sizes = { 'slaughterfest-660': 660, 'slaughterfest-1320': 1320 };
  manifest['logos/slaughterfest-white.png'] = {};
  for (const [name, w] of Object.entries(sizes)) {
    const { data, info } = await sharp(input).resize({ width: w }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const H = info.height, off = Math.round((6 * w) / 1320), P = off + 2, OH = H + P;
    const out = Buffer.alloc(w * OH * 4);
    for (let y = 0; y < OH; y++) for (let x = 0; x < w; x++) {
      const ab = y < H ? data[(y * w + x) * 4 + 3] / 255 : 0;
      const sy = y - off, as = sy >= 0 && sy < H ? (data[(sy * w + x) * 4 + 3] / 255) * 0.55 : 0;
      const o = (y * w + x) * 4;
      const oa = ab + as * (1 - ab);
      if (oa <= 0) continue;
      for (let c = 0; c < 3; c++) {
        const body = y < H ? data[(y * w + x) * 4 + c] * 0.8 : 0;
        const sh = [11, 10, 10][c];
        out[o + c] = clamp((body * ab + sh * as * (1 - ab)) / oa);
      }
      out[o + 3] = Math.round(oa * 255);
    }
    const r = await save(out, w, OH, 4, `logos/${name}.webp`, { quality: 80, alphaQuality: 70, effort: 6 });
    manifest['logos/slaughterfest-white.png'][w] = r;
    console.log('  ', name, r.width + 'x' + r.height, r.kb + ' KB');
  }
}

// ---------- hero art: recentre the hole, recolour, emboss, fade, all baked ----------
async function recentre(file, hx, hy, w, h, pad = 120) {
  const ext = await sharp(path.join(SRC, file)).ensureAlpha().extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp(ext).extract({ left: Math.round(hx + pad - w / 2), top: Math.round(hy + pad - h / 2), width: w, height: h }).raw().toBuffer({ resolveWithObject: true });
}
async function blurAlpha(alpha, w, h, sigma) {
  return sharp(alpha, { raw: { width: w, height: h, channels: 1 } }).blur(sigma).raw().toBuffer();
}
async function emboss({ file, hole, w, h, outW, tone, alphaMul, hi, hiAlpha, hiOff, shOff, shBlur, mask, name }) {
  const { data } = await recentre(file, hole[0], hole[1], w, h);
  const buf = await sharp(data, { raw: { width: w, height: h, channels: 4 } }).resize({ width: outW }).raw().toBuffer({ resolveWithObject: true });
  const W = buf.info.width, H = buf.info.height, d = buf.data;
  const A = Buffer.alloc(W * H);
  for (let i = 0; i < W * H; i++) A[i] = d[i * 4 + 3];
  const SH = await blurAlpha(A, W, H, shBlur);
  const out = Buffer.alloc(W * H * 4);
  const at = (arr, x, y) => (x < 0 || y < 0 || x >= W || y >= H ? 0 : arr[y * W + x] / 255);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const o = (y * W + x) * 4;
    const ab = (A[y * W + x] / 255) * alphaMul;
    const ah = at(A, x - hiOff[0], y - hiOff[1]) * hiAlpha;
    const as = at(SH, x - shOff[0], y - shOff[1]) * 0.95;
    let r = 0, g = 0, b = 0, a = 0;
    const over = (cr, cg, cb, ca) => { const na = ca + a * (1 - ca); if (na <= 0) return; r = (cr * ca + r * a * (1 - ca)) / na; g = (cg * ca + g * a * (1 - ca)) / na; b = (cb * ca + b * a * (1 - ca)) / na; a = na; };
    over(0, 0, 0, as);
    over(hi[0], hi[1], hi[2], ah);
    if (ab > 0) { const [cr, cg, cb] = tone(d[(y * W + x) * 4], d[(y * W + x) * 4 + 1], d[(y * W + x) * 4 + 2]); over(cr, cg, cb, ab); }
    a *= mask((x + 0.5) / W, (y + 0.5) / H);
    out[o] = clamp(r); out[o + 1] = clamp(g); out[o + 2] = clamp(b); out[o + 3] = Math.round(clamp(a * 255));
  }
  const r = await save(out, W, H, 4, `art/${name}.webp`, { quality: 60, alphaQuality: 50, effort: 6 });
  manifest[`art/${name}`] = r;
  console.log('  ', name, r.width + 'x' + r.height, r.kb + ' KB');
}
const ramp = (e, s1, s2, s3, a2) => (e <= s1 ? 1 : e <= s2 ? lerp(1, a2, (e - s1) / (s2 - s1)) : e <= s3 ? lerp(a2, 0, (e - s2) / (s3 - s2)) : 0);
async function art() {
  // Single background layer: subdued ash-grey burst; elliptical fade.
  await emboss({
    file: 'art/burst.png', hole: [728, 530], w: 1460, h: 1010, outW: 900, name: 'burst',
    tone: () => [93, 91, 87],
    alphaMul: 0.36, hi: [105, 103, 99], hiAlpha: 0.12, hiOff: [-1, -1], shOff: [1, 1], shBlur: 1,
    mask: (u, v) => { const e = Math.hypot((u - 0.5) / 0.52, (v - 0.5) / 0.56) * 0.5 * 2 * 0.5; const ee = Math.hypot((u - 0.5) / 0.52, (v - 0.5) / 0.56); return ramp(ee, 0.45, 0.7, 1.0, 0.6); },
  });
}

console.log('logos');
await logo();
await sharp(path.join(SRC, 'logos/slaughterfest-white.png'))
  .resize({ width: 64, height: 64, fit: 'contain', background: '#0B0A0A' })
  .png()
  .toFile('public/favicon.png');
console.log('hero art');
await art();
console.log('photos');
await photos();
console.log('band logos');
for (const b of bands) if (b.logo) await plain(b.logo.src, 720, undefined);
console.log('partners');
for (const p of partners) if (p.logo) await plain(p.logo, undefined, 250);
console.log('ticket button');
await plain('partners/skillbox-white.png', 500, undefined);

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log('manifest written');

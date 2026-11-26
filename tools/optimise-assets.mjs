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

for (const d of ['logos', 'bands', 'photos', 'partners', 'art', 'crew']) {
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
async function plain(srcRel, maxW, maxH, key, dark = false) {
  const input = path.join(SRC, srcRel);
  const out = srcRel.replace(/\.(png|jpe?g)$/i, '.webp');
  let p = sharp(input).resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true });
  // "dark": a one-colour (white) logo is redrawn in the page black, so it reads on the light partner cards
  if (dark) {
    const raw = await p.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let i = 0; i < raw.data.length; i += 4) { raw.data[i] = 11; raw.data[i + 1] = 10; raw.data[i + 2] = 10; }
    p = sharp(raw.data, { raw: { width: raw.info.width, height: raw.info.height, channels: 4 } });
  }
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
    // Optional "darken" on a band's photo in bands.json (0 to 1, e.g. 0.3) dims a bright photo so the text over it stays readable.
    {
      const darken = b.photo.darken ?? 0;
      const { data, info } = await sharp(input).resize(W, H, { fit: 'cover' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      const out = Buffer.alloc(W * H * 3);
      const dark = [18, 8, 10], light = [214, 176, 168], wine = [58, 18, 19], void_ = [11, 10, 10];
      for (let y = 0; y < H; y++) {
        const t = y / H;
        const o = t < 0.32 ? lerp(0.72, 0.25, t / 0.32) : t < 0.55 ? 0.25 * (1 - (t - 0.32) / 0.23) : 0;
        for (let x = 0; x < W; x++) {
          const i = (y * W + x) * 3;
          let l = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          l = clamp(((l - 0.5) * 1.1 + 0.5) * 0.9 * (1 - darken), 0, 1);
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

// ---------- engravings: line art salvaged from the poster PSD (tools/extract-psd-art.py) ----------
// Masters are white ink on transparent. Each is redrawn in one flat colour at a low, fixed opacity, with an optional soft edge,
// so the page shows them as faint printed stamps without any CSS opacity, filter or blend mode.
async function engraving({ file, name, outW, color, alphaMul, fade = () => 1 }) {
  const { data, info } = await sharp(path.join(SRC, 'art', file)).resize({ width: outW }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  const out = Buffer.alloc(W * H * 4);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    out[i] = color[0]; out[i + 1] = color[1]; out[i + 2] = color[2];
    out[i + 3] = Math.round(data[i + 3] * alphaMul * fade((x + 0.5) / W, (y + 0.5) / H));
  }
  const r = await save(out, W, H, 4, `art/${name}.webp`, { quality: 60, alphaQuality: 50, effort: 6 });
  manifest[`art/${name}`] = r;
  console.log('  ', name, r.width + 'x' + r.height, r.kb + ' KB');
}
const smooth = (e0, e1, v) => { const t = Math.min(1, Math.max(0, (v - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
async function engravings() {
  // Lineup stamps: copper ink at low strength on the page black (cf. the clay stamps on reincarock.surgeculture.com).
  const copper = [164, 115, 85];
  const stamp = { color: copper, alphaMul: 0.2, outW: 900 };
  await engraving({ ...stamp, file: 'engraving-mammoth.png', name: 'stamp-mammoth', fade: (u, v) => smooth(0, 0.18, u) * smooth(1, 0.8, v) });
  await engraving({ ...stamp, file: 'engraving-crown.png', name: 'stamp-crown', fade: (u, v) => smooth(1, 0.7, v) });
  await engraving({ ...stamp, outW: 640, file: 'engraving-reaper.png', name: 'stamp-reaper', fade: (u, v) => smooth(1, 0.85, v) });
  // Edge decorations from the poster: all in faint copper ink on the page black.
  await engraving({ color: copper, alphaMul: 0.5, outW: 520, file: 'engraving-vines.png', name: 'vines' }); // thin strokes need more strength
  await engraving({ color: copper, alphaMul: 0.28, outW: 206, file: 'engraving-pillar.png', name: 'pillar', fade: (u, v) => smooth(0, 0.12, v) * smooth(1, 0.85, v) });
  await engraving({ color: copper, alphaMul: 0.24, outW: 480, file: 'engraving-banner.png', name: 'banner', fade: (u, v) => smooth(1, 0.7, v) });
  await engraving({ color: copper, alphaMul: 0.26, outW: 1400, file: 'engraving-skulls.png', name: 'skulls', fade: (u, v) => smooth(1, 0.35, v) });
  // Tickets: the whole altar in a deep wine ink on the oxblood panel, fading out towards the base.
  await engraving({ file: 'engraving-altar.png', name: 'altar', outW: 1100, color: [42, 11, 12], alphaMul: 0.32, fade: (u, v) => smooth(1, 0.55, v) });
}

// ---------- social share image (WhatsApp, Instagram DMs, iMessage, X…): public/assets/og.jpg, 1200x630 ----------
// Everything important sits in the middle, because some apps crop the preview to a square.
async function og() {
  const W = 1200, H = 630;
  const altar = await sharp(path.join(SRC, 'art/engraving-altar.png')).resize({ height: 760 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const aw = altar.info.width, ah = altar.info.height, ad = altar.data;
  for (let y = 0; y < ah; y++) for (let x = 0; x < aw; x++) {
    const i = (y * aw + x) * 4;
    ad[i] = 122; ad[i + 1] = 35; ad[i + 2] = 37; // oxblood ink
    ad[i + 3] = Math.round(ad[i + 3] * 0.42 * smooth(1, 0.55, y / ah));
  }
  // crop to the canvas height (the altar starts 40px above the top edge)
  const altarPng = await sharp(ad, { raw: { width: aw, height: ah, channels: 4 } }).extract({ left: 0, top: 40, width: aw, height: H }).png().toBuffer();
  const logoPng = await sharp(path.join(SRC, 'logos/slaughterfest-white.png')).resize({ width: 800 }).png().toBuffer();
  const lh = Math.round(659 * 800 / 1600);
  const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <style>text{font-family:Georgia,'Georgia Pro',serif;text-anchor:middle}</style>
    <text x="600" y="62" font-size="19" letter-spacing="7" fill="#B09E62">SURGECULTURE PRESENTS</text>
    <rect x="300" y="452" width="600" height="2" fill="#A47355"/>
    <text x="600" y="512" font-size="44" font-weight="700" letter-spacing="4" fill="#B09E62">SAT · 5 DECEMBER 2026</text>
    <text x="600" y="560" font-size="25" letter-spacing="6" fill="#CFCBC0">THE HUMMING TREE · BANGALORE</text>
    <text x="600" y="602" font-size="19" font-style="italic" letter-spacing="1" fill="#a9a59a">Six bands. One pit. One night.</text>
  </svg>`);
  await sharp({ create: { width: W, height: H, channels: 3, background: '#0B0A0A' } })
    .composite([
      { input: altarPng, left: Math.round((W - aw) / 2), top: 0 },
      { input: logoPng, left: 200, top: 88 },
      { input: text, left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(OUT, 'og.jpg'));
  console.log('   og.jpg', W + 'x' + H, kb(path.join(OUT, 'og.jpg')) + ' KB', '(logo height', lh + ')');
}

// ---------- crew portraits (assets-src/crew/, named in src/data/crew.json) ----------
// Colour, cropped to 4:5 around a hand-set face point so every face sits in the middle of its frame.
//   "focus": [x, y]  where the face is, as fractions of the photo (0 to 1)
//   "zoom":  1 = the widest 4:5 crop that fits, 1.3 = 30% tighter
async function crewPhotos() {
  const crew = JSON.parse(readFileSync('src/data/crew.json', 'utf8'));
  for (const c of crew) {
    if (!c.photo) continue;
    const key = c.photo.replace(/\.\w+$/, '');
    const out = `crew/${key}.webp`;
    // Orient first (phone photos carry a rotation flag), then crop in the upright picture.
    const up = await sharp(path.join(SRC, 'crew', c.photo)).rotate().png().toBuffer({ resolveWithObject: true });
    const W = up.info.width, H = up.info.height;
    const zoom = c.zoom ?? 1, [fx, fy] = c.focus ?? [0.5, 0.5];
    const cw = Math.floor(Math.min(W, (H * 4) / 5) / zoom), ch = Math.floor((cw * 5) / 4);
    const left = Math.round(Math.min(W - cw, Math.max(0, fx * W - cw / 2)));
    const top = Math.round(Math.min(H - ch, Math.max(0, fy * H - ch / 2)));
    const info = await sharp(up.data)
      .extract({ left, top, width: cw, height: ch })
      .resize(640, 800, { fit: 'fill', withoutEnlargement: true }) // small originals are not blown up
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(OUT, out));
    manifest[`crew/${key}`] = { src: out, width: info.width, height: info.height };
    console.log('  ', out, info.width + 'x' + info.height, kb(path.join(OUT, out)) + ' KB');
  }
}

console.log('logos');
await logo();
// Favicons: the reaper's red hood and skull face from the poster (a square master cut by tools/extract-psd-art.py).
// A bold colour shape like this still reads at 16px, where the spiky wordmark (or a single letter of it) does not.
for (const [file, size] of [['favicon.png', 64], ['apple-touch-icon.png', 180], ['icon-512.png', 512]]) {
  const pad = Math.round(size * (file === 'favicon.png' ? 0 : 0.1)); // touch icons get rounded corners
  const inner = await sharp(path.join(SRC, 'logos/favicon-reaper.png'))
    .resize(size - 2 * pad, size - 2 * pad, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await sharp(inner)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten({ background: '#0B0A0A' })
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join('public', file));
}
console.log('hero art');
await art();
console.log('engravings');
await engravings();
console.log('crew');
await crewPhotos();
console.log('share image');
await og();
console.log('photos');
await photos();
console.log('band logos');
for (const b of bands) if (b.logo) await plain(b.logo.src, 720, undefined);
console.log('partners');
for (const p of partners) if (p.logo) await plain(p.logo, undefined, 250, undefined, p.dark);
console.log('ticket button');
await plain('partners/skillbox-white.png', 500, undefined);

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log('manifest written');

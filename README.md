# Slaughter Fest 2026

Website for Slaughter Fest 2026: Saturday 5 December 2026, The Humming Tree, Bangalore. Produced by Surgeculture.

A small static site built with [Astro](https://astro.build). No server, no database, no client framework. Fonts are self-hosted (open-licence) and there are no third-party requests.

## Run it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the site to dist/
npm run preview  # serve the built dist/ locally
```

Requires Node 18+ (developed on Node 22).

## Going live

The site is live at **https://slaughterfest.surgeculture.com**. It's served by the Cloudflare Worker `slaughterfest` (`wrangler.jsonc`), and the bare domain `surgeculture.com` currently forwards here.

**Whatever is on `main` is the live site.** Cloudflare Workers Builds watches this repo: every push to `main` runs `npm run build`, then `npx wrangler deploy`, and the change is live about a minute later. Check the **Workers Builds: slaughterfest** status on the commit in GitHub. There's nothing else to upload.

- Work on a branch and merge into `main` when you want it live.
- Undo a bad release: revert the commit on `main` (it redeploys), or roll back the `slaughterfest` Worker's deployment in the Cloudflare dashboard.
- `npm run deploy` deploys your local `dist/` by hand (needs `npx wrangler login`). Only for emergencies: the next push to `main` overwrites it.

## Where to change things

Everything that changes between now and the event lives in three JSON files. Edit, save, rebuild.

| File | What it holds |
|---|---|
| `src/data/site.json` | Date, venue, producer, **ticket URL**, doors, ticket types and their status, getting there. A value of `null` shows `[TBA]` on the page. |
| `src/data/bands.json` | The lineup, in billing order (top to bottom). Add, remove or reorder bands here. |
| `src/data/partners.json` | Partner strip. Set `url` to make a logo a link. |

Common jobs:

- **Ticket link is ready:** set `"ticketUrl"` in `site.json`. Every "Book tickets" button then opens it in a new tab and the "link coming soon" text disappears.
- **Confirm doors:** replace `null` with text in `site.json`.
- **A ticket type sells out or changes status:** in `site.json`, set its `"status"` under `ticketOptions` to `"sold-out"` (struck through, "Sold out" tag), `"running-low"` or `"upcoming"`. Remove `"status"` for no tag.
- **Fill in a band's details:** set `city`, `descriptor` and `fact` in `bands.json`. `null` renders as `[TBA]`.
- **Add a band:** copy an entry in `bands.json`, add its files under `public/assets/bands/` and `public/assets/photos/`. A band without a `logo` is set as text. `"card": true` on a photo is for studio shots on a white background (printed-card look).
- **Production URL known:** uncomment `site` in `astro.config.mjs` to turn on canonical and social-share URLs.

## Structure

```
src/
  data/         site.json, bands.json, partners.json   <- edit these
  components/   Header, Hero, Marquee, Lineup, Facts, Tickets, Partners, Footer
  layouts/      Base.astro (head, fonts, small script)
  styles/       global.css (palette tokens at the top)
  pages/        index.astro
assets-src/     master images: edit or replace these
public/assets/  generated web images + og.jpg (do not edit by hand: run `npm run assets`)
tools/          optimise-assets.mjs (the image pipeline), extract-psd-art.py (poster PSD to engraving masters)
design/         research, design directions, palette, early prototypes (not part of the build)
```

## Images and performance

Built to be fast on weak PCs and slow connections: about 1.5 MB in total, 12 requests and roughly 0.5 MB for the first screen, with no runtime filters, blend modes, masks or blurs.

- **Images are baked.** `npm run assets` turns the masters in `assets-src/` into WebP files in `public/assets/` and writes `src/data/manifest.json`. Tints, photo grading, the embossed ring and burst, fades and the logo's shadow are all rendered into the pictures, so the browser only paints plain images. Re-run it after changing a master image or adding a band.
- **Poster engravings:** the faint stamps behind the lineup rows (mammoth, gate crown, reaper) and the altar behind Tickets are the poster's own line art, cut out of `psd/SLAUGHTER FEST 2026 colour.psd` by `tools/extract-psd-art.py` into `assets-src/art/engraving-*.png`. The tint and strength are set in `engravings()` in `tools/optimise-assets.mjs`. Only re-run the extract script if the artwork changes (needs `pip install psd-tools`).
- **Add a band photo or logo:** put the file in `assets-src/photos/` (16:9 works best) or `assets-src/bands/`, point `src/data/bands.json` at it, then run `npm run assets`.
- **Lazy by default.** The big desktop hover photos download only when you first hover a band (and are warmed up one by one on good connections). Phones never download them.
- **Fonts:** self-hosted, Latin subset only.
- **"Lite" mode** switches on by itself for devices with 2 cores or fewer, 2 GB RAM or less, Save-Data or a 2G connection, and with `prefers-reduced-motion`: no animations or transitions and no decorative burst.
- **Hosting:** `public/_headers` sets long cache times (Cloudflare Pages and Netlify read it).

## Design

Palette and mood come from the client's 2026 poster; see `design/PALETTE.md`. The festival logo is used as supplied and never re-drawn. Blackletter (UnifrakturMaguntia) is for large headings only, with plain faces for all facts.

## Client files

The raw partner and artist folders (`Partner Logos-*`, `Slaughterfest 2026 - Artists-*`) and the poster PSDs (`psd/`, ~400 MB) are git-ignored. They are large and include tech riders and contact details, which must not be published. Only resized web copies are in `public/assets/`.

## Before launch

- Real ticket URL and doors.
- Confirm billing order and the details for Fallen Letters, Backrooms and Haiku Like Imagination.
- A logo file for Astrit, and a clean venue logo if wanted.
- Confirm permission to show the partner logos, and add partner links.
- Add `site` URL, then check the social preview image (`public/assets/og.jpg`).
- Convert photos to WebP/AVIF if page weight matters (currently about 4 MB total).

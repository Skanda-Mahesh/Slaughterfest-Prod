import { defineConfig } from 'astro/config';

// Fully static site. `site` is the production URL (used for the canonical and social-share URLs).
export default defineConfig({
  site: 'https://slaughterfest.surgeculture.com',
  build: { inlineStylesheets: 'always' },
});

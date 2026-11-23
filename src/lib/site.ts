import site from '../data/site.json';
import manifestJson from '../data/manifest.json';

/** Public URL of a file in public/assets, respecting a custom `base`. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/assets/${path}`;

/** Sizes and file names of the optimised images, written by `npm run assets` (tools/optimise-assets.mjs). */
export const manifest = manifestJson as Record<string, any>;

/** Where every "Book tickets" button points. Falls back to the on-page tickets section until a SkillBox URL is set. */
export const ticketsLive = Boolean(site.ticketUrl);
export const ticketHref: string = site.ticketUrl ?? '#tickets';
export const ticketAttrs: Record<string, string> = ticketsLive ? { target: '_blank', rel: 'noopener' } : {};

export { site };

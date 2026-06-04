// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Pages cachées (par niche) à NE PAS référencer dans le sitemap / Google.
// Garder en phase avec `hiddenSlugs` dans src/data/portfolios.ts.
const HIDDEN_SLUGS = ['weddings', 'corporate', 'sports', 'architecture', 'travel'];

// https://astro.build/config
export default defineConfig({
  site: 'https://chadow.photo',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // / = English, /fr/ = French
    },
  },

  integrations: [
    sitemap({
      // Exclut les pages cachées (et leurs versions /fr/) du sitemap.
      filter: (page) =>
        !HIDDEN_SLUGS.some((slug) => page.includes(`/${slug}`)),
    }),
  ],
});
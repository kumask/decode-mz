// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://decode-mz.vercel.app',
  adapter: vercel(),

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  integrations: [sitemap()],
});
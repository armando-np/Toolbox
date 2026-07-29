import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://toolbox.armando-nupa.workers.dev';

export default defineConfig({
  site,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !['/buscar/', '/calculadoras/isr/', '/404/'].some((path) => page.includes(path))
    })
  ],
  trailingSlash: 'always',
  compressHTML: true
});

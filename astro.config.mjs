import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://toolbox.armando-nupa.workers.dev',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'always'
});

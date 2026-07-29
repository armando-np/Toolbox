import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://toolboxmx.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'always'
});

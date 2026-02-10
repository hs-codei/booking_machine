// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.praxis-bewegungszeit.de', // Update this for each client
  integrations: [
    sitemap()
  ],
  build: {
    // Generate clean URLs (no .html extension)
    format: 'directory'
  }
});

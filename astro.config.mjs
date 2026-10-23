// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Static site for lumen.shusti.ru, published by .github/workflows/deploy.yml to GitHub Pages.
export default defineConfig({
  site: 'https://lumen.shusti.ru',
  trailingSlash: 'ignore',
  // The stylesheet is small: inlined, it no longer holds up the first paint.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});

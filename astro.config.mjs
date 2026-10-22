import { defineConfig } from 'astro/config';
import { site } from './src/data/site.js';

export default defineConfig({
  site: site.domain,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});

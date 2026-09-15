import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://umrt.ca',
  base: '/',
  build: { format: 'directory' },
  integrations: [mdx()]
});
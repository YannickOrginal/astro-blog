import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yannickorginal.de',
  output: 'static',
  session: false,
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    imageService: 'passthrough',
    sessionKV: false
  })
});
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://elonart.pages.dev',
	integrations: [mdx(), sitemap()],
	
// ADICIONE A SEÇÃO VITE ABAIXO
  vite: {
    build: {
      // Define um limite para ativos embutidos (incluindo CSS). O valor é em bytes.
      // 15kb = 15360 bytes. Isso garantirá que seus arquivos de CSS sejam embutidos.
      assetsInlineLimit: 15360
    }
  }
});

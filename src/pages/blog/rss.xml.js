// src/pages/blog/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    // O título do seu feed RSS
    title: SITE_TITLE,
    // A descrição do seu feed
    description: SITE_DESCRIPTION,
    // A URL completa do seu site
    site: context.site,
    // Uma lista de objetos com os dados dos seus posts
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // O link completo para o post
      link: `/blog/${post.slug}/`,
    })),
    // (Opcional) Estilo para deixar o feed mais legível no navegador
    customData: `<language>pt-br</language>`,
  });
}
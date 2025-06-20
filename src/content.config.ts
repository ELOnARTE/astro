import { defineCollection, z } from 'astro:content';

// Define a estrutura para a coleção 'blog'
const blogCollection = defineCollection({
  type: 'content', // ou 'data' para arquivos JSON/YAML
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    // CORREÇÃO: Informa ao Astro que 'heroImage' é um caminho para uma imagem
    // que ele precisa processar.
    heroImage: z.string(),
  }),
});

// Exporta as coleções
export const collections = {
  'blog': blogCollection,
};


import { defineCollection, z } from 'astro:content';

// Define the structure for the 'blog' collection
const blogCollection = defineCollection({
  type: 'content',
  // CORREÇÃO: O schema agora é uma função que usa o 'image' helper
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    // CORREÇÃO: 'heroImage' agora é processado como uma imagem pelo Astro
    // usando a função image() importada do Zod.
    heroImage: image(),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
};

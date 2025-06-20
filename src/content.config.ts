import { defineCollection, z } from 'astro:content';

// Define the structure for the 'blog' collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // CORREÇÃO: Usamos .transform() para converter a string de data
    // em um objeto de Data válido que o Astro pode usar.
    pubDate: z.string().transform((str) => new Date(str)),
    heroImage: z.string(),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
};


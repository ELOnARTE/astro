// src/content/config.ts

import { defineCollection, z } from 'astro:content';

// Define a "checklist" ou "schema" para a coleção de posts do blog
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: image().optional(),

    // =============== ADICIONE APENAS ESTA LINHA ===============
    featured: z.boolean().optional(),
    // ==========================================================
  }),
});

// Exporta a coleção para que o Astro possa usá-la
export const collections = { 
  'blog': blogCollection
};
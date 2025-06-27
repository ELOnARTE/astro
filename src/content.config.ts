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

    // Aqui dizemos ao Astro que a propriedade 'tags' é permitida.
    // Ela deve ser um array de strings e é opcional.
    tags: z.array(z.string()).optional(),

    // =============== ADICIONE APENAS ESTA LINHA ===============
    featured: z.boolean().optional(),
    // ==========================================================
  }),
});

// Exporta a coleção para que o Astro possa usá-la
export const collections = { 
  'blog': blogCollection
};
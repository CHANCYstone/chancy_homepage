import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['code', 'principles', 'writing', 'quant']),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };

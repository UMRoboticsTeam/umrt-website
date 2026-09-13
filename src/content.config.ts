import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sponsors = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/sponsors',
  }),

  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      href: z.string().url().optional(),
      tier: z.enum(['low', 'med', 'high']),
    }),
});

export const collections = {
  sponsors,
};
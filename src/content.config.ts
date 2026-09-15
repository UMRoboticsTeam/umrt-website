import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sponsors = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/sponsors',
  }),

  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      href: z.string().url().optional(),
      tier: z.enum(['low', 'med', 'high']),
    }),
});

const archive = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/archive',
  }),

  schema: ({ image }) =>
    z.object({
      year: z.string(),
      mainPhoto: image(),
      description: z.string(),

      roles: z.array(
        z.object({
          role: z.string(),
          member: z.string(),
        })
      ),

      members: z.array(z.string()),

      gallery: z.array(
        z.object({
          image: image(),
          alt: z.string(),
        })
      ),
    }),
});

export const collections = {
  sponsors,
  archive,
};
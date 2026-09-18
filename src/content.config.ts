import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const archive = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/archive',
  }),

  schema: ({ image }) =>
    z.object({
      year: z.string(),
      theme: z.string(),
      mainPhoto: image(),
      description: z.string(),

      roles: z.array(
        z.object({
          role: z.string(),
          member: z.string(),
        })
      ),

      members: z.array(z.string()),
    }),
});

const team = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/team',
  }),

  schema: ({ image }) =>
    z.object({
      executives: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          image: image(),
          socials: z.record(z.string(), z.string()),
          description: z.string().optional(),
        })
      ),

      sections: z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
          description: z.string().optional(),
          leads: z.array(
            z.object({
              name: z.string(),
              role: z.string(),
              image: image(),
              socials: z.record(z.string(), z.string()),
              description: z.string().optional(),
            })
          ),
        })
      ),
    }),
});

export const collections = {
  archive,
  team,
};
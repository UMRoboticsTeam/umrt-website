import { defineCollection, reference } from 'astro:content';
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

const programs = defineCollection({
  loader: glob({
    pattern: '*.mdx',
    base: './src/content/programs',
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      order: z.number().default(0),
    }),
});

const specification = z.object({
  label: z.string(),
  value: z.string(),
});

const resourceLink = z.object({
  label: z.string(),
  href: z.string().refine(
    (value) => (value.startsWith('/') && !value.startsWith('//')) || /^https?:\/\//.test(value),
    'Links must use a local path or an HTTP(S) URL.'
  ),
});

const projects = defineCollection({
  loader: glob({
    pattern: '*.mdx',
    base: './src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      program: reference('programs'),
      name: z.string(),
      season: z.string(),
      year: z.number().int(),
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      specifications: z.array(specification).default([]),
      systems: z.array(
        z.object({
          name: z.string(),
          description: z.string().optional(),
          specifications: z.array(specification).default([]),
          links: z.array(resourceLink).default([]),
          photo: z.object({
            image: image(),
            alt: z.string(),
          }).optional(),
        })
      ).default([]),
      links: z.array(resourceLink).default([]),
    }),
});

export const collections = {
  archive,
  team,
  programs,
  projects,
};

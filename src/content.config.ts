import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    locale: z.enum(['fa', 'en']).default('en'),
    translationKey: z.string().optional(),
    title: z.string(),
    summary: z.string(),
    challenge: z.string(),
    highlight: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    context: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    order: z.number().int().default(0),
    externalUrl: z.url().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    locale: z.enum(['fa', 'en']).default('en'),
    translationKey: z.string().optional(),
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, posts };

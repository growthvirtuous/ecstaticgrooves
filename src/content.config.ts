import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({
    day: z.string(),
    monthLabel: z.string(),
    titleIt: z.string(),
    titleEn: z.string(),
    venue: z.string(),
    ticketUrl: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
  }),
});

export const collections = { events, testimonials };

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
    rating: z.number().min(1).max(5).default(5),
  }),
});

const siteImages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site' }),
  schema: z.object({
    heroPoster: z.string().optional().default(''),
    homeStory: z.string().optional().default(''),
    experienceBody: z.string().optional().default(''),
    experienceMusic: z.string().optional().default(''),
    aboutStory: z.string().optional().default(''),
    aboutEarthpercentBadge: z.string().optional().default(''),
    eventsLocation: z.string().optional().default(''),
    eventsFirstTime: z.string().optional().default(''),
    blogCoverPillar: z.string().optional().default(''),
    blogCoverHome: z.string().optional().default(''),
    blogCoverPlanet: z.string().optional().default(''),
  }),
});

export const collections = { events, testimonials, siteImages };

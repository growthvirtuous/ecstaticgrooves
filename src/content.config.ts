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

const homeText = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/home' }),
  schema: z.object({
    hero: z.object({
      eyebrowIt: z.string(), eyebrowEn: z.string(),
      titleIt: z.string(), titleEn: z.string(),
      subIt: z.string(), subEn: z.string(),
      ctaPrimaryIt: z.string(), ctaPrimaryEn: z.string(),
      ctaSecondaryIt: z.string(), ctaSecondaryEn: z.string(),
    }),
    whatWeDo: z.object({
      eyebrowIt: z.string(), eyebrowEn: z.string(),
      titleIt: z.string(), titleEn: z.string(),
      leadIt: z.string(), leadEn: z.string(),
      bodyIt: z.string(), bodyEn: z.string(),
      linkTextIt: z.string(), linkTextEn: z.string(),
    }),
    testimonials: z.object({
      eyebrowIt: z.string(), eyebrowEn: z.string(),
      titleIt: z.string(), titleEn: z.string(),
    }),
    newsletter: z.object({
      eyebrowIt: z.string(), eyebrowEn: z.string(),
      titleIt: z.string(), titleEn: z.string(),
      bodyIt: z.string(), bodyEn: z.string(),
      emailPlaceholderIt: z.string(), emailPlaceholderEn: z.string(),
      buttonIt: z.string(), buttonEn: z.string(),
      noteIt: z.string(), noteEn: z.string(),
    }),
  }),
});

export const collections = { events, testimonials, siteImages, homeText };

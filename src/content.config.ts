import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each devlog is a Markdown file in src/content/devlog/.
// The file name becomes the URL: my-post.md -> /devlog/my-post/
const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      game: z.string().optional(),
      steamUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { devlog };

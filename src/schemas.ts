import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
});

export const searchResultSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.enum(['VIDEOS', 'PLAYLISTS', 'BLOG_POSTS']),
  })
);

export const inputSchema = z.string().trim();

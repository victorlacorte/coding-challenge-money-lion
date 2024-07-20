import { z } from 'zod';

import { envSchema, searchResultSchema } from './schemas';

export type SearchResult = z.infer<typeof searchResultSchema>;

export type Env = z.infer<typeof envSchema>;

const iconKinds = ['file-text', 'list', 'search', 'video'] as const;

export type IconKind = (typeof iconKinds)[number];

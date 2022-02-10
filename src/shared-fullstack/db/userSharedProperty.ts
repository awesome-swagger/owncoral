import { z } from 'zod';

export const UserSharedProperty = z.object({
  id: z.string().uuid().nullable().optional(),
  avatar_url: z.string().nullable().optional(),
  display_name: z.string().nullable().optional(),
  ownership_pct: z.number().nullable().optional(),
});

export type UserSharedPropertyT = z.infer<typeof UserSharedProperty>;

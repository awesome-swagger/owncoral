import { z } from 'zod';

export const SessionPrivate = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  last_active: z.string().optional(),
});

export type SessionPrivateT = z.infer<typeof SessionPrivate>;

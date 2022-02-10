import { z } from 'zod';

export const Waitlist = z.object({
  id: z.string().uuid().optional(),
  email: z.string().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  deleted_at: z.string().nullable().optional(),
});

export type WaitlistT = z.infer<typeof Waitlist>;

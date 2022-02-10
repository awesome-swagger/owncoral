import { z } from 'zod';

export const Address = z.object({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  line1: z.string(),
  line2: z.string().nullable().optional(),
  line3: z.string().nullable().optional(),
  city_locality: z.string(),
  state_region: z.string(),
  postal_code: z.string(),
  country: z.string(),
});

export type AddressT = z.infer<typeof Address>;

import { z } from 'zod';

export const ListingsInterest = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid().nullable().optional(),
  property_id: z.string().uuid().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  deleted_at: z.string().nullable().optional(),
  interest_amt: z.number().nullable().optional(),
});

export type ListingsInterestT = z.infer<typeof ListingsInterest>;

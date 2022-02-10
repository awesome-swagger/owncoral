import { z } from 'zod';

export const Investment = z.object({
  legal_person_id: z.string().uuid(),
  property_id: z.string().uuid(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  ownership_pct: z.number().nullable().optional(),
});

export type InvestmentT = z.infer<typeof Investment>;

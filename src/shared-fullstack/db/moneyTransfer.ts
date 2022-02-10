import { z } from 'zod';

export const MoneyTransfer = z.object({
  id: z.string().uuid().optional(),
  legal_person_id: z.string().uuid().nullable().optional(),
  property_id: z.string().uuid().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  initiated_at: z.string(),
  transaction_month: z.string().nullable().optional(),
  ccy_code: z.string(),
  distribution_total: z.number().nullable().optional(),
  distribution_rental: z.number().nullable().optional(),
  distribution_special: z.number().nullable().optional(),
  contribution: z.number().nullable().optional(),
  realized_gain: z.number().nullable().optional(),
  ownership_pct_change: z.number().nullable().optional(),
});

export type MoneyTransferT = z.infer<typeof MoneyTransfer>;

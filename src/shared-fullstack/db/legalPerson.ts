import { z } from 'zod';

export const LegalPerson = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  accounting_id: z.string().optional(),
  legal_name: z.string(),
  buildium_id: z.number().int().nullable().optional(),
  is_corporation: z.boolean().nullable().optional(),
  employer_id_number: z.string().nullable().optional(),
  state_domicile: z.string().nullable().optional(),
  address_headquarters: z.string().uuid().nullable().optional(),
  address_mailing: z.string().uuid().nullable().optional(),
});

export type LegalPersonT = z.infer<typeof LegalPerson>;

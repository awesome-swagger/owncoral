import { z } from 'zod';

export const UserRegistration = z.object({
  id: z.string().uuid().nullable().optional(),
  requires_manual_review: z.boolean().nullable().optional(),
  legal_first: z.string().nullable().optional(),
  legal_last: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  email_alt: z.string().nullable().optional(),
  job_title: z.string().nullable().optional(),
  employer_name: z.string().nullable().optional(),
  linkedin_profile: z.string().nullable().optional(),
  intended_investment_size: z.number().nullable().optional(),
  net_worth: z.number().nullable().optional(),
  income_annual: z.number().nullable().optional(),
  accreditation_types: z.string().nullable().optional(),
  investment_experience_yrs: z.number().nullable().optional(),
  investment_goals: z.array(z.enum(["DIVERSIFICATION", "INCOME", "RETURNS", "TAX_EFFICIENCY", "NOT_SURE"])).nullable().optional(),
  investment_types: z.array(z.enum(["STOCKS", "BONDS", "REAL_ESTATE", "STARTUPS", "HEDGE_FUNDS", "PRIVATE_EQUITY", "OTHER"])).nullable().optional(),
  accounting_id: z.string().nullable().optional(),
  is_verified: z.boolean().nullable().optional(),
  created_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
});

export type UserRegistrationT = z.infer<typeof UserRegistration>;

import { z } from 'zod';

export const UserPrivate = z.object({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  accounting_id: z.string().optional(),
  display_name: z.string().nullable().optional(),
  avatar_url: z.string().nullable().optional(),
  password_hash: z.string().nullable().optional(),
  salt: z.string().nullable().optional(),
  last_login_at: z.string().optional(),
  failed_password_attempts: z.number().int().optional(),
  first_failed_password_attempt: z.string().nullable().optional(),
  reset_password_token: z.string().nullable().optional(),
  reset_password_token_generated_at: z.string().nullable().optional(),
  is_admin: z.boolean().optional(),
  email: z.string().nullable().optional(),
  email_alt: z.string().nullable().optional(),
  is_verified_primary: z.boolean().optional(),
  is_verified_alt: z.boolean().optional(),
  verification_token_primary: z.string().nullable().optional(),
  verification_token_alt: z.string().nullable().optional(),
  verification_email_primary_generated_at: z.string().nullable().optional(),
  verification_email_alt_generated_at: z.string().nullable().optional(),
  legal_first: z.string().nullable().optional(),
  legal_last: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  phone_alt: z.string().nullable().optional(),
  address_mailing: z.string().uuid().nullable().optional(),
  address_residency: z.string().uuid().nullable().optional(),
  is_accredited_by_income: z.boolean().nullable().optional(),
  is_accredited_by_license: z.boolean().nullable().optional(),
  is_accredited_by_assets: z.boolean().nullable().optional(),
  residency_country_code: z.string().optional(),
  investment_experience_yrs: z.number().nullable().optional(),
  investment_goals: z
    .array(z.enum(['DIVERSIFICATION', 'INCOME', 'RETURNS', 'TAX_EFFICIENCY', 'NOT_SURE']))
    .nullable()
    .optional(),
  investment_types: z
    .array(
      z.enum([
        'STOCKS',
        'BONDS',
        'REAL_ESTATE',
        'STARTUPS',
        'HEDGE_FUNDS',
        'PRIVATE_EQUITY',
        'OTHER',
      ]),
    )
    .nullable()
    .optional(),
  net_worth: z.number().nullable().optional(),
  income_annual: z.number().nullable().optional(),
  job_title: z.string().nullable().optional(),
  employer_name: z.string().nullable().optional(),
  linkedin_profile: z.string().nullable().optional(),
  intended_investment_size: z.number().nullable().optional(),
  birth_date: z.string().nullable().optional(),
  is_signup_complete: z.boolean().optional(),
  signup_score: z.number().nullable().optional(),
  tax_payer_id: z.string().nullable().optional(),
  is_1099_eligible: z.boolean().nullable().optional(),
});

export type UserPrivateT = z.infer<typeof UserPrivate>;

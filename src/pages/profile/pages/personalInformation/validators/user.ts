import { z } from 'zod';

import { Address } from './address';

// Mostly matches franklin.user_self in /db/schema/user.sql
// We expand address into its own object
export const UserProfile = z.object({
  isAdmin: z.boolean(),

  email: z.string().email(),
  emailAlt: z.string().email(),
  isVerifiedPrimary: z.boolean(),
  isVerifiedAlt: z.boolean(),

  legalFirst: z.string(),
  legalLast: z.string(),

  phone: z.string(),
  phoneAlt: z.string(),

  addressMailing: Address,
  addressResidency: Address,

  taxPayerId: z.string(),
  is1099Eligible: z.boolean(),
  completedAccreditation: z.boolean(),
  birthDate: z.string(),
});

type UserProfileT = z.infer<typeof UserProfile>;
export type { UserProfileT };

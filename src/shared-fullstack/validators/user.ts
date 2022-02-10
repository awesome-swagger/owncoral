import { z } from 'zod';

import { UserPrivate } from '../db/userPrivate';
import { Address } from './address';

// Mostly matches franklin.user_self in /db/schema/user.sql
// We expand address into its own object
export const UserProfile = z.object({
  id: z.string(),
  isAdmin: z.boolean(),

  email: z.string().email().nullable(),
  emailAlt: z.string().email().nullable(),
  isVerifiedPrimary: z.boolean(),
  isVerifiedAlt: z.boolean(),

  legalFirst: z.string().nullable(),
  legalLast: z.string().nullable(),
  avatarUrl: z.string().nullable(),

  phone: z.string().nullable(),
  phoneAlt: z.string().nullable(),

  addressMailing: Address.nullable(),
  addressResidency: Address.nullable(),

  taxPayerId: z.string().nullable(),
  is1099Eligible: z.boolean().nullable(),
  birthDate: z.union([z.string(), z.date()]).nullable(),

  isSignupComplete: z.boolean(),
  signupScore: z.number().nullable(),

  numInvestments: z.number().nullable(),
});

export type UserProfileT = z.infer<typeof UserProfile>;

export const AdminPanelUserInfo = z.object({
  id: z.string(),
  email: z.string().email().nullable(),
  displayName: z.string().nullable(),
});

export type AdminPanelUserInfoT = z.infer<typeof AdminPanelUserInfo>;

/**
 * NOTE: Keep in sync with TYPE franklin.user_investment_goal in schema/user.sql
 */
export const InvestmentGoal = z.enum([
  'DIVERSIFICATION',
  'INCOME',
  'RETURNS',
  'TAX_EFFICIENCY',
  'NOT_SURE',
]);
export type InvestmentGoalT = z.infer<typeof InvestmentGoal>;

/**
 * NOTE: Keep in sync with TYPE franklin.user_investment_goal in schema/user.sql
 */
export const InvestmentType = z.enum([
  'STOCKS',
  'BONDS',
  'REAL_ESTATE',
  'STARTUPS',
  'HEDGE_FUNDS',
  'PRIVATE_EQUITY',
  'OTHER',
]);
export type InvestmentTypeT = z.infer<typeof InvestmentType>;

/**
 * Fields used during signup. See schema/user.sql.
 */
export const SignupInfo = z.object({
  id: z.string().nullable(),

  isSignupComplete: z.boolean(),

  email: z.string().email().nullable(),
  emailAlt: z.string().email().nullable(),

  legalFirst: z.string().nullable(),
  legalLast: z.string().nullable(),

  isAccreditedByIncome: z.boolean().nullable(),
  isAccreditedByLicense: z.boolean().nullable(),
  isAccreditedByAssets: z.boolean().nullable(),

  investmentExperienceYrs: z.number().nullable(),
  investmentGoals: z.array(InvestmentGoal).nullable(),
  investmentTypes: z.array(InvestmentType).nullable(),

  netWorth: z.number().nullable(),
  incomeAnnual: z.number().nullable(),
  jobTitle: z.string().nullable(),
  employerName: z.string().nullable(),
  linkedinProfile: z.string().nullable(),
  intendedInvestmentSize: z.number().nullable(),

  residencyCountryCode: z.string().nullable(),
  taxPayerId: z.string().nullable(),
  birthDate: z.string().nullable(),

  signupScore: z.number().nullable(),
});
export type SignupInfoT = z.infer<typeof SignupInfo>;

// Extend the UserPrivate type to enforce the existance of the `id`.
export const UserPrivateStrict = UserPrivate.extend({
  id: z.string().uuid(),
});
export type UserPrivateStrictT = z.infer<typeof UserPrivateStrict>;

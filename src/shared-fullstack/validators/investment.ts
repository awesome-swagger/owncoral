import { z } from 'zod';

// Data is mostly from
//  /db/schema/investments.sql
//  /db/schema/money_transfer.sql
export const PortfolioPropertyDetailInvestment = z.object({
  propertyId: z.string(),
  legalPersonId: z.string(),

  propertyName: z.string(),
  legalPersonName: z.string(),

  currentEquity: z.number().nullable(),
  currentOwnershipPct: z.number().nullable(),

  sumDistributionTotal: z.number(),
  sumDistributionRental: z.number(),
  sumDistributionSpecial: z.number(),

  // These default to 0 even if there's no distribution
  lastDistributionTotal: z.number(),
  lastDistributionRental: z.number(),
  lastDistributionSpecial: z.number(),

  // Will be null if there's no distribution yet
  lastDistributionMonth: z.date().nullable(),

  months: z.number().nullable(),
});

export type PortfolioPropertyDetailInvestmentT = z.infer<typeof PortfolioPropertyDetailInvestment>;

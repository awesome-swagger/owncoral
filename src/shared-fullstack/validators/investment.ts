import { z } from 'zod';

// Data is mostly from
//  /db/schema/legal_entity__property.sql
//  /db/schema/money_transfer.sql
export const PortfolioPropertyDetailInvestment = z.object({
  propertyId: z.string(),
  legalEntityId: z.string(),

  propertyName: z.string(),
  legalEntityName: z.string(),

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
  lastDistributionInitiatedAt: z.date().nullable(),
});

export type PortfolioPropertyDetailInvestmentT = z.infer<typeof PortfolioPropertyDetailInvestment>;

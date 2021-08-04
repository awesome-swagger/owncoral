import { z } from 'zod';

import { Address } from './address';
import { Json } from './json';
import { SourcesUses } from './propertyFinancials';

// For method `portfolioDashboardPost` in
// `@app/server/controllers/portfolio.ts`
export const PortfolioDashboardProperty = z.object({
  propertyId: z.string(),
  legalEntityId: z.string(),

  propertyName: z.string(),
  legalEntityName: z.string(),
  iconUrl: z.string().nullable(),

  address: Address,

  // TODO: process this on server
  monthlyDistribution: z.number().nullable(),
  cashflowSchedule: Json.nullable(),

  currentEquity: z.number().nullable(),

  // These default to 0 even if there's been no distribution
  sumDistributionTotal: z.number(),
  sumDistributionRental: z.number(),
  sumDistributionSpecial: z.number(),

  lastDistributionTotal: z.number(),
  lastDistributionMonth: z.date().nullable(),

  months: z.number().nullable(),
});
export type PortfolioDashboardPropertyT = z.infer<typeof PortfolioDashboardProperty>;

export const ListingsProperty = z.object({
  propertyId: z.string(),
  name: z.string(),

  address: Address,

  areaUnits: z.string().nullable(),
  areaLiving: z.number().nullable(),
  numUnits: z.number().nullable(),
  cardImageUrl: z.string().nullable(),

  listingIrr: z.number(),
  listingCashDist: z.number(),

  mdlEquity: z.number().nullable(),
});
export type ListingsPropertyT = z.infer<typeof ListingsProperty>;

const BasePropertyDetail = z
  .object({
    id: z.string(),

    name: z.string().nullable(),
    description: z.string().nullable(),
    imageUrls: z.array(z.string()),

    address: Address,

    numUnits: z.number().nullable(),
    numBeds: z.number().nullable(),
    numBaths: z.number().nullable(),
    numStories: z.number().nullable(),

    areaUnits: z.string().nullable(),
    areaLiving: z.number().nullable(),
    areaLotSize: z.number().nullable(),

    descriptionMarkdown: z.string().nullable(),
    occupancyStatus: z.string().nullable(),
    isUnderRenovation: z.boolean(),

    // TODO: not nullable (and in property.sql)
    ccyCode: z.string().max(3).nullable(),
    rentalIncomeMonthlyCurrent: z.number().nullable(),
    rentalIncomeMonthlyTarget: z.number().nullable(),
  })
  .merge(SourcesUses);

export const PortfolioPropertyDetail = BasePropertyDetail.extend({
  mdlCurrentMortgage: z.number().nullable(),
});
export type PortfolioPropertyDetailT = z.infer<typeof PortfolioPropertyDetail>;

export const ListingsPropertyDetail = BasePropertyDetail.extend({
  listingIrr: z.number(),
  listingCashDist: z.number(),

  keyDistances: z.string(),
  whyLove1: z.string(),
  whyLove2: z.string(),
  whyLove3: z.string(),

  hasInterest: z.boolean(),
  interestAmt: z.number().nullable(),
});
export type ListingsPropertyDetailT = z.infer<typeof ListingsPropertyDetail>;

export const ListingsMutateInterestRequestParams = z.object({
  propertyId: z.string().uuid(),
  hasInterest: z.boolean(),
  interestAmt: z.number().positive().nullable(),
});
export type ListingsMutateInterestRequestParamsT = z.infer<
  typeof ListingsMutateInterestRequestParams
>;

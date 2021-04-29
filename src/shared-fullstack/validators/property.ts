import { z } from 'zod';

import { Address } from './address';
import { Json } from './json';

// For method `portfolioDashboardPost` in
// `@app/server/controllers/portfolio.ts`
export const PortfolioDashboardProperty = z.object({
  propertyId: z.string(),
  legalEntityId: z.string(),

  propertyName: z.string(),
  legalEntityName: z.string(),

  address: Address,

  // TODO: process this on server
  monthlyDistribution: z.number().nullable(),
  cashflowSchedule: Json.nullable(),

  totalDistribution: z.number().nullable(),
  totalContribution: z.number().nullable(),
});

export type PortfolioDashboardPropertyT = z.infer<typeof PortfolioDashboardProperty>;

// TODO: define type
export const PortfolioPropertyDetail = z.object({
  id: z.string(),
  // legalEntityId: z.string(),

  name: z.string().nullable(),
  // legalEntityName: z.string().nullable(),

  address: Address,

  numUnits: z.number().nullable(),
  numBeds: z.number().nullable(),
  numBaths: z.number().nullable(),
  numStories: z.number().nullable(),

  areaUnits: z.string().nullable(),
  areaTotal: z.number().nullable(),
  areaLiving: z.number().nullable(),
  areaLotSize: z.number().nullable(),

  descriptionMarkdown: z.string().nullable(),
  occupancyStatus: z.string().nullable(),
  isUnderRenovation: z.boolean(),

  // TODO: not nullable (and in property.sql)
  ccyCode: z.string().max(3).nullable(),
  rentalIncomeMonthlyCurrent: z.number().nullable(),
  rentalIncomeMonthlyTarget: z.number().nullable(),

  // ownershipPct: z.number().nullable(),
  // initialEquity: z.number().nullable(),

  mdlPurchasePrice: z.number().nullable(),
  mdlClosingCost: z.number().nullable(),
  mdlOriginationFee: z.number().nullable(),
  mdlBrokerFee: z.number().nullable(),
  mdlRenovation: z.number().nullable(),
  mdlCapexReserve: z.number().nullable(),
  mdlMortgage: z.number().nullable(),
  mdlEquity: z.number().nullable(),
});

export type PortfolioPropertyDetailT = z.infer<typeof PortfolioPropertyDetail>;
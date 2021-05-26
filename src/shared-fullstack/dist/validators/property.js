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
    lastDistributionInitiatedAt: z.date().nullable(),
    months: z.number().nullable(),
});
// TODO: define type
export const PortfolioPropertyDetail = z.object({
    id: z.string(),
    // legalEntityId: z.string(),
    name: z.string().nullable(),
    imageUrls: z.array(z.string()),
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

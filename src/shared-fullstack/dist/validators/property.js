"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioPropertyDetail = exports.PortfolioDashboardProperty = void 0;
const zod_1 = require("zod");
const address_1 = require("./address");
const json_1 = require("./json");
// For method `portfolioDashboardPost` in
// `@app/server/controllers/portfolio.ts`
exports.PortfolioDashboardProperty = zod_1.z.object({
    propertyId: zod_1.z.string(),
    legalEntityId: zod_1.z.string(),
    propertyName: zod_1.z.string(),
    legalEntityName: zod_1.z.string(),
    iconUrl: zod_1.z.string().nullable(),
    address: address_1.Address,
    // TODO: process this on server
    monthlyDistribution: zod_1.z.number().nullable(),
    cashflowSchedule: json_1.Json.nullable(),
    currentEquity: zod_1.z.number().nullable(),
    // These default to 0 even if there's been no distribution
    sumDistributionTotal: zod_1.z.number(),
    sumDistributionRental: zod_1.z.number(),
    sumDistributionSpecial: zod_1.z.number(),
    lastDistributionTotal: zod_1.z.number(),
    lastDistributionInitiatedAt: zod_1.z.date().nullable(),
    months: zod_1.z.number().nullable(),
});
// TODO: define type
exports.PortfolioPropertyDetail = zod_1.z.object({
    id: zod_1.z.string(),
    // legalEntityId: z.string(),
    name: zod_1.z.string().nullable(),
    imageUrls: zod_1.z.array(zod_1.z.string()),
    // legalEntityName: z.string().nullable(),
    address: address_1.Address,
    numUnits: zod_1.z.number().nullable(),
    numBeds: zod_1.z.number().nullable(),
    numBaths: zod_1.z.number().nullable(),
    numStories: zod_1.z.number().nullable(),
    areaUnits: zod_1.z.string().nullable(),
    areaTotal: zod_1.z.number().nullable(),
    areaLiving: zod_1.z.number().nullable(),
    areaLotSize: zod_1.z.number().nullable(),
    descriptionMarkdown: zod_1.z.string().nullable(),
    occupancyStatus: zod_1.z.string().nullable(),
    isUnderRenovation: zod_1.z.boolean(),
    // TODO: not nullable (and in property.sql)
    ccyCode: zod_1.z.string().max(3).nullable(),
    rentalIncomeMonthlyCurrent: zod_1.z.number().nullable(),
    rentalIncomeMonthlyTarget: zod_1.z.number().nullable(),
    // ownershipPct: z.number().nullable(),
    // initialEquity: z.number().nullable(),
    mdlPurchasePrice: zod_1.z.number().nullable(),
    mdlClosingCost: zod_1.z.number().nullable(),
    mdlOriginationFee: zod_1.z.number().nullable(),
    mdlBrokerFee: zod_1.z.number().nullable(),
    mdlRenovation: zod_1.z.number().nullable(),
    mdlCapexReserve: zod_1.z.number().nullable(),
    mdlMortgage: zod_1.z.number().nullable(),
    mdlEquity: zod_1.z.number().nullable(),
});
//# sourceMappingURL=property.js.map
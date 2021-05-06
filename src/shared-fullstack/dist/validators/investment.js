"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioPropertyDetailInvestment = void 0;
const zod_1 = require("zod");
// Data is mostly from
//  /db/schema/legal_entity__property.sql
//  /db/schema/money_transfer.sql
exports.PortfolioPropertyDetailInvestment = zod_1.z.object({
    propertyId: zod_1.z.string(),
    legalEntityId: zod_1.z.string(),
    propertyName: zod_1.z.string(),
    legalEntityName: zod_1.z.string(),
    currentEquity: zod_1.z.number().nullable(),
    currentOwnershipPct: zod_1.z.number().nullable(),
    sumDistributionTotal: zod_1.z.number(),
    sumDistributionRental: zod_1.z.number(),
    sumDistributionSpecial: zod_1.z.number(),
    // These default to 0 even if there's no distribution
    lastDistributionTotal: zod_1.z.number(),
    lastDistributionRental: zod_1.z.number(),
    lastDistributionSpecial: zod_1.z.number(),
    // Will be null if there's no distribution yet
    lastDistributionInitiatedAt: zod_1.z.date().nullable(),
});
//# sourceMappingURL=investment.js.map
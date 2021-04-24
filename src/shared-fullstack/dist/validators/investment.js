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
});
//# sourceMappingURL=investment.js.map
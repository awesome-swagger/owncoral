import { z } from 'zod';
export declare const PortfolioPropertyDetailInvestment: z.ZodObject<{
    propertyId: z.ZodString;
    legalEntityId: z.ZodString;
    propertyName: z.ZodString;
    legalEntityName: z.ZodString;
    currentEquity: z.ZodNullable<z.ZodNumber>;
    currentOwnershipPct: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    propertyId: string;
    legalEntityId: string;
    propertyName: string;
    legalEntityName: string;
    currentEquity: number | null;
    currentOwnershipPct: number | null;
}, {
    propertyId: string;
    legalEntityId: string;
    propertyName: string;
    legalEntityName: string;
    currentEquity: number | null;
    currentOwnershipPct: number | null;
}>;
export declare type PortfolioPropertyDetailInvestmentT = z.infer<typeof PortfolioPropertyDetailInvestment>;
//# sourceMappingURL=investment.d.ts.map
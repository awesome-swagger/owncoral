import { z } from 'zod';
export declare const PortfolioPropertyDetailInvestment: z.ZodObject<{
    propertyId: z.ZodString;
    legalEntityId: z.ZodString;
    propertyName: z.ZodString;
    legalEntityName: z.ZodString;
    currentEquity: z.ZodNullable<z.ZodNumber>;
    currentOwnershipPct: z.ZodNullable<z.ZodNumber>;
    sumDistributionTotal: z.ZodNumber;
    sumDistributionRental: z.ZodNumber;
    sumDistributionSpecial: z.ZodNumber;
    lastDistributionTotal: z.ZodNumber;
    lastDistributionRental: z.ZodNumber;
    lastDistributionSpecial: z.ZodNumber;
    lastDistributionInitiatedAt: z.ZodNullable<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    propertyId: string;
    legalEntityId: string;
    propertyName: string;
    legalEntityName: string;
    currentEquity: number | null;
    currentOwnershipPct: number | null;
    sumDistributionTotal: number;
    sumDistributionRental: number;
    sumDistributionSpecial: number;
    lastDistributionTotal: number;
    lastDistributionRental: number;
    lastDistributionSpecial: number;
    lastDistributionInitiatedAt: Date | null;
}, {
    propertyId: string;
    legalEntityId: string;
    propertyName: string;
    legalEntityName: string;
    currentEquity: number | null;
    currentOwnershipPct: number | null;
    sumDistributionTotal: number;
    sumDistributionRental: number;
    sumDistributionSpecial: number;
    lastDistributionTotal: number;
    lastDistributionRental: number;
    lastDistributionSpecial: number;
    lastDistributionInitiatedAt: Date | null;
}>;
export declare type PortfolioPropertyDetailInvestmentT = z.infer<typeof PortfolioPropertyDetailInvestment>;
//# sourceMappingURL=investment.d.ts.map
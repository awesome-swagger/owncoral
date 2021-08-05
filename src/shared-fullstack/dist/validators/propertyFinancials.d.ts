import { z } from 'zod';
export declare const SourcesUses: z.ZodObject<{
    mdlPurchasePrice: z.ZodNullable<z.ZodNumber>;
    mdlClosingCost: z.ZodNullable<z.ZodNumber>;
    mdlOriginationFee: z.ZodNullable<z.ZodNumber>;
    mdlBrokerFee: z.ZodNullable<z.ZodNumber>;
    mdlRenovation: z.ZodNullable<z.ZodNumber>;
    mdlCapexReserve: z.ZodNullable<z.ZodNumber>;
    mdlPrincipalReserve: z.ZodNullable<z.ZodNumber>;
    mdlMortgage: z.ZodNullable<z.ZodNumber>;
    mdlEquity: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    mdlPurchasePrice: number | null;
    mdlClosingCost: number | null;
    mdlOriginationFee: number | null;
    mdlBrokerFee: number | null;
    mdlRenovation: number | null;
    mdlCapexReserve: number | null;
    mdlPrincipalReserve: number | null;
    mdlMortgage: number | null;
    mdlEquity: number | null;
}, {
    mdlPurchasePrice: number | null;
    mdlClosingCost: number | null;
    mdlOriginationFee: number | null;
    mdlBrokerFee: number | null;
    mdlRenovation: number | null;
    mdlCapexReserve: number | null;
    mdlPrincipalReserve: number | null;
    mdlMortgage: number | null;
    mdlEquity: number | null;
}>;
export declare type SourcesUsesT = z.infer<typeof SourcesUses>;

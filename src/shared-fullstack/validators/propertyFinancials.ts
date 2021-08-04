import { z } from 'zod';

export const SourcesUses = z.object({
  mdlPurchasePrice: z.number().nullable(),
  mdlClosingCost: z.number().nullable(),
  mdlOriginationFee: z.number().nullable(),
  mdlBrokerFee: z.number().nullable(),
  mdlRenovation: z.number().nullable(),
  mdlCapexReserve: z.number().nullable(),
  mdlPrincipalReserve: z.number().nullable(),
  mdlMortgage: z.number().nullable(),
  mdlEquity: z.number().nullable(),
});

export type SourcesUsesT = z.infer<typeof SourcesUses>;

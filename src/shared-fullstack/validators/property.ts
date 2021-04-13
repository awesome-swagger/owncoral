import { z } from 'zod';

import { Address } from './address';
import { Json } from './json';

// For method `portfolioDashboardPost` in
// `@app/server/controllers/portfolio.ts`
export const PortfolioDashboardProperty = z.object({
  propertyName: z.string(),

  address: Address,

  // TODO: process this on server
  monthlyDistribution: z.number().nullable(),
  cashflowSchedule: Json.nullable(),

  totalDistribution: z.number().nullable(),
  totalContribution: z.number().nullable(),
});

export type PortfolioDashboardPropertyT = z.infer<typeof PortfolioDashboardProperty>;

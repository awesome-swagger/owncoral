import { z } from 'zod';

type Literal = boolean | null | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export const Property = z.object({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  accounting_id: z.string().optional(),
  status: z.enum(["LISTING", "CLOSED", "INACTIVE"]).optional(),
  is_listing_visible: z.boolean().optional(),
  close_date: z.string().nullable().optional(),
  buildium_id: z.number().int().nullable().optional(),
  name: z.string(),
  description: z.string().nullable().optional(),
  address_id: z.string().uuid().nullable().optional(),
  num_units: z.number().nullable().optional(),
  num_units_retail: z.number().nullable().optional(),
  num_beds: z.number().nullable().optional(),
  num_beds_retail: z.number().nullable().optional(),
  num_baths: z.number().nullable().optional(),
  num_stories: z.number().nullable().optional(),
  area_units: z.string().nullable().optional(),
  area_living: z.number().nullable().optional(),
  area_lot_size: z.number().nullable().optional(),
  description_markdown: z.string().nullable().optional(),
  is_under_renovation: z.boolean().optional(),
  renovations_overview: z.string().nullable().optional(),
  renovations_jsonb: jsonSchema.nullable().optional(),
  occupancy_status: z.string().nullable().optional(),
  ccy_code: z.string().nullable().optional(),
  rental_income_monthly_current: z.number().nullable().optional(),
  rental_income_monthly_target: z.number().nullable().optional(),
  mdl_purchase_price: z.number().nullable().optional(),
  mdl_closing_cost: z.number().nullable().optional(),
  mdl_origination_fee: z.number().nullable().optional(),
  mdl_broker_fee: z.number().nullable().optional(),
  mdl_renovation: z.number().nullable().optional(),
  mdl_capex_reserve: z.number().nullable().optional(),
  mdl_principal_reserve: z.number().nullable().optional(),
  mdl_mortgage: z.number().nullable().optional(),
  mdl_equity: z.number().nullable().optional(),
  mdl_current_mortgage: z.number().nullable().optional(),
  mdl_distribution_fixed_rate_annual: z.number().nullable().optional(),
  mdl_distribution_description: z.string().nullable().optional(),
  mdl_distribution_var_schedule: jsonSchema.nullable().optional(),
  listing_irr: z.number().nullable().optional(),
  listing_cash_dist: z.number().nullable().optional(),
  why_love_1: z.string().nullable().optional(),
  why_love_2: z.string().nullable().optional(),
  why_love_3: z.string().nullable().optional(),
  key_distances: z.string().nullable().optional(),
});

export type PropertyT = z.infer<typeof Property>;

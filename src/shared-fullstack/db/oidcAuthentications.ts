import { z } from 'zod';

type Literal = boolean | null | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export const OidcAuthentications = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid(),
  service: z.string(),
  identifier: z.string(),
  details: jsonSchema.optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export type OidcAuthenticationsT = z.infer<typeof OidcAuthentications>;

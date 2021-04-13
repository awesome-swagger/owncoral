import { z } from 'zod';

/**
 * Represents any JSON object.
 */

type LiteralT = boolean | null | number | string;
export type JsonT = LiteralT | { [key: string]: JsonT } | JsonT[];

const Literal = z.union([z.string(), z.number(), z.boolean(), z.null()]);
export const Json: z.ZodSchema<JsonT> = z.lazy(() =>
  z.union([Literal, z.array(Json), z.record(Json)]),
);

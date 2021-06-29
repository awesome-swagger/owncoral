import { z } from 'zod';
const Literal = z.union([z.string(), z.number(), z.boolean(), z.null()]);
export const Json = z.lazy(() => z.union([Literal, z.array(Json), z.record(Json)]));

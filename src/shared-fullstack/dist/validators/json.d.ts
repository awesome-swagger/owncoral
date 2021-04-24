import { z } from 'zod';
/**
 * Represents any JSON object.
 */
declare type LiteralT = boolean | null | number | string;
export declare type JsonT = LiteralT | {
    [key: string]: JsonT;
} | JsonT[];
export declare const Json: z.ZodSchema<JsonT>;
export {};
//# sourceMappingURL=json.d.ts.map
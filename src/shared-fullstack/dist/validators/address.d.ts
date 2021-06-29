import { z } from 'zod';
export declare const Address: z.ZodObject<{
    line1: z.ZodString;
    line2: z.ZodNullable<z.ZodString>;
    line3: z.ZodNullable<z.ZodString>;
    cityLocality: z.ZodString;
    stateRegion: z.ZodString;
    postalCode: z.ZodString;
    country: z.ZodString;
}, "strip", z.ZodTypeAny, {
    line1: string;
    line2: string | null;
    line3: string | null;
    cityLocality: string;
    stateRegion: string;
    postalCode: string;
    country: string;
}, {
    line1: string;
    line2: string | null;
    line3: string | null;
    cityLocality: string;
    stateRegion: string;
    postalCode: string;
    country: string;
}>;
export declare type AddressT = z.infer<typeof Address>;

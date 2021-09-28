import { z } from 'zod';
export declare const UserProfile: z.ZodObject<{
    id: z.ZodString;
    isAdmin: z.ZodBoolean;
    email: z.ZodString;
    emailAlt: z.ZodString;
    isVerifiedPrimary: z.ZodBoolean;
    isVerifiedAlt: z.ZodBoolean;
    legalFirst: z.ZodString;
    legalLast: z.ZodString;
    phone: z.ZodString;
    phoneAlt: z.ZodString;
    addressMailing: z.ZodObject<{
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
    addressResidency: z.ZodObject<{
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
    taxPayerId: z.ZodString;
    is1099Eligible: z.ZodBoolean;
    completedAccreditation: z.ZodBoolean;
    birthDate: z.ZodString;
    numInvestments: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    email: string;
    id: string;
    isAdmin: boolean;
    emailAlt: string;
    isVerifiedPrimary: boolean;
    isVerifiedAlt: boolean;
    legalFirst: string;
    legalLast: string;
    phone: string;
    phoneAlt: string;
    addressMailing: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    addressResidency: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    taxPayerId: string;
    is1099Eligible: boolean;
    completedAccreditation: boolean;
    birthDate: string;
    numInvestments: number | null;
}, {
    email: string;
    id: string;
    isAdmin: boolean;
    emailAlt: string;
    isVerifiedPrimary: boolean;
    isVerifiedAlt: boolean;
    legalFirst: string;
    legalLast: string;
    phone: string;
    phoneAlt: string;
    addressMailing: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    addressResidency: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    taxPayerId: string;
    is1099Eligible: boolean;
    completedAccreditation: boolean;
    birthDate: string;
    numInvestments: number | null;
}>;
export declare type UserProfileT = z.infer<typeof UserProfile>;
export declare const AdminPanelUserInfo: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    displayName: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string | null;
    id: string;
    displayName: string | null;
}, {
    email: string | null;
    id: string;
    displayName: string | null;
}>;
export declare type AdminPanelUserInfoT = z.infer<typeof AdminPanelUserInfo>;

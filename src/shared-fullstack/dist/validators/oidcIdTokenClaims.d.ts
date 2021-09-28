import { z } from 'zod';
/**
 * OIDC Identity Token Claims
 */
export declare const OIDCIdTokenClaims: z.ZodObject<{
    /**
     * Issuer. Who created and signed this token.
     */
    iss: z.ZodString;
    /**
     * Authorized party. The party to which this token was issued.
     */
    azp: z.ZodString;
    /**
     * Audience. Who or what the token is intended for.
     */
    aud: z.ZodString;
    /**
     * Subject. Whom the token refers to.
     */
    sub: z.ZodString;
    /**
     * Issued at measuered in seconds since Unix epoch.
     */
    iat: z.ZodNumber;
    /**
     * Expiration time measured in seconds since Unix epoch.
     */
    exp: z.ZodNumber;
    /**
     * Email related to the subject.
     */
    email: z.ZodString;
    /**
     * Access token hash value.
     */
    at_hash: z.ZodOptional<z.ZodString>;
    /**
     * Unique value associating a request to the token.
     */
    nonce: z.ZodOptional<z.ZodString>;
    /**
     * Name of the subject.
     */
    name: z.ZodOptional<z.ZodString>;
    /**
     * Picture used fot the subject.
     */
    picture: z.ZodOptional<z.ZodString>;
    /**
     * Subject's given name.
     */
    given_name: z.ZodOptional<z.ZodString>;
    /**
     * Subject's family name.
     */
    family_name: z.ZodOptional<z.ZodString>;
    /**
     * Subject's locale.
     */
    locale: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    at_hash?: string | undefined;
    nonce?: string | undefined;
    name?: string | undefined;
    picture?: string | undefined;
    given_name?: string | undefined;
    family_name?: string | undefined;
    locale?: string | undefined;
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    iat: number;
    exp: number;
    email: string;
}, {
    at_hash?: string | undefined;
    nonce?: string | undefined;
    name?: string | undefined;
    picture?: string | undefined;
    given_name?: string | undefined;
    family_name?: string | undefined;
    locale?: string | undefined;
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    iat: number;
    exp: number;
    email: string;
}>;
export declare type OIDCIdTokenClaimsT = z.infer<typeof OIDCIdTokenClaims>;

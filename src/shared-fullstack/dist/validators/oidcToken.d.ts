import { z } from 'zod';
/**
 * OIDC tokens exchanged with the service provider.
 */
export declare const OIDCToken: z.ZodObject<{
    /**
     * OIDC access tokens
     */
    access_token: z.ZodString;
    /**
     * OIDC expiration time in seconds.
     */
    expires_in: z.ZodNumber;
    /**
     * OIDC token type.
     */
    token_type: z.ZodString;
    /**
     * OIDC identity token.
     */
    id_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    access_token: string;
    expires_in: number;
    token_type: string;
    id_token: string;
}, {
    access_token: string;
    expires_in: number;
    token_type: string;
    id_token: string;
}>;
export declare type OIDCTokenT = z.infer<typeof OIDCToken>;

import { z } from 'zod';
/**
 * OIDC provider configuration.
 */
export declare const OIDCConfig: z.ZodObject<{
    /**
     * App client id.
     */
    client_id: z.ZodString;
    /**
     * App client secret.
     */
    client_secret: z.ZodString;
    /**
     * Authorization URI to redirect the user.
     */
    auth_uri: z.ZodString;
    /**
     * Token URI from which we can exchange a token for the user credentials.
     */
    token_uri: z.ZodString;
    /**
     * List of scopes to be requested from the provider. It should be delimited
     * according to the provider's documentation. For example, Google requires
     * the scopes to be space-delimited.
     */
    scope: z.ZodString;
}, "strip", z.ZodTypeAny, {
    client_id: string;
    client_secret: string;
    auth_uri: string;
    token_uri: string;
    scope: string;
}, {
    client_id: string;
    client_secret: string;
    auth_uri: string;
    token_uri: string;
    scope: string;
}>;
export declare type OIDCConfigT = z.infer<typeof OIDCConfig>;

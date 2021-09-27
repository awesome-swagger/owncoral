import { z } from 'zod';
/**
 * OIDC provider configuration.
 */
export const OIDCConfig = z.object({
    /**
     * App client id.
     */
    client_id: z.string().nonempty(),
    /**
     * App client secret.
     */
    client_secret: z.string().nonempty(),
    /**
     * Authorization URI to redirect the user.
     */
    auth_uri: z.string().nonempty(),
    /**
     * Token URI from which we can exchange a token for the user credentials.
     */
    token_uri: z.string().nonempty(),
    /**
     * List of scopes to be requested from the provider. It should be delimited
     * according to the provider's documentation. For example, Google requires
     * the scopes to be space-delimited.
     */
    scope: z.string().nonempty(),
});

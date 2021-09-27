import { z } from 'zod';
/**
 * OIDC tokens exchanged with the service provider.
 */
export const OIDCToken = z.object({
    /**
     * OIDC access tokens
     */
    access_token: z.string().nonempty(),
    /**
     * OIDC expiration time in seconds.
     */
    expires_in: z.number(),
    /**
     * OIDC token type.
     */
    token_type: z.string().nonempty(),
    /**
     * OIDC identity token.
     */
    id_token: z.string().nonempty(),
});

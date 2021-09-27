import { z } from 'zod';
/**
 * OIDC Identity Token Claims
 */
export const OIDCIdTokenClaims = z.object({
    /**
     * Issuer. Who created and signed this token.
     */
    iss: z.string().nonempty(),
    /**
     * Authorized party. The party to which this token was issued.
     */
    azp: z.string().nonempty(),
    /**
     * Audience. Who or what the token is intended for.
     */
    aud: z.string().nonempty(),
    /**
     * Subject. Whom the token refers to.
     */
    sub: z.string().nonempty(),
    /**
     * Issued at measuered in seconds since Unix epoch.
     */
    iat: z.number(),
    /**
     * Expiration time measured in seconds since Unix epoch.
     */
    exp: z.number(),
    /**
     * Email related to the subject.
     */
    email: z.string(),
    /**
     * Access token hash value.
     */
    at_hash: z.string().optional(),
    /**
     * Unique value associating a request to the token.
     */
    nonce: z.string().optional(),
    /**
     * Name of the subject.
     */
    name: z.string().optional(),
    /**
     * Picture used fot the subject.
     */
    picture: z.string().optional(),
    /**
     * Subject's given name.
     */
    given_name: z.string().optional(),
    /**
     * Subject's family name.
     */
    family_name: z.string().optional(),
    /**
     * Subject's locale.
     */
    locale: z.string().optional(),
});

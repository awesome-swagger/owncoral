import { z } from 'zod';

export const OidcAuthenticationsFlows = z.object({
  id: z.string().uuid().optional(),
  nonce: z.string(),
  service: z.string(),
  redirect_uri: z.string(),
  done: z.boolean().optional(),
  created_at: z.string().optional(),
});

export type OidcAuthenticationsFlowsT = z.infer<typeof OidcAuthenticationsFlows>;

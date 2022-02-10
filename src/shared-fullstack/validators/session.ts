import { z } from 'zod';

import { SessionPrivate } from '../db/sessionPrivate';

// Extend the SessionPrivate type to enforce the existance of the `id`.
export const SessionPrivateStrict = SessionPrivate.extend({
  id: z.string().uuid(),
});
export type SessionPrivateStrictT = z.infer<typeof SessionPrivateStrict>;

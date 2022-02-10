import type { z } from 'zod';

import { Waitlist } from '../db/waitlist';

export const WaitlistRequest = Waitlist.required().pick({ email: true });
export type WaitlistRequestT = z.infer<typeof WaitlistRequest>;

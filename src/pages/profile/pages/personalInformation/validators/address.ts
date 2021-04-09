import { z } from 'zod';

// Mostly matches /db/schema/address.sql
export const Address = z.object({
  line1: z.string().nonempty(),
  line2: z.string(),
  line3: z.string(),

  cityLocality: z.string(),
  stateRegion: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

type AddressT = z.infer<typeof Address>;
export type { AddressT };

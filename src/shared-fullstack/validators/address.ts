import { z } from 'zod';

// Mostly matches /db/schema/address.sql
export const Address = z.object({
  line1: z.string().nonempty(),
  line2: z.string().nullable(),
  line3: z.string().nullable(),

  cityLocality: z.string(),
  stateRegion: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

export type AddressT = z.infer<typeof Address>;

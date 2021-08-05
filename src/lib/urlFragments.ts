import type { AddressT } from '../shared-fullstack/types';

/**
 * Create URL fragment for routing property details, kind of like Zillow.
 *
 * This function is not intended to be invertible.
 */
export const addressToUrlFragment = (address: AddressT): string => {
  // Join all the address parts
  const addressUriRaw = [
    address.line1,
    address.line2,
    address.line3,
    address.cityLocality,
    address.stateRegion,
    address.postalCode,
    address.country,
  ]
    .filter((part) => part !== null && part !== '')
    .join(' ')
    .replaceAll(/\s+/g, '-');

  return encodeURIComponent(addressUriRaw);
};

const fbqLoaded = typeof fbq !== 'undefined';

/**
 * Wraps Facebook Pixel tracker in case it's not loaded.
 *
 * @param args
 */
export const fbqWrap: typeof fbq = (...args: any[]) => {
  // @ts-ignore
  if (fbqLoaded) fbq(...args);
};

export {}; // for TS isolatedModules compat

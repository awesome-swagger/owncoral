const FINANCIAL_UNIT_SUFFIX = ['', 'K', 'M', 'B', 'T'];

const round2 = (n: number): number => Math.round(n * 100) / 100;

/**
 * Formats a monetary amount by rounding to the nearest
 * power-of-three suffix (e.g. K, MM).
 *
 * Ensures at least 2 significant figures.
 *
 * Returns exact number for amounts less than $10k.
 *
 * @param n
 */
export const formatFinancialSI = (n: number): string => {
  const nDigits = Math.floor(Math.log10(Math.abs(n))) + 1;
  if (nDigits <= 4) {
    return Math.round(n).toLocaleString('en');
  }

  const unitIdx = Math.floor((nDigits - 1) / 3);
  // If we just crossed a unit threshold (e.g. $2100 = $2K),
  // add one more digit to display (e.g. $2.1K).
  const nExtra = nDigits % 3 === 1 ? 1 : 0;
  return (n / Math.pow(10, unitIdx * 3)).toFixed(nExtra) + FINANCIAL_UNIT_SUFFIX[unitIdx];
};

/** Rounds off cents, formats according to locale */
export const formatFinancial = (n: number): string => Math.round(n).toLocaleString();

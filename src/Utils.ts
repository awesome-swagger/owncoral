import 'whatwg-fetch'; // Polyfill

export const fetchWrap = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, {
    ...{
      // Fetch doesn't send cookies (in newer browser), but we rely on them
      // for session authentication
      credentials: 'same-origin',
    },
    // If we had set a body, then sent JSON Content-Type
    ...((init || {}).body != null
      ? {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      : {}),
    // Override defaults above
    ...init,
  });


const FINANCIAL_UNIT_SUFFIX = ["", "K", "MM", "B", "T"];

export const roundFinancial = (n: number) => {
  const nDigits = Math.floor(Math.log10(Math.abs(n)));
  if (nDigits >= 0) {
    const unitIdx = Math.floor(nDigits / 3);
    const nExtra = nDigits % 3 === 0 ? 1 : 0;
    return (
      (n / Math.pow(10, unitIdx * 3)).toFixed(nExtra) +
      FINANCIAL_UNIT_SUFFIX[unitIdx]
    );
  } else {
    return n;
  }
};

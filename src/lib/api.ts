import 'whatwg-fetch'; // Polyfill

// ESLint + Typescript can't find this for some reason?
// eslint-disable-next-line no-undef
export const fetchWrap = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, {
    ...{
      // Fetch doesn't send cookies (in newer browser), but we rely on them
      // for session authentication
      credentials: 'same-origin',
    },
    // If we had set a body, then sent JSON Content-Type
    ...(init?.body && {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    // Override defaults above
    ...init,
  });

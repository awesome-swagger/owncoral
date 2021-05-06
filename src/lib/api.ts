import 'whatwg-fetch'; // Polyfill
import { GlobalLogoutTimeout } from './GlobalLogoutTimeout';
import { SESSION_TIMEOUT } from '../shared-fullstack/constants';

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
  }).then((res) => {
    // clear and reset the timer if we already have, because the session
    // will be refreshed on each successful request
    if (GlobalLogoutTimeout.timer !== null) {
      clearTimeout(GlobalLogoutTimeout.timer);
    }

    const url = typeof input === 'string' ? input : input.url;
    if (url === '/logout' || url.startsWith('/logout?')) {
      return res;
    }

    GlobalLogoutTimeout.timer = setTimeout(GlobalLogoutTimeout.callback, SESSION_TIMEOUT);
    return res;
  });

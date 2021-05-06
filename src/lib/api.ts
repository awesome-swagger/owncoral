import { SESSION_TIMEOUT_MS } from '../shared-fullstack/constants';

import 'whatwg-fetch'; // Polyfill

import { GlobalLogoutTimeout } from './GlobalLogoutTimeout';

export const fetchWrap = (
  input: RequestInfo, // eslint-disable-line no-undef
  init?: RequestInit, // eslint-disable-line no-undef
  ignoreCookieExpiry = false,
): Promise<Response> | null => {
  if (
    !ignoreCookieExpiry &&
    GlobalLogoutTimeout.timerExpiry !== null &&
    Date.now() > GlobalLogoutTimeout.timerExpiry.getTime()
  ) {
    // Cookie has expired, don't run API requests
    return null;
  }

  return fetch(input, {
    // Fetch doesn't send cookies (in newer browser), but we rely on them
    // for session authentication
    credentials: 'same-origin',
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
      GlobalLogoutTimeout.timerExpiry = null;
    }

    const url = typeof input === 'string' ? input : input.url;
    if (url === '/logout' || url.startsWith('/logout?')) {
      return res;
    }

    GlobalLogoutTimeout.timer = setTimeout(GlobalLogoutTimeout.callback, SESSION_TIMEOUT_MS);
    GlobalLogoutTimeout.timerExpiry = new Date(Date.now() + SESSION_TIMEOUT_MS);

    return res;
  });
};

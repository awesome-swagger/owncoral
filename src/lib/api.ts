import { AiOutlineConsoleSql } from 'react-icons/ai';
import 'whatwg-fetch'; // Polyfill
import { GlobalLogoutTimeout } from './GlobalLogoutTimeout';

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
    // clear and reset the timer if we already have, because the session will
    // be refreshed on eash successful request
    if (GlobalLogoutTimeout.timer !== null) {
      clearTimeout(GlobalLogoutTimeout.timer);
    }

    if (typeof input === 'string' && input.indexOf('logout') > -1) {
      return res;
    }

    GlobalLogoutTimeout.timer = setTimeout(GlobalLogoutTimeout.callback, 2000);
    return res;
  });

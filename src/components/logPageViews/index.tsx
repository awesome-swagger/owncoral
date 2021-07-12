/**
 * Logs page view events for analytics.
 *
 * Reference:
 *   https://reactrouter.com/web/api/Hooks/uselocation
 *
 *   FYI, this is an HOC and not a hook, because we want to use it globally, but it
 *   useLocation only works underneath a router, so we can't simply
 *   call the hook directly from App.tsx.
 */
import type React from 'react';
import { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let HAS_CHECKED_INIT = false;

let GA_MEASUREMENT_ID: string | null = null;

switch (import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV) {
  case 'production':
    GA_MEASUREMENT_ID = 'G-F02XBW0HR3';
    break;
  case 'staging':
    GA_MEASUREMENT_ID = 'G-71V1JT8G2B';
    break;
  case 'development':
    console.info('Skipping Google Analytics logging');
    break;
  default:
    console.warn('Unexpected environment: ' + import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV);
}

export const LogPageViews: React.FC = ({ children }) => {
  const gtagDefined = typeof gtag !== 'undefined';
  if (!HAS_CHECKED_INIT && (!gtagDefined || !gtag)) {
    console.warn('Warning [LogPageViews]: gtag.js was not loaded');
  }
  HAS_CHECKED_INIT = true;

  const location = useLocation();
  useEffect(() => {
    if (!gtagDefined || !gtag || !GA_MEASUREMENT_ID) return;

    gtag('config', GA_MEASUREMENT_ID, { page_path: location.pathname + location.search });

    // Note that gtagDefined isn't properly reactive. This is OK though:
    // gtag is only defined once in `initAnalytics.ts`, before this component
  }, [gtagDefined, location]);

  // Casting because of https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
  return children as ReactElement;
};

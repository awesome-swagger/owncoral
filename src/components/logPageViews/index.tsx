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

export const LogPageViews: React.FC = ({ children }) => {
  const gtagDefined = typeof gtag !== 'undefined';
  if (!HAS_CHECKED_INIT && (!gtagDefined || !gtag)) {
    console.warn('Warning [LogPageViews]: gtag.js was not loaded');
  }
  HAS_CHECKED_INIT = true;

  const location = useLocation();
  useEffect(() => {
    if (!gtagDefined || !gtag) return;

    gtag('event', 'pageview', {
      page_path: location.pathname + location.search,
    });
    // Note that gtagDefined isn't properly reactive. This is OK though:
    // gtag is only defined once in `initAnalytics.ts`, before this component
  }, [gtagDefined, location]);

  // Casting because of https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
  return children as ReactElement;
};

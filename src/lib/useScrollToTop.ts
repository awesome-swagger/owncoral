import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// From https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
// except as a hook
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

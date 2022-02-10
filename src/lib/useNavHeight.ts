import { useContext } from 'react';
import { Capacitor } from '@capacitor/core';
import { useMediaQuery } from '@chakra-ui/react';
import { UserContext } from '../userContext';

// Extra room on mobile footers to accommodate Mobile Safari's black bottom selector line
// In Capacitor, we use env(safe-area-inset-bottom) instead
const MOBILE_FOOTER_EXTRA_HEIGHT = 4;

export const useNavHeight = () => {
  const [user] = useContext(UserContext);
  const [isTouch] = useMediaQuery('(pointer: coarse)');
  const extraHeight =
    Capacitor.getPlatform() !== 'web'
      ? 'env(safe-area-inset-bottom)'
      : isTouch
        ? `${MOBILE_FOOTER_EXTRA_HEIGHT / 4}rem`
        : '0px';

  // TODO:
  //   make headerHeight consistently include env(safe-area-inset-top), like
  //   footer-height does
  return {
    headerHeight: `${13 / 4}rem`,
    // if user has been logged in, nav will be hide
    footerHeight: user ? `calc(${13 / 4}rem + ${extraHeight})` : extraHeight,
    extraHeight,
  };
};

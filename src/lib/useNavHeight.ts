import { useMediaQuery } from '@chakra-ui/react';

const MOBILE_FOOTER_EXTRA_HEIGHT = 3;

export const useNavHeight = () => {
  const [isTouch] = useMediaQuery('(pointer: coarse)');
  const extraHeightRem = isTouch ? MOBILE_FOOTER_EXTRA_HEIGHT / 4 : 0;

  return {
    headerHeight: `${13 / 4}rem`,
    footerHeight: `${13 / 4 + extraHeightRem}rem`,
    extraHeight: `${extraHeightRem}rem`,
  };
};

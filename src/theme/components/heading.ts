import { mode } from '@chakra-ui/theme-tools';

import { h1, LargeTitle, Title1, Title2, Title3,XLargeTitle } from '../textStyles';

const baseStyle = {
  // Set weight for individual styles
  fontWeight: 'unset',
};

const sizes = {
  '2xl': h1,
  xl: XLargeTitle,
  lg: LargeTitle,
  md: Title1,
  sm: Title2,
  xs: Title3,
};
const defaultProps = {
  size: 'md',
  as: 'h4',
};

type Dict = Record<string, any>;

const variants = {
  colored: (props: Dict) => {
    const defaultColorScheme = mode('primary', 'secondary')(props);
    const colorScheme =
      (props.colorScheme || 'auto') === 'auto' ? defaultColorScheme : props.colorScheme;

    return {
      color: mode(`${colorScheme}.800`, `${colorScheme}.100`)(props),
    };
  },
};

export const Heading = {
  baseStyle,
  sizes,
  defaultProps,
  variants,
};

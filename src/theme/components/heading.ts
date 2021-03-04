import { mode } from '@chakra-ui/theme-tools';

import { h1, h2, h3, h4, h5, h6 } from '../textStyles';

const baseStyle = {
  // Set weight for individual styles
  fontWeight: 'unset',
};

const sizes = {
  '2xl': h1,
  xl: h2,
  lg: h3,
  md: h4,
  sm: h5,
  xs: h6,
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

import { mode } from '@chakra-ui/theme-tools';

import { Headline, LargeTitle, Title1, Title2, XLargeTitle, XXLargeTitle } from '../textStyles';

const baseStyle = {
  // Set weight for individual styles
  fontWeight: 'unset',
};

const sizes = {
  '2xl': XXLargeTitle,
  xl: XLargeTitle,
  lg: LargeTitle,
  md: Title1,
  sm: Title2,
  xs: Headline,
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
      color: mode(`${colorScheme}.700`, `${colorScheme}.300`)(props),
    };
  },
};

export const Heading = {
  baseStyle,
  sizes,
  defaultProps,
  variants,
};

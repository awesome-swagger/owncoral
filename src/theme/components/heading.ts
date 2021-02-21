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
};

export const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};

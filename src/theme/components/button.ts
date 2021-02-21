import { button } from '../textStyles';

export const Button = {
  baseStyle: {
    // Rounded buttons
    borderRadius: 'full',
    // Use MUI button typography
    ...button,
  },
  sizes: {
    xl: {
      minW: 16,
      fontSize: 'lg',
      px: 8,
      py: 4,
    },
  },

  defaultProps: {
    colorScheme: 'primary',
  },
};

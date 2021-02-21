import { theme as baseTheme } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';
import * as R from 'remeda';

import { button } from '../textStyles';

type Dict = Record<string, any>;

/*
  Provide a default color scheme to every variant based on the current
  color mode.

  We're doing this instead of overriding bgColor and color directly because
  the variants pick out nice shades.

  We're not doing this in defaultProps, because it can't take props (color mode).

  The alternative is to pass colorMode using the colorMode hook in every
  component, which is too much boilerplate
 */
const variants = R.mapValues(
  baseTheme.components.Button.variants,
  (baseVariant) => (props: Dict) => {
    const defaultColorScheme = mode('primary', 'secondary')(props);
    const colorScheme =
      (props.colorScheme || 'auto') === 'auto' ? defaultColorScheme : props.colorScheme;

    return typeof baseVariant === 'function' ? baseVariant({ ...props, colorScheme }) : baseVariant;
  },
);

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
  variants,

  defaultProps: {
    // Kind of a hack, we pass 'auto' to get defaults in the variants
    colorScheme: 'auto',
  },
};

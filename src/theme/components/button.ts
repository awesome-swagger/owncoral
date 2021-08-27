import { theme as baseTheme } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';
import * as R from 'remeda';

import { Button as ButtonStyle } from '../textStyles';

type Dict = Record<string, any>;

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
    hoverBg: 'yellow.500',
    activeBg: 'yellow.600',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
    hoverBg: 'cyan.500',
    activeBg: 'cyan.600',
  },
};

const baseVariants = {
  ...baseTheme.components.Button.variants,
  // Copied from base theme and modified to have lighter grays in dark mode
  solid: (props: Dict) => {
    const { colorScheme: c } = props;

    if (c === 'gray') {
      const bg = mode(`gray.800`, `whiteAlpha.800`)(props);
      const fg = mode(`white`, `gray.900`)(props);

      return {
        bg,
        color: fg,
        _hover: {
          bg: mode(`gray.600`, `whiteAlpha.700`)(props),
          _disabled: {
            bg,
          },
        },
        _active: { bg: mode(`gray.500`, `whiteAlpha.800`)(props) },
      };
    }
    if (c === 'white') {
      const bg = mode(`white`, `whiteAlpha.600`)(props);
      const fg = mode('black', `gray.900`)(props);

      return {
        bg,
        color: fg,
        boxShadow: 'xs',
        _hover: {
          bg: mode(`gray.300`, `whiteAlpha.700`)(props),
          _disabled: {
            bg,
          },
        },
        _active: { bg: mode(`gray.400`, `whiteAlpha.800`)(props) },
      };
    }

    const { bg = `${c}.500`, color = 'white', hoverBg = `${c}.600`, activeBg = `${c}.700` } =
      accessibleColorMap[c] || {};

    const background = mode(bg, `${c}.200`)(props);

    return {
      bg: background,
      color: mode(color, `gray.800`)(props),
      _hover: {
        bg: mode(hoverBg, `${c}.300`)(props),
        _disabled: {
          bg: background,
        },
      },
      _active: { bg: mode(activeBg, `${c}.400`)(props) },
    };
  },
};

/*
    Provide a default color scheme to every variant based on the current
    color mode.

    We're doing this instead of overriding bgColor and color directly because
    the variants pick out nice shades.

    We're not doing this in defaultProps, because it can't take props (color mode).

    The alternative is to pass colorMode using the colorMode hook in every
    component, which is too much boilerplate
    */
const variants = R.mapValues(baseVariants, (baseVariant) => (props: Dict) => {
  const defaultColorScheme = mode('gray', 'secondary')(props);
  const colorScheme =
    (props.colorScheme || 'auto') === 'auto' ? defaultColorScheme : props.colorScheme;

  return typeof baseVariant === 'function' ? baseVariant({ ...props, colorScheme }) : baseVariant;
});

export const Button = {
  baseStyle: {
    // Rounded buttons
    borderRadius: '2xl',
    // Button typography
    ...ButtonStyle,
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
    colorScheme: 'auto',
  },
};

import { useColorModeValue } from '@chakra-ui/react';

export const layerStyles = {
  noSelect: {
    '@media (pointer: coarse)': {
      userSelect: 'none',
    },
  },

  // We're using CSS classnames for dark mode instead of props, because it's not available here.
  // Discussion: https://github.com/chakra-ui/chakra-ui/issues/2231#issuecomment-771531813
  selectionBox: {
    bg: 'gray.100',
    color: 'black',
    _hover: { bg: 'primary.100' },
    selected: { bg: 'gray.300' },
    '.chakra-ui-dark &': {
      bg: 'whiteAlpha.100',
      color: 'white',
      _hover: { bg: 'secondary.800' },
      selected: { bg: 'whiteAlpha.400' },
    },
  },
};

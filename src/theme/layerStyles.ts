export const layerStyles = {
  noSelect: {
    '@media (pointer: coarse)': {
      userSelect: 'none',
    },
  },
  // We're using CSS classnames for dark mode instead of props, because it's not available here.
  // Discussion: https://github.com/chakra-ui/chakra-ui/issues/2231#issuecomment-771531813
  card: {
    bg: 'gray.100',
    '.chakra-ui-dark &': {
      bg: 'whiteAlpha.100',
    },
  },
  selectionBox: {
    bg: 'secondary.50',
    color: 'black',
    '&:hover,&:active': { bg: 'secondary.100' },
    selected: {
      bg: 'secondary.100',
      '&:hover,&:active': { bg: 'secondary.200' },
      '.chakra-ui-dark &': {
        bg: 'secondary.700',
        '&:hover,&:active': { bg: 'secondary.800' },
      },
    },
    '.chakra-ui-dark &': {
      bg: 'whiteAlpha.100',
      color: 'white',
      '&:hover,&:active': { bg: 'secondary.800' },
    },
  },
  muiCardColor: {
    bg: 'inherit',
    '.chakra-ui-dark &': {
      bg: { base: 'inherit', md: 'rgba(255, 255, 255, 0.05)' },
    },
  },
  muiCardColorActive: {
    bg: { base: 'inherit', md: 'inherit' },
    _hover: { shadow: 'md' },

    '.chakra-ui-dark &': {
      bg: { base: 'inherit', md: 'rgba(255, 255, 255, 0.05)' },
      _hover: { bg: { base: 'inherit', md: 'rgba(255, 255, 255, 0.12)' }, shadow: 'md' },
    },
  },
  // Unlike the ones above, these are not responsive
  muiCardColorAlwaysOn: {
    bg: { base: 'inherit', md: 'inherit' },
    '.chakra-ui-dark &': {
      bg: { base: 'rgba(255, 255, 255, 0.05)' },
    },
  },
  muiCardColorActiveAlwaysOn: {
    bg: { base: 'inherit' },
    _hover: { shadow: 'md' },

    '.chakra-ui-dark &': {
      bg: { base: 'rgba(255, 255, 255, 0.05)' },
      _hover: { bg: { base: 'rgba(255, 255, 255, 0.12)' }, shadow: 'md' },
    },
  },
  highlightForeground: {
    color: 'primary.800',
    '.chakra-ui-dark &': {
      color: 'primary.200',
    },
  },
  iconColor: {
    color: 'gray',
    bgColor: 'white',
    '.chakra-ui-dark &': {
      color: 'gray',
      bgColor: 'white',
    },
  },
};

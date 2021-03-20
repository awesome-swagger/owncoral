export const layerStyles = {
  noSelect: {
    '@media (pointer: coarse)': {
      userSelect: 'none',
    },
  },

  // We're using CSS classnames for dark mode instead of props, because it's not available here.
  // Discussion: https://github.com/chakra-ui/chakra-ui/issues/2231#issuecomment-771531813
  grayHeading: {
    color: 'gray.400',
    '.chakra-ui-dark &': {
      color: 'gray.600',
    },
  },
  lightGrayHeading: {
    color: 'gray.100',
    '.chakra-ui-dark &': {
      color: 'gray.200',
    },
  },
  whiteHeading: {
    color: 'white',
    '.chakra-ui-dark &': {
      color: 'white',
    },
  },
  card: {
    bg: 'gray.100',
    '.chakra-ui-dark &': {
      bg: 'whiteAlpha.100',
    },
  },
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
  navButton: {
    color: 'gray.500',
    _hover: { color: 'black', bg: 'primary.100' },
    '.chakra-ui-dark &': {
      color: 'gray.400',
      _hover: {
        color: 'white',
        bg: 'secondary.800',
      },
    },
    active: {
      color: 'black',
      _hover: { color: 'black', bg: 'primary.100' },
      '.chakra-ui-dark &': {
        color: 'white',
        _hover: {
          color: 'white',
          bg: 'secondary.800',
        },
      },
    },
  },
  navColor: {
    bg: 'white',
    '.chakra-ui-dark &': {
      bg: 'rgba(255, 255, 255, 0.05)',
    },
  },
  muiCardColor: {
    bg: { base: 'inherit', md: 'inherit' },
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
  resultHeading: {
    color: 'primary.700',
    '.chakra-ui-dark &': {
      color: 'primary.300',
    },
  },
  borderColor: {
    borderColor: 'gray.700',
    '.chakra-ui-dark &': {
      borderColor: 'gray.200',
    },
  },
  highlightForeground: {
    color: 'primary.800',
    '.chakra-ui-dark &': {
      color: 'primary.200',
    },
  },
  accordionColor: {
    bg: 'gray.100',
    _hover: { bg: 'primary.100' },
    '.chakra-ui-dark &': {
      bg: 'whiteAlpha.100',
      _hover: { bg: 'secondary.800' },
    },
  },
  popUpColor: {
    bg: 'white',
    '.chakra-ui-dark &': {
      bg: 'gray.600',
    },
  },
  LoginColor: {
    bg: 'inherit',
    '.chakra-ui-dark &': {
      bg: 'whiteAlpha.100',
    },
  },
  highLightColor: {
    color: 'secondary.700',
    '.chakra-ui-dark &': {
      color: 'secondary.300',
    },
  },
  chartFillOpacity: {
    fillOpacity: '0.2',
    '.chakra-ui-dark &': {
      fillOpacity: '1',
    },
  },
  primaryTooltipColor: {
    color: 'primary.900',
    '.chakra-ui-dark &': {
      color: 'primary.100',
    },
  },
  secondaryTooltipColor: {
    color: 'secondary.900',
    '.chakra-ui-dark &': {
      color: 'secondary.100',
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

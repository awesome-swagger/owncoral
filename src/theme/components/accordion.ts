import { mode } from '@chakra-ui/theme-tools';

export const Accordion = {
  baseStyle: (props: any) => ({
    container: {
      borderTopWidth: '1.5px',
      borderColor: mode('gray.200', 'gray.800')(props),
      bg: mode('white', 'whiteAlpha.100')(props),
      _hover: { bg: mode('secondary.100', 'secondary.800')(props) },
      _first: {
        borderTopWidth: '0px',
      },
      _last: {
        borderBottomWidth: '0px',
      },
    },
    button: { _focus: { boxShadow: 'none' } },
    panel: {
      _hover: { bg: mode('white', 'whiteAlpha.100')(props) },
    },
    icon: {},
  }),
};

import { mode } from '@chakra-ui/theme-tools';

export const Accordion = {
  baseStyle: (props: any) => ({
    container: {
      border: 'none',
      bg: mode('gray.100', 'whiteAlpha.100')(props),
      _hover: { bg: mode('secondary.100', 'secondary.900')(props) },
    },
  }),
};

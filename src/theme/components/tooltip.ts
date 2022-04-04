import { mode } from '@chakra-ui/theme-tools';

export const Tooltip = {
  baseStyle: (props: any) => ({
    backgroundColor: mode('white', 'dark.800')(props),
    borderRadius: props.theme.space[2],
    padding: props.theme.space[4],
    color: mode('gray.800', 'whiteAlpha.900')(props),
    boxShadow: mode(
      '0px 4px 16px rgba(0, 0, 0, 0.08)',
      '0px 4px 16px rgba(255, 255, 255, 0.08)',
    )(props),
  }),
};

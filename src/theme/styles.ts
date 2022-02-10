import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

export const lightBg = 'gray.50';
export const darkBg = 'gray.900';

export const lightContainerBg = 'white';
export const darkContainerBg = 'dark.800';

export const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode(lightBg, darkBg)(props),
    },
  }),
};

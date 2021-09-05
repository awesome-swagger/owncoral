import { mode } from '@chakra-ui/theme-tools';

const baseStyle = (props: any) => {
  return { color: mode('secondary.600', 'whiteAlpha.700')(props) };
};

export const Link = { baseStyle };

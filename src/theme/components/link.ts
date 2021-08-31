import { mode } from '@chakra-ui/theme-tools';

const baseStyle = (props: any) => {
  return { color: mode('#0B757A', '#FFFFFFB3')(props) };
};

export const Link = { baseStyle };

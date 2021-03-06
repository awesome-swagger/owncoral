import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const variants = {
  colored: (props: Dict) => {
    const defaultColorScheme = mode('primary', 'secondary')(props);
    const colorScheme =
      (props.colorScheme || 'auto') === 'auto' ? defaultColorScheme : props.colorScheme;

    return {
      color: mode(`${colorScheme}.500`, `${colorScheme}.500`)(props),
    };
  },
  label: (props: Dict) => {
    return {
      color: mode('#6F8283', '#FFFFFFB8')(props),
    };
  },
};

export const Text = {
  variants,
};

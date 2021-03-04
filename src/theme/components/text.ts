import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const variants = {
  colored: (props: Dict) => {
    const defaultColorScheme = mode('primary', 'secondary')(props);
    const colorScheme =
      (props.colorScheme || 'auto') === 'auto' ? defaultColorScheme : props.colorScheme;

    return {
      color: mode(`${colorScheme}.800`, `${colorScheme}.100`)(props),
    };
  },
};

export const Text = {
  variants,
};

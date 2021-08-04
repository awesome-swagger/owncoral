import { mode } from '@chakra-ui/theme-tools';

// Reference:
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/tabs.ts
type Dict = Record<string, any>;

const baseStyleTab = (props: Dict) => {
  return {
    _focus: {
      zIndex: 'unset',
      boxShadow: 'unset',
    },
    color: 'gray.400',
  };
};

const baseStyle = (props: Dict) => ({
  tab: baseStyleTab(props),
});

export const Tabs = {
  baseStyle,
};

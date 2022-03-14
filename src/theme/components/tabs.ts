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

const baseStyleTabList = (props: Dict) => {
  return {
    overflowX: 'auto',
    overflowY: 'hidden',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' },
  };
};

const baseStyle = (props: Dict) => ({
  tab: baseStyleTab(props),
  tablist: baseStyleTabList(props),
});

export const Tabs = {
  baseStyle,
};

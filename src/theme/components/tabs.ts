import { mode } from '@chakra-ui/theme-tools';

// Reference:
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/tabs.ts
type Dict = Record<string, any>;

// Tabs Base Styles
const baseStyleTab = {
  _focus: {
    zIndex: 'unset',
    boxShadow: 'unset',
  },
  color: 'gray.400',
};

const baseStyleTabList = {
  overflowX: 'auto',
  overflowY: 'hidden',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
};

const baseStyle = {
  tab: baseStyleTab,
  tablist: baseStyleTabList,
};

// Tabs Variants Styles

const bordered = (props: Dict) => ({
  tablist: {
    marginBottom: 0,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'gray.300',
  },
  tab: {
    color: 'gray.300',
    borderTop: '2px solid transparent',
    borderBottom: '2px solid transparent',
    _selected: {
      color: mode(`dark.500`, `white`)(props),
      borderBottomColor: mode(`dark.500`, `white`)(props),
    },
  },
});

const variants = {
  bordered,
};

export const Tabs = {
  baseStyle,
  variants,
};

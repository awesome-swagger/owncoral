/**
 *
 * Package organization convention here:
 *   https://chakra-ui.com/docs/theming/customize-theme
 */

import { extendTheme } from '@chakra-ui/react';

// Component style overrides
import Button from './components/button';
import Input from './components/input';
// Foundational style overrides
import typography from './foundations/typography';

// Global style overrides
// import styles from './styles';

const overrides = {
  ...typography,
  // Other foundational style overrides go here
  components: {
    Button,
    Input,
  },
};
export default extendTheme(overrides);

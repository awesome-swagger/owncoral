/**
 *
 * Package organization convention here:
 *   https://chakra-ui.com/docs/theming/customize-theme
 */

import { extendTheme } from '@chakra-ui/react';
import type { ColorModeOptions } from '@chakra-ui/system';

// Component style overrides
import { Button } from './components/button';
import { Heading } from './components/heading';
import { Input } from './components/input';
// Foundational style overrides
import { colors } from './foundations/colors';
import { shadows } from './foundations/shadows';
import { typography } from './foundations/typography';
import { layerStyles } from './layerStyles';
import * as textStyles from './textStyles';

// Global style overrides
// import styles from './styles';

const config: ColorModeOptions = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const overrides = {
  colors,
  ...typography,
  shadows,
  config,
  textStyles,
  layerStyles,

  // Other foundational style overrides go here
  components: {
    Button,
    Input,
    Heading,
  },
};

// eslint-disable-next-line import/no-default-export
export default extendTheme(overrides);

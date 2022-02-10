import type React from 'react';
import { Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { useNavHeight } from '../../lib/useNavHeight';
import { NAVBAR_TOP_BREAKPOINT } from '../navBar/constants';

export const SwitchWrapper = ({ children }: { children: React.ReactNode }) => {
  const { headerHeight, footerHeight } = useNavHeight();

  return (
    <Box 
      h={{
        base:
          `calc(${window.innerHeight}px - ${footerHeight} ` +
          '- env(safe-area-inset-top))',
        [NAVBAR_TOP_BREAKPOINT]:
          `calc(${window.innerHeight}px - ${headerHeight} ` +
          '- env(safe-area-inset-top))',
      }}
      overflowY="auto"
    >
      <Switch>{children}</Switch>
    </Box>
  );
}

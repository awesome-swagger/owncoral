import { Box } from '@chakra-ui/react';
import type { jsx } from '@emotion/react';

export const SlideShow = ({ children }: { children: React.ReactNode }) => (
  <Box
    layerStyle="selectionBox"
    borderRadius="full"
    pos={{ base: 'fixed', md: 'relative' }}
    right={{ base: 4, md: 0 }}
    px={4}
    py={1}
  >
    {children}
  </Box>
);

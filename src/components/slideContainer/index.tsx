import type React from 'react';
import { Box, VStack } from '@chakra-ui/react';

export const SlideContainer = ({ children }: { children: React.ReactNode }) => (
  <VStack
    justify="space-between"
    minH={{
      base: '100%',
      md: `calc((${window.innerHeight}px * 0.8) - 3rem)`,
    }}
    pb={{ base: 12, md: 0 }}
  >
    {children}
    <Box display={{ base: 'block', md: 'none' }} />
  </VStack>
);

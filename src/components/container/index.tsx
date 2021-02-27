import type React from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Center, forwardRef } from '@chakra-ui/react';

import theme from '../../theme';

// import Logo from '../../assets/coral.svg';

export const Container = forwardRef<BoxProps, 'div'>((props, ref) => (
  <Center w="100vw" h="100vh">
    <Box
      p="1.5rem"
      maxW={theme.breakpoints.md}
      minW={theme.breakpoints.sm}
      m={{ base: '0', md: '3.5rem' }}
      w={{ base: '100vw', md: '80vw' }}
      h={{ base: '100vh', md: '80vh' }}
      borderRadius={{ base: 'none', md: '2xl' }}
      pos="relative"
      boxShadow="md"
      ref={ref}
      overflow="hidden auto"
    >
      {/* <Logo style={{ position: 'absolute', top: '1.5rem', right: '0px', height: '2rem' }} /> */}
      {props.children}
    </Box>
  </Center>
));

export const FlexContainer = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Container display="flex" align="center" justify="center" direction="column" ref={ref}>
    {props.children}
  </Container>
));

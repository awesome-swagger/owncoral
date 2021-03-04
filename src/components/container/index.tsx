import type React from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Center, forwardRef, useColorModeValue } from '@chakra-ui/react';

import theme from '../../theme';

// import Logo from '../../assets/coral.svg';

export const Container = forwardRef<BoxProps, 'div'>((props, ref) => {
  const muiCardColorActive = useColorModeValue('inherit', 'rgba(255, 255, 255, 0.05)');

  return (
    <Center w="100vw" h="100vh" pos="fixed" zIndex={props.zIndex}>
      <Box
        p={6}
        maxW={theme.breakpoints.md}
        m={{ base: '0', md: 14 }}
        w={{ base: '100vw', md: '80vw' }}
        h={{ base: '100vh', md: '80vh' }}
        borderRadius={{ base: 'none', md: '2xl' }}
        bgColor={{ base: 'inherit', md: muiCardColorActive }}
        pos="relative"
        boxShadow="md"
        ref={ref}
        overflow="hidden auto"
        {...props}
      >
        {/* <Logo style={{ position: 'absolute', top: '1.5rem', right: '0px', height: '2rem' }} /> */}
        {props.children}
      </Box>
    </Center>
  );
});

export const FlexContainer = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Container
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    ref={ref}
  >
    {props.children}
  </Container>
));

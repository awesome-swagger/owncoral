import type React from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Flex, forwardRef } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';

export const Container = forwardRef<BoxProps, 'div'>((props, ref) => (
  <Box
    p="24px"
    m="0 auto"
    w="100%"
    h="100vh"
    maxW="600px"
    pos="relative"
    boxShadow="0 0 5px #00000040"
    ref={ref}
  >
    <Logo style={{ position: 'absolute', top: '24px', right: '24px', height: '30px' }} />
    {props.children}
  </Box>
));

export const FlexContainer = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex
    pos="relative"
    p="24px"
    m="0 auto"
    w="100%"
    h="100vh"
    align="center"
    justify="center"
    direction="column"
    maxW="600px"
    boxShadow="0 0 5px #00000040"
    ref={ref}
  >
    <Logo style={{ position: 'absolute', top: '24px', right: '24px', height: '30px' }} />
    {props.children}
  </Flex>
));

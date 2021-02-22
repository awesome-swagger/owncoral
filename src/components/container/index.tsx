import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Flex, forwardRef, Image } from '@chakra-ui/react';
import type React from 'react';

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
    {...props}
  />
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
    {...props}
  />
));

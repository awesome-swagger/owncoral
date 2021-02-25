import type React from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Flex, forwardRef } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';

export const Container = forwardRef<BoxProps, 'div'>((props, ref) => (
  <Box
    p="1.5rem"
    m={{ base: '0', md: '1.75rem' }}
    w={{ base: '100%', md: 'calc(100% - 3.5rem)' }}
    h={{ base: '100vh', md: 'calc(100vh - 3.5rem)' }}
    borderRadius="1rem"
    pos="relative"
    boxShadow="md"
    ref={ref}
  >
    <Logo style={{ position: 'absolute', top: '1.5rem', right: '0px', height: '2rem' }} />
    {props.children}
  </Box>
));

export const FlexContainer = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex
    pos="relative"
    p="1.5rem"
    m={{ base: '0', md: '1.75rem' }}
    w={{ base: '100%', md: 'calc(100% - 3.5rem)' }}
    h={{ base: '100vh', md: 'calc(100vh - 3.5rem)' }}
    borderRadius="1rem"
    align="center"
    justify="center"
    direction="column"
    boxShadow="md"
    ref={ref}
  >
    <Logo style={{ position: 'absolute', top: '1.5rem', right: '0px', height: '2rem' }} />
    {props.children}
  </Flex>
));

import type React from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Flex, forwardRef } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';

export const Container = forwardRef<BoxProps, 'div'>((props, ref) => (
  <Box
    p="24px"
    m={{ base: '0', md: '28px' }}
    w={{ base: '100%', md: 'calc(100% - 56px)' }}
    h={{ base: '100vh', md: 'calc(100vh - 56px)' }}
    borderRadius="15px"
    pos="relative"
    boxShadow="md"
    ref={ref}
  >
    <Logo style={{ position: 'absolute', top: '24px', right: '0px', height: '30px' }} />
    {props.children}
  </Box>
));

export const FlexContainer = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex
    pos="relative"
    p="24px"
    m={{ base: '0', md: '28px' }}
    w={{ base: '100%', md: 'calc(100% - 56px)' }}
    h={{ base: '100vh', md: 'calc(100vh - 56px)' }}
    borderRadius="15px"
    align="center"
    justify="center"
    direction="column"
    boxShadow="md"
    ref={ref}
  >
    <Logo style={{ position: 'absolute', top: '24px', right: '0px', height: '30px' }} />
    {props.children}
  </Flex>
));

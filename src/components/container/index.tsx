import { Fragment } from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, forwardRef, Text, useBreakpointValue } from '@chakra-ui/react';

import theme from '../../theme';
import { ColorModeButton } from '../colorModeButton';
import { TimeoutModal } from '../timeoutModal';

type ContainerPropsT = {
  showColorModeButton?: boolean;
  padding?: number;
};
export const Container = forwardRef<BoxProps & ContainerPropsT, 'div'>(
  ({ showColorModeButton = true, padding = 6, children, ...otherProps }, ref) => {
    const showMobileTag = useBreakpointValue({ base: false, md: true });
    return (
      <Fragment>
        <TimeoutModal />
        <Box
          p={padding}
          marginX={{ base: '0', md: 'auto' }}
          marginTop={{ base: '0', md: 6 }}
          marginBottom={{ base: '0', md: 2 }}
          w={{ base: '100%', md: '80vw' }}
          maxW={{ base: 'unset', md: theme.breakpoints.sm }}
          minH={{ base: window.innerHeight, md: (window.innerHeight / 100) * 80 }}
          borderRadius={{ base: 'none', md: '2xl' }}
          layerStyle="muiCardColor"
          pos="relative"
          boxShadow={{ base: 'none', md: 'md' }}
          ref={ref}
          overflow="hidden"
          {...otherProps}
        >
          {children}
          {showColorModeButton && <ColorModeButton pos="fixed" top={16} right={6} />}
        </Box>
        {showMobileTag && (
          <Fragment>
            <Text textAlign="center" textStyle="Body1" color="gray.500" fontStyle="italic">
              Optimized for mobile experience
            </Text>
            <Box h={4} />
          </Fragment>
        )}
      </Fragment>
    );
  },
);

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

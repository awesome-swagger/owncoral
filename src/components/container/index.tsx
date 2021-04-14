import { Fragment } from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, Center, forwardRef } from '@chakra-ui/react';

import theme from '../../theme';
import { ColorModeButton } from '../colorModeButton';
import { TimeoutModal } from '../timeoutModal';

// import Logo from '../../assets/coral.svg';

type ContainerPropsT = {
  showColorModeButton?: boolean;
};
export const Container = forwardRef<BoxProps & ContainerPropsT, 'div'>(
  ({ showColorModeButton = true, children, ...otherProps }, ref) => {
    return (
      <Fragment>
        <TimeoutModal />
        <Box
          p={6}
          marginX={{ base: '0', md: 'auto' }}
          marginY={{ base: '0', md: 14 }}
          w={{ base: '100vw', md: '80vw' }}
          maxW={theme.breakpoints.md}
          minH={{ base: '100vh', md: '80vh' }}
          borderRadius={{ base: 'none', md: '2xl' }}
          layerStyle="muiCardColor"
          pos="relative"
          boxShadow="md"
          ref={ref}
          // overflow="hidden auto"
          {...otherProps}
        >
          {/* <Logo style={{ position: 'absolute', top: '1.5rem', right: '0px', height: '2rem' }} /> */}
          {children}
        </Box>
        {showColorModeButton && <ColorModeButton pos="fixed" top={6} right={6} />}
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

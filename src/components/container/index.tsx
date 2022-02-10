import { Fragment } from 'react';
import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Box, forwardRef, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

import { useNavHeight } from '../../lib/useNavHeight';
import theme from '../../theme';
import { darkContainerBg, lightContainerBg } from '../../theme/styles';
import { ColorModeButton } from '../colorModeButton';
import { TimeoutModal } from '../timeoutModal';

type ContainerPropsT = {
  showColorModeButton?: boolean;
};
export const Container = forwardRef<BoxProps & ContainerPropsT, 'div'>(
  ({ showColorModeButton = true, children, ...otherProps }, ref) => {
    const showMobileTag = useBreakpointValue({ base: false, md: true });
    const { footerHeight } = useNavHeight();
    const bgColor = useColorModeValue(lightContainerBg, darkContainerBg);

    return (
      <Fragment>
        <TimeoutModal />
        <Box
          p={6}
          marginX={{ base: '0', md: 'auto' }}
          marginTop={{ base: '0', md: 6 }}
          marginBottom={{ base: '0', md: 2 }}
          w={{ base: '100%', md: '80vw' }}
          maxW={{ base: 'unset', md: theme.breakpoints.sm }}
          minH={{
            base: `calc(${window.innerHeight}px - ${footerHeight} - env(safe-area-inset-top))`,
            md: window.innerHeight * 0.8,
          }}
          borderRadius={{ base: 'none', md: '2xl' }}
          bg={bgColor}
          pos="relative"
          boxShadow={{ base: 'none', md: 'md' }}
          ref={ref}
          overflow="hidden"
          {...otherProps}
        >
          {children}
          {showColorModeButton && (
            <ColorModeButton
              pos="fixed"
              top={`calc(${showMobileTag ? 4 : 1.5}rem + env(safe-area-inset-top))`}
              right="calc(1.5rem + env(safe-area-inset-right))"
            />
          )}
        </Box>
        {showMobileTag && (
          <Text textAlign="center" textStyle="Body1" color="gray.500" fontStyle="italic" pb={4}>
            Optimized for mobile experience
          </Text>
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

import React, { Fragment } from 'react';
import { FiFileText, FiHome, FiTrendingUp } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { Portal } from '@visx/tooltip';

// import Logo from '../../assets/coral.svg';
import { bodyText2 } from '../../theme/textStyles';
import { ColorModeButton } from '../colorModeButton';

const navLinks = [
  {
    name: 'Portfolio',
    url: '/portfolio',
    icon: FiTrendingUp,
  },
  {
    name: 'Opportunities',
    url: '/new-opportunities',
    icon: FiHome,
  },
  {
    name: 'Documents',
    url: '/documents',
    icon: FiFileText,
  },
];

/*
  Layout
    Children are inlined into top left area. Logo is centered, but
    can be pushed rightward by children (children can take up to 50% area).

    Below md breakpoint, nav buttons are shown in a bottom bar.
    At md and above, nav buttons are inlined into top right.


  Styling
    In dark mode, we lighten cards by applying transparency. The headers and footers need
    a solid dark backing (else content will show up through the transparency), hence the apparenlty
    useless doubled up <Box>es

    Reference: https://material.io/design/color/dark-theme.html#properties
 */
export function NavBar(props: React.PropsWithChildren<{}>): React.ReactElement | null {
  const location = useLocation();
  const currentPageName = getCurrentPageName(location.pathname);
  const bgColor = useColorModeValue('white', 'rgba(255, 255, 255, 0.15)');
  const footerHeight = 20;

  return (
    <Fragment>
      {/* Provide a default bgColor backing transparency in dark mode */}
      <Box
        as="header"
        pos="sticky"
        top={0}
        w="100%"
        boxShadow="xs"
        h={16}
        /* match theme.styles.global.body.bg for dark mode */
        bgColor="gray.800"
        zIndex={1}
      >
        <Flex align="center" justify="center" bgColor={bgColor} h="100%" w="100%">
          {/* Children are allowed to push the logo right, but not too far */}
          <Box flexBasis={0} flexGrow={1} maxW="50%">
            {props.children}
          </Box>

          <Center h="100%" marginX={5}>
            <Flex h="100%" align="center">
              {/* <Icon as={Logo} w={8} h={8} /> */}
              <Heading as="h5" size="sm" color="primary.500" m={0}>
                Coral
              </Heading>
            </Flex>
          </Center>

          <Flex flexBasis={0} flexGrow={1}>
            <Spacer />
            <HStack h="100%" pr={3} justify="right" align="center" spacing={3}>
              <Box h="100%" display={{ base: 'none', md: 'block' }}>
                <NavButtons currentPageName={currentPageName} />
              </Box>
              {/* TODO: profile menu */}
              <ColorModeButton />
              <Avatar src="https://bit.ly/sage-adebayo" />
            </HStack>
          </Flex>
        </Flex>
      </Box>

      {/* This goes at bottom of content to match footer height */}
      <Portal>
        <Box display={{ md: 'none' }} h={footerHeight} />
      </Portal>

      {/* Provide a default bgColor backing transparency in dark mode */}
      <Box
        as="footer"
        pos="fixed"
        bottom={0}
        w="100%"
        boxShadow="xs"
        h={footerHeight}
        display={{ md: 'none' }}
        /* match theme.styles.global.body.bg for dark mode */
        bgColor="gray.800"
        zIndex={1}
      >
        <Center bgColor={bgColor} h="100%" w="100%" paddingBottom={3}>
          <NavButtons currentPageName={currentPageName} />
        </Center>
      </Box>
    </Fragment>
  );
}

function NavButtons(props: { currentPageName: string | null }) {
  const color = useColorModeValue('black', 'white');
  const backgroundColor = useColorModeValue('primary.100', 'secondary.800');
  const grayColor = useColorModeValue('gray.500', 'gray.400');
  const [isTouch] = useMediaQuery('(pointer: coarse)');

  return (
    <Flex h="100%" as="nav">
      {navLinks.map(({ name, url, icon }) => (
        <Flex
          as={Link}
          to={url}
          direction="column"
          align="center"
          key={name}
          p={1}
          m={0}
          h="100%"
          justify="center"
          color={props.currentPageName === name ? color : grayColor}
          borderRadius="lg"
          _hover={{ color, backgroundColor }}
          // Button-press effect for desktop
          _active={isTouch ? {} : { transform: 'scale(0.9)' }}
          sx={{ transition: 'all 200ms' }}
        >
          <Icon as={icon} w={5} h={5} aria-label={name} m={0} />
          <span css={bodyText2}>{name}</span>
        </Flex>
      ))}
    </Flex>
  );
}

function getCurrentPageName(path: string): string | null {
  for (const { name, url } of navLinks) {
    if (path.startsWith(url)) {
      return name;
    }
  }
  return null;
}

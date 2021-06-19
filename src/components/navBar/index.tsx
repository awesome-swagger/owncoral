import React, { Fragment } from 'react';
import { FiBell, FiKey, FiTag, FiUser } from 'react-icons/fi';
import { HiOutlineDocument } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { Portal } from '@visx/tooltip';

import Academy from '../../assets/Academy.svg';
import Logo from '../../assets/coral-logo-wtext.svg';
import { ColorModeButton } from '../colorModeButton';

const NAV_ZINDEX = 5;

const navLinks = [
  {
    name: 'Listings',
    url: '/coming-soon/listings',
    icon: FiTag,
  },
  {
    name: 'Academy',
    url: '/academy',
    icon: Academy,
  },
  {
    name: 'Portfolio',
    url: '/portfolio',
    icon: FiKey,
  },
  {
    name: 'Notifications',
    url: '/coming-soon/notifications',
    icon: FiBell,
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: FiUser,
  },
];

if (import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development') {
  navLinks.push({
    name: 'Drafts',
    url: '/drafts',
    icon: HiOutlineDocument,
  });
}

const navBarTopBreakpoint = 'md';

/*
  Layout
    Children are inlined into top left area. Logo is centered, but
    can be pushed rightward by children (children can take up to 50% area).

    Below /navBarTopBreakpoint/ breakpoint, nav buttons are shown in a bottom bar.
    At /navBarTopBreakpoint/ and above, nav buttons are inlined into top right.


  Styling
    In dark mode, we lighten cards by applying transparency. The headers and footers need
    a solid dark backing (else content will show up through the transparency), hence the apparenlty
    useless doubled up <Box>es

    Reference: https://material.io/design/color/dark-theme.html#properties
 */
export function NavBar(props: React.PropsWithChildren<{}>): React.ReactElement | null {
  const location = useLocation();
  const currentPageName = getCurrentPageName(location.pathname);
  const logoFillColor = useColorModeValue('#1B1E1E', '#E8E8E8');
  const [isTouch] = useMediaQuery('(pointer: coarse)');

  const headerHeight = 16;
  const mobileFooterExtraHeight = 3;
  const footerHeight = isTouch ? `${19 / 4}rem` : `${(19 - mobileFooterExtraHeight) / 4}rem`;
  const shouldCenterLogo = useBreakpointValue({ base: true, [navBarTopBreakpoint]: false });

  /*
   * TODO: Simplify
   *
   * Too many levels of spacers, flexes, etc.
   */
  return (
    <Fragment>
      {/* Spacer to match fixed header */}
      <Box h={headerHeight} />
      {/* Provide a default bgColor backing transparency in dark mode */}
      <Box
        as="header"
        pos="fixed"
        top={0}
        w="100%"
        boxShadow="xs"
        h={headerHeight}
        /* match theme.styles.global.body.bg for dark mode */
        bgColor="gray.800"
        zIndex={NAV_ZINDEX}
        sx={{ 'overscroll-behavior': 'none' }}
      >
        <Flex align="stretch" justify="center" layerStyle="navColor" h="100%" w="100%">
          {/* Children are allowed to push the logo right, but not too far */}
          <Box flexBasis={0} flexGrow={shouldCenterLogo ? 1 : 0} maxW="50%">
            {props.children}
          </Box>

          <Center h="100%" marginX={5}>
            <Icon as={Logo} w="8em" h="2em" sx={{ fill: logoFillColor }} />
          </Center>

          <Flex flexBasis={0} flexGrow={1}>
            <HStack h="100%" pr={3} justify="flex-end" align="center" spacing={3} flexGrow={1}>
              <Box h="100%" display={{ base: 'none', [navBarTopBreakpoint]: 'block' }}>
                <NavButtons currentPageName={currentPageName} isTouch={isTouch} />
              </Box>
              <ColorModeButton />
              {/* TODO: Re-enable for desktop (old Profile Popover)
              <ProfilePopOver /> */}
            </HStack>
          </Flex>
        </Flex>
      </Box>

      {/* This goes at bottom of content to match footer height */}
      <Portal>
        <Box display={{ [navBarTopBreakpoint]: 'none' }} h={footerHeight} />
      </Portal>

      {/* Provide a default bgColor backing transparency in dark mode */}
      <Box
        as="footer"
        pos="fixed"
        bottom={0}
        w="100%"
        boxShadow="xs"
        h={footerHeight}
        display={{ [navBarTopBreakpoint]: 'none' }}
        /* match theme.styles.global.body.bg for dark mode */
        bgColor="gray.800"
        zIndex={NAV_ZINDEX}
        sx={{ 'overscroll-behavior': 'none' }}
      >
        {/* Extra space at bottom on mobile to avoid */}
        <Center layerStyle="navColor" h="100%" w="100%" pb={isTouch ? mobileFooterExtraHeight : 0}>
          <NavButtons currentPageName={currentPageName} isTouch={isTouch} />
        </Center>
      </Box>
    </Fragment>
  );
}

function NavButtons(props: { currentPageName: string | null; isTouch: boolean }) {
  const navBarTopBreakpoint = 'lg';

  return (
    <Flex
      as="nav"
      minW={{ [navBarTopBreakpoint]: '380px' }}
      w={{ base: '100%', [navBarTopBreakpoint]: '37vw' }}
      maxW="450px"
      h="100%"
    >
      {navLinks.map(({ name, url, icon }) => (
        <Flex
          as={Link}
          to={url}
          direction="column"
          align="center"
          flex="1 1 0px"
          key={name}
          p={1}
          m={0}
          h="100%"
          justify="center"
          layerStyle={props.currentPageName === name ? 'navButton.active' : 'navButton'}
          borderRadius="lg"
          // Button-press effect for desktop
          _active={props.isTouch ? {} : { transform: 'scale(0.9)' }}
          sx={{ transition: 'all 200ms' }}
        >
          <Icon as={icon} w={5} h={5} aria-label={name} m={0} />
          <Text as="span" textStyle="Caption1">
            {name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

function getCurrentPageName(path: string): string | null {
  const filteredLink = navLinks.find(link => path.startsWith(link.url));

  return filteredLink ? filteredLink.name : null;
}

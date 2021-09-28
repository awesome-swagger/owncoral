import React, { Fragment } from 'react';
import { FiBell, FiKey, FiTag, FiUser } from 'react-icons/fi';
import { HiOutlineDocument } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Center,
  Flex,
  Icon,
  Spacer,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { Portal } from '@visx/tooltip';
import { useNavHeight } from '../../lib/useNavHeight';

import Academy from '../../assets/academy.svg';
import Logo from '../../assets/coral-logo-wtext.svg';

const NAV_ZINDEX = 5;
const isProd = import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'production';

type navLinksT = { name: string; url: string; icon: any }

const navLinks = [
  {
    name: 'Listings',
    url: '/listings',
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

if (!isProd) {
  navLinks.push({
    name: 'Drafts',
    url: '/drafts',
    icon: HiOutlineDocument,
  });
}

// Past this size, navbar only shown on top bar (no footer)
export const NAVBAR_TOP_BREAKPOINT = 'md';

/*
  Layout
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

  const { headerHeight, footerHeight, extraHeight } = useNavHeight();
  const isBottomNav = useBreakpointValue({ base: true, [NAVBAR_TOP_BREAKPOINT]: false });

  const navColor = useColorModeValue('gray.50', 'whiteAlpha.200');

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
        sx={{ overscrollBehavior: 'none' }}
      >
        <Flex align="stretch" justify="center" bg={navColor} h="100%" w="100%">
          <Center h="100%" marginX={6}>
            <Icon as={Logo} w="6em" h="1.5em" sx={{ fill: logoFillColor }} />
          </Center>

          {!isBottomNav && (
            <Fragment>
              <Spacer />
              <NavButtons currentPageName={currentPageName} isTouch={isTouch} />
            </Fragment>
          )}
        </Flex>
      </Box>

      {/* This goes at bottom of content to match footer height */}
      <Portal>
        <Box display={{ [NAVBAR_TOP_BREAKPOINT]: 'none' }} h={footerHeight} />
      </Portal>

      {/* Provide a default bgColor backing transparency in dark mode */}
      <Box
        as="footer"
        pos="fixed"
        bottom={0}
        w="100%"
        boxShadow="xs"
        h={footerHeight}
        display={{ [NAVBAR_TOP_BREAKPOINT]: 'none' }}
        /* match theme.styles.global.body.bg for dark mode */
        bgColor="gray.800"
        zIndex={NAV_ZINDEX}
        sx={{ overscrollBehavior: 'none' }}
      >
        {/* Extra space at bottom on mobile to avoid */}
        <Center bg={navColor} h="100%" w="100%" pb={isTouch ? extraHeight : 0}>
          <NavButtons currentPageName={currentPageName} isTouch={isTouch} />
        </Center>
      </Box>
    </Fragment>
  );
}

function NavButtons(props: { currentPageName: string | null; isTouch: boolean }) {
  const navBarTopBreakpoint = 'lg';

  const hoverColors = useColorModeValue(
    { color: 'black', bg: 'secondary.100' },
    { color: 'white', bg: 'secondary.800' },
  );
  const inactiveColor = useColorModeValue('gray.500', 'gray.400');
  const activeColor = useColorModeValue('black', 'white');

  return (
    <Flex
      as="nav"
      minW={{ [navBarTopBreakpoint]: '380px' }}
      w={{ base: '100%', [navBarTopBreakpoint]: '37vw' }}
      maxW="450px"
      h="100%"
    >
      {navLinks.map(({ name, url, icon }: navLinksT) => (
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
          borderRadius="lg"
          // Button-press effect for desktop
          _active={props.isTouch ? {} : { transform: 'scale(0.9)' }}
          sx={{ transition: 'all 200ms' }}
          _hover={hoverColors}
          color={props.currentPageName === name ? activeColor : inactiveColor}
        >
          <Icon
            as={icon}
            w={5}
            h={5}
            aria-label={name}
            m={0}
            fill={props.currentPageName === name ? activeColor : 'none'}
          />
          <Text as="span" textStyle="Caption1" fontWeight="normal">
            {name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

function getCurrentPageName(path: string): string | null {
  const filteredLink = navLinks.find((link) => path.startsWith(link.url));

  return filteredLink ? filteredLink.name : null;
}

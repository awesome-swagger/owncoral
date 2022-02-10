import React, { Fragment } from 'react';
import { HiOutlineDocument } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Center,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';

import Logo from '../../assets/coral-logo-wtext.svg';
import {
  AcademyUrl,
  ComingSoonUrl,
  DraftsUrl,
  ListingsUrl,
  NewsfeedUrl,
  PortfolioUrl,
  ProfileUrl,
} from '../../lib/uriConstants';
import { useNavHeight } from '../../lib/useNavHeight';
import theme from '../../theme';
import {
  Academy,
  AcademyFill,
  Bell,
  BellAlert,
  BellAlertFill,
  BellFill,
  Communication,
  CommunicationFill,
  Key,
  KeyFill,
  Tag,
  TagFill,
  User,
  UserFill
} from './../../assets/navBarIcons';
import { NAVBAR_TOP_BREAKPOINT } from './constants';

const NAV_ZINDEX = 5;
const isProd = import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'production';

type navLinksT = {
  name: string;
  url?: string;
  icon: ((props: any) => (React.ReactElement));
  fullIcon : ((props: any) => (React.ReactElement));
};

const navLinks = [
  {
    name: 'Listings',
    url: ListingsUrl,
    icon: Tag,
    fullIcon: TagFill,
  },
  {
    name: 'Academy',
    url: AcademyUrl,
    icon: Academy,
    fullIcon: AcademyFill,
  },
  {
    name: 'Portfolio',
    url: PortfolioUrl,
    icon: Key,
    fullIcon: KeyFill,
  },
  {
    name: 'News',
    url: NewsfeedUrl,
    icon: Communication,
    fullIcon: CommunicationFill,
  },
  {
    name: 'Profile',
    url: ProfileUrl,
    icon: User,
    fullIcon: UserFill,
  },
];

if (!isProd) {
  navLinks.push({
    name: 'Drafts',
    url: DraftsUrl,
    icon: Communication, // icons intentionally spaghetti
    fullIcon: UserFill,
  });
}

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
  const logoFillColor = useColorModeValue('dark.500', 'gray.200');
  const [isTouch] = useMediaQuery('(pointer: coarse)');

  const { extraHeight, footerHeight, headerHeight } = useNavHeight();

  const navColor = useColorModeValue('white', whiten('gray.900', 6)(theme));
  /* match theme.styles.global.body.bg for dark mode */
  const navBg = useColorModeValue(navColor, 'gray.900');

  return (
    <Fragment>
      {/* Spacer to match fixed header */}
      <Box
        h={`calc(${headerHeight} + env(safe-area-inset-top))`}
        display={{ base: 'none', md: 'block' }}
      />
      {/* Provide a default bgColor backing transparency in dark mode */}
      <Box
        as="header"
        pos="fixed"
        top="-1px" // Avoid transparent box-shadow showing thin layer underneath at top
        w="100%"
        boxShadow="xs"
        h={`calc(${headerHeight} + env(safe-area-inset-top) * 7/6)`}
        display={{ base: 'none', md: 'block' }}
        paddingTop="env(safe-area-inset-top)"
        paddingLeft="env(safe-area-inset-left)"
        paddingRight="env(safe-area-inset-right)"
        paddingBottom="calc(env(safe-area-inset-top) / 6)"
        bgColor={navBg}
        bg={navColor}
        zIndex={NAV_ZINDEX}
        sx={{ overscrollBehavior: 'none' }}
      >
        <Flex align="stretch" justify="center" h="100%" w="100%">
          <Center h="100%" marginX={6}>
            <Icon as={Logo} w="6em" h="1.5em" sx={{ fill: logoFillColor }} />
          </Center>
          <Spacer />
          <NavButtons currentPageName={currentPageName} isTouch={isTouch} />
        </Flex>
      </Box>

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
        bgColor="gray.900"
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
      {navLinks.map(({ name, url, icon, fullIcon }: navLinksT) => (
        <Flex
          as={url ? Link : Flex}
          to={url ? url : null}
          direction="column"
          align="center"
          flex="1 1 0px"
          key={name}
          p={1}
          m={0}
          h="100%"
          justify="center"
          borderRadius="lg"
          cursor="pointer"
          id={name}
          // Button-press effect for desktop
          _active={props.isTouch ? {} : { transform: 'scale(0.9)' }}
          sx={{ transition: 'all 200ms' }}
          _hover={hoverColors}
          color={props.currentPageName === name ? activeColor : inactiveColor}
          
        >
          <Icon
            as={props.currentPageName === name ? fullIcon : icon}
            w={5}
            h={5}
            aria-label={name}
            m={0}
            fill={props.currentPageName === name ? activeColor : "none"}
            stroke={props.currentPageName === name ? "none" : activeColor}
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
  const filteredLink = navLinks.find((link) => link.url && path.startsWith(link.url));

  return filteredLink?.name || null;
}

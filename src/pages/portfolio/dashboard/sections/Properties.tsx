import { Fragment, SyntheticEvent, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link as BrowserLink } from 'react-router-dom';
import type { PortfolioDashboardPropertyT } from '../../../../shared-fullstack/types';
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { transparentize, whiten } from '@chakra-ui/theme-tools';
import * as R from 'remeda';

import PlaceholderIcon from '../../../../assets/low-poly-placeholder-icon.png';
import { Overline, Title2 } from '../../../../components/text';
import { formatFinancial } from '../../../../lib/financialFormatter';
import theme from '../../../../theme';
import { darkBg, lightBg } from '../../../../theme/styles';
import { addressToUrlFragment } from '../../lib';

const SHOW_FEWER_COUNT = 5;
/*
 * Small hack to force Top Ranking list to always show h-scroll on iOS / macOS,
 * which hides scrollbars when not scrolling (even when overscroll: scroll is set)
 *
 * Reference:
 *   https://stackoverflow.com/a/10100209
 *   https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
 */
const iosForcedScrollX = {
  '::-webkit-scrollbar': {
    // Note: maybe it should be -webkit-appearance
    WebkitAppearance: 'none',
    width: '7px',
    height: '7px',
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: `${window.innerHeight}px`,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    boxShadow: '0 0 1px rgba(255, 255, 255, .5)',
  },

  '::-webkit-scrollbar-corner': {
    backgroundColor: 'inherit',
  },
};

type PropertiesPropsT = {
  properties: PortfolioDashboardPropertyT[] | null;
  handleClick: () => void;
  showAll: boolean;
  portfolioRootUrl: string;
};
export const Properties = ({
  properties,
  handleClick,
  showAll,
  portfolioRootUrl,
}: PropertiesPropsT) => {
  const propertyDetailUrl = (property: PortfolioDashboardPropertyT) =>
    `${portfolioRootUrl}/investment?property=${addressToUrlFragment(property.address)}&entity=${
      property.legalEntityId
    }`;

  const visibleProperties =
    properties !== null
      ? R.sortBy(properties, (p: PortfolioDashboardPropertyT) => p.currentEquity || -1)
          .reverse()
          .slice(0, showAll ? properties.length : SHOW_FEWER_COUNT)
      : [];

  // HACK: match background color of body (theme.styles.global.body.bg)
  const themeBackgroundColor = useColorModeValue('gray.50', 'gray.800');

  // Shared sizing constraints between property columns
  const rowSpacing = 6;
  const propertyColWidth = 16;
  const propertyRowHeight = 12;

  const [tableLeftScrollDist, setTableLeftScrollDist] = useState(0);
  const [tableRightScrollDist, setTableRightScrollDist] = useState<number>(Infinity);

  return (
    <Box>
      <Title2 mb={6}>Properties</Title2>
      <Box overflowX="visible" pos="relative">
        {properties === null ? (
          <Center w="100%" h={16}>
            <Spinner />
          </Center>
        ) : properties.length === 0 ? (
          <Center my={4}>
            <Text textStyle="Body1">You have no properties</Text>
          </Center>
        ) : (
          <Fragment>
            <Flex
              overflowX="scroll"
              overflowY="auto"
              width="calc(100% + 2rem)"
              paddingBottom={3}
              sx={iosForcedScrollX}
              onScroll={({
                currentTarget: { scrollLeft, scrollWidth, offsetWidth },
              }: SyntheticEvent<HTMLDivElement>) => {
                setTableLeftScrollDist(scrollLeft);
                setTableRightScrollDist(scrollWidth - offsetWidth - scrollLeft);
              }}
            >
              <Box
                left={0}
                pos="sticky"
                w={propertyColWidth}
                backgroundColor={themeBackgroundColor}
                zIndex={1}
              >
                <VStack layerStyle="muiCardColor" spacing={rowSpacing}>
                  <Flex w={propertyColWidth} h={8} alignItems="center">
                    <Overline>Property</Overline>
                  </Flex>
                  {visibleProperties.map((property: PortfolioDashboardPropertyT, idx) => (
                    <ChakraLink key={idx} as={BrowserLink} to={propertyDetailUrl(property)}>
                      <Center w={propertyColWidth} h={propertyRowHeight}>
                        <Image
                          src={property.iconUrl || PlaceholderIcon}
                          alt="property_img"
                          borderRadius="md"
                          fallback={<Spinner />}
                        />
                      </Center>
                    </ChakraLink>
                  ))}
                  {properties.length > SHOW_FEWER_COUNT && (
                    <Button
                      my={4}
                      onClick={handleClick}
                      variant="link"
                      colorScheme="primary"
                      alignSelf="start"
                    >
                      {showAll ? (
                        <Fragment>
                          <Icon as={FiChevronUp} />
                          &nbsp;See fewer properties
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Icon as={FiChevronDown} />
                          &nbsp;See all {properties.length} properties
                        </Fragment>
                      )}
                    </Button>
                  )}
                </VStack>
              </Box>

              <VStack align="stretch" zIndex={0} spacing={rowSpacing} paddingRight="3rem">
                <Flex h={8} alignItems="center">
                  <Overline w="10rem" px={3}>
                    Address
                  </Overline>
                  <Overline w="6rem" textAlign="right">
                    Contrib.
                  </Overline>

                  {/* <Overline w="6rem" textAlign="right"> */}
                  {/*  Investment Entity */}
                  {/* </Overline> */}

                  <Overline w="6rem" textAlign="right">
                    Rental Distrib.
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Special Distrib.
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Total Distrib.
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Return (%)
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    # Months
                  </Overline>
                </Flex>
                {visibleProperties.map((property: PortfolioDashboardPropertyT, idx) => (
                  <LinkBox
                    w="100%"
                    display="flex"
                    key={idx}
                    h={propertyRowHeight}
                    alignItems="center"
                  >
                    <Text fontWeight="600" w="10rem" px={3} isTruncated>
                      <LinkOverlay as={BrowserLink} to={propertyDetailUrl(property)}>
                        {property.address.line1}
                      </LinkOverlay>
                    </Text>

                    <Text w="6rem" textAlign="right">
                      {property.currentEquity
                        ? '$' + formatFinancial(property.currentEquity)
                        : 'N/A'}
                    </Text>

                    {/* <Text w="6rem" textAlign="right"> */}
                    {/*  {property.legalEntityName} */}
                    {/* </Text> */}

                    <Text w="6rem" textAlign="right">
                      ${formatFinancial(property.sumDistributionRental)}
                    </Text>

                    <Text w="6rem" textAlign="right">
                      ${formatFinancial(property.sumDistributionSpecial)}
                    </Text>

                    <Text w="6rem" textAlign="right">
                      ${formatFinancial(property.sumDistributionTotal)}
                    </Text>

                    <Text w="6rem" textAlign="right">
                      {property.currentEquity
                        ? (
                            (property.sumDistributionTotal / property.currentEquity) *
                            100
                          ).toFixed() + '%'
                        : 'N/A'}
                    </Text>

                    <Text w="6rem" textAlign="right">
                      {property.months !== null ? property.months : 'N/A'}
                    </Text>
                  </LinkBox>
                ))}
                3
              </VStack>
            </Flex>
            <FadeOutGradient
              tableLeftScrollDist={tableLeftScrollDist}
              tableRightScrollDist={tableRightScrollDist}
            />
          </Fragment>
        )}
      </Box>
    </Box>
  );
};

// Apply fade-out gradient on right hand side of table (to imply more content)
const FadeOutGradient = ({
  tableLeftScrollDist,
  tableRightScrollDist,
}: {
  tableLeftScrollDist: number;
  tableRightScrollDist: number;
}) => {
  const cardShown = useBreakpointValue({ base: false, md: true });
  // HACK: past card 'md' breakpoint, we lighten dark mode background color to match MUI card color
  const bg = useColorModeValue(lightBg, cardShown ? whiten(darkBg, 5)(theme) : darkBg) as string;

  const tableGrad =
    // Not really a linear gradient - transition faster to bg more quickly than straight-line, to have
    // a stronger fade-out effect
    `linear-gradient(to right, ` +
    `${transparentize(bg, 0)(theme)} 0%, ` +
    `${transparentize(bg, 0.45)(theme)} 25%, ` +
    `${transparentize(bg, 0.72)(theme)} 50%, ` +
    `${transparentize(bg, 1.0)(theme)} 100%)`;

  return (
    <Fragment>
      <Box
        // Hide gradient when table is scrolled far left
        opacity={Math.min(tableLeftScrollDist / 32, 1)}
        pos="absolute"
        w={{ base: '2rem', md: '3rem' }}
        h="calc(100% - 1rem)"
        left="4rem"
        top="0"
        background={tableGrad}
        transform="rotate(180deg)"
      />
      <Box
        // Hide gradient when table is scrolled far right
        opacity={Math.min(tableRightScrollDist / 32, 1)}
        pos="absolute"
        w={{ base: '3rem', md: '4.5rem' }}
        h="calc(100% - 1rem)"
        /*
      HACK:
        match breakpoint and width of Container to place 'fade out' gradient
        on RHS of table
      */
        left={{ base: `calc(${window.innerWidth}px - 4.5rem)`, md: `calc(${theme.breakpoints.sm} - 6rem)` }}
        top="0"
        background={tableGrad}
      />
    </Fragment>
  );
};

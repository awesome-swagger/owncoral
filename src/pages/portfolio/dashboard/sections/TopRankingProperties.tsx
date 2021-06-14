import { Fragment } from 'react';
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
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import * as R from 'remeda';

import Placeholder1 from '../../../../assets/low-poly/placeholder-01.png';
import Placeholder2 from '../../../../assets/low-poly/placeholder-02-poly.png';
import { Overline, Subhead, Title3 } from '../../../../components/text';
import { formatFinancial } from '../../../../lib/financialFormatter';
import { addressToUrlFragment } from '../../lib';

const SHOW_FEWER_COUNT = 5;

const PLACEHOLDERS = [Placeholder1, Placeholder2];

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
    '-webkit-appearance': 'none',
    width: '7px',
    height: '7px',
  },

  '::-webkit-scrollbar-thumb': {
    'border-radius': '100vh',
    'background-color': 'rgba(0, 0, 0, .5)',
    'box-shadow': '0 0 1px rgba(255, 255, 255, .5)',
  },

  '::-webkit-scrollbar-corner': {
    'background-color': 'inherit',
  },
};

type TopRankingPropertiesPropsT = {
  properties: PortfolioDashboardPropertyT[] | null;
  handleClick: () => void;
  showAll: boolean;
  portfolioRootUrl: string;
};
export const TopRankingProperties = ({
  properties,
  handleClick,
  showAll,
  portfolioRootUrl,
}: TopRankingPropertiesPropsT) => {
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
  const themeBackgroundColor = useColorModeValue('white', 'gray.800');

  // Shared sizing constraints between property columns
  const rowSpacing = 6;
  const propertyColWidth = 16;
  const propertyRowHeight = 12;

  return (
    <Box>
      <Title3 mb={3}>Top-Ranking Properties</Title3>
      <Box overflowX="auto">
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
              paddingBottom={3}
              paddingRight={3}
              sx={iosForcedScrollX}
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
                          src={property.iconUrl || Placeholder2}
                          alt="property_img"
                          borderRadius="md"
                          fallback={<Spinner />}
                        />
                      </Center>
                    </ChakraLink>
                  ))}
                </VStack>
              </Box>

              <VStack align="stretch" zIndex={0} spacing={rowSpacing}>
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
              </VStack>
            </Flex>
            {properties.length > SHOW_FEWER_COUNT && (
              <Button my={4} onClick={handleClick} variant="link" colorScheme="primary">
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
          </Fragment>
        )}
      </Box>
    </Box>
  );
};

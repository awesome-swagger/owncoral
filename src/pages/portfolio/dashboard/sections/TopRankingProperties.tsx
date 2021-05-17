import { Fragment } from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import type { PortfolioDashboardPropertyT } from '../../../../shared-fullstack/types';
import {
  Box,
  Button,
  Center,
  Flex,
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
import { Overline, SubTitle1, SubTitle2 } from '../../../../components/text';
import { formatFinancial } from '../../../../lib/financialFormatter';
// TODO: remove
// import { RankingProperties } from '../../../../lib/rankingProperties';
import { addressToUrlFragment } from '../../lib';

const SHOW_FEWER_COUNT = 5;

const PLACEHOLDERS = [Placeholder1, Placeholder2];

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
  const visibleProperties =
    properties !== null
      ? R.sortBy(properties, (p: PortfolioDashboardPropertyT) => p.currentEquity || -1)
          .reverse()
          .slice(0, showAll ? properties.length : SHOW_FEWER_COUNT)
      : [];

  // HACK: match background color of body (theme.styles.global.body.bg)
  const themeBackgroundColor = useColorModeValue('white', 'gray.800');

  return (
    <Box>
      <SubTitle1 my="0.6em">Top-Ranking Properties</SubTitle1>
      <Box overflowX="auto">
        {properties === null ? (
          <Center w="100%" h={16}>
            <Spinner />
          </Center>
        ) : properties.length === 0 ? (
          <Center>
            <SubTitle2>You have no properties</SubTitle2>
          </Center>
        ) : (
          <Fragment>
            <Flex overflowX="auto">
              <Box left={0} pos="sticky" w={16} backgroundColor={themeBackgroundColor}>
                <VStack layerStyle="muiCardColor">
                  <Flex w={16} h={8} alignItems="center">
                    <Overline>Property</Overline>
                  </Flex>
                  {visibleProperties.map((property: PortfolioDashboardPropertyT, idx) => (
                    <ChakraLink
                      key={idx}
                      as={BrowserLink}
                      to={`${portfolioRootUrl}/investment?property=${addressToUrlFragment(
                        property.address,
                      )}&entity=${property.legalEntityId}`}
                    >
                      <Center w={16} h={12}>
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

              <VStack align="stretch" zIndex={-1}>
                <Flex h={8} alignItems="center">
                  <Overline w="10rem" px={3}>
                    Address
                  </Overline>
                  <Overline w="6rem" textAlign="right">
                    Contribution
                  </Overline>

                  {/* <Overline w="6rem" textAlign="right"> */}
                  {/*  Investment Entity */}
                  {/* </Overline> */}

                  <Overline w="6rem" textAlign="right">
                    Rental Distribution
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Special Distribution
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Total Distribution
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Return (%)
                  </Overline>

                  <Overline w="6rem" textAlign="right">
                    Months
                  </Overline>
                </Flex>

                {visibleProperties.map((property: PortfolioDashboardPropertyT, idx) => (
                  <LinkBox key={idx}>
                    <Flex h={12} alignItems="center">
                      <Text w="10rem" px={3} isTruncated>
                        <LinkOverlay
                          as={BrowserLink}
                          to={`${portfolioRootUrl}/investment?property=${addressToUrlFragment(
                            property.address,
                          )}&entity=${property.legalEntityId}`}
                        >
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
                    </Flex>
                  </LinkBox>
                ))}
              </VStack>
            </Flex>
            {properties.length > SHOW_FEWER_COUNT && (
              <Center mb={1}>
                <VStack>
                  <Box m={0} h={4}>
                    {!showAll && <Text textStyle="subTitle1">⋯</Text>}
                  </Box>
                  <Button onClick={handleClick} variant="outline" colorScheme="secondary">
                    {showAll ? `See fewer` : `See all (${properties.length})`}
                  </Button>
                </VStack>
              </Center>
            )}
          </Fragment>
        )}
      </Box>
    </Box>
  );
};

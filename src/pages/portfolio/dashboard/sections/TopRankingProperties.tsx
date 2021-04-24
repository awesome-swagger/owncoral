import { Fragment } from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import type { PortfolioDashboardPropertyT } from '../../../../shared-fullstack/types';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import * as R from 'remeda';

import PlaceholderPoly2 from '../../../../assets/low-poly/2-Hingham.png';
import PlaceholderPoly1 from '../../../../assets/low-poly/3-Linden.png';
import PlaceholderPoly3 from '../../../../assets/low-poly/378-Washington-R02.jpeg';
import PlaceholderPoly4 from '../../../../assets/low-poly/low-poly-1-still-sm.png';
import PlaceholderImg from '../../../../assets/Multifamily_Night.png';
import { SubTitle1, SubTitle2 } from '../../../../components/text';
import { formatFinancial } from '../../../../lib/financialFormatter';
// TODO: remove
import { RankingProperties } from '../../../../lib/rankingProperties';
import { addressToUrlFragment } from '../../lib';

const SHOW_FEWER_COUNT = 5;

const PLACEHOLDER_POLYS = [PlaceholderPoly1, PlaceholderPoly2, PlaceholderPoly3, PlaceholderPoly4];

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
  return (
    <Box>
      <SubTitle1 my="0.6em">Top-Ranking Properties</SubTitle1>
      <Box>
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
            <Flex>
              <Heading fontSize="xs" fontWeight="bold" w={16} />
              <Heading fontSize="xs" fontWeight="bold" w="calc(50% - 4rem)" px={3}>
                Address
              </Heading>
              <Heading textAlign="right" fontSize="xs" fontWeight="bold" w="25%">
                City
              </Heading>
              <Heading textAlign="right" fontSize="xs" fontWeight="bold" w="25%">
                Contribution
              </Heading>
            </Flex>
            <VStack align="stretch">
              {R.sortBy(properties, (p: PortfolioDashboardPropertyT) => p.totalContribution || -1)
                .reverse()
                .slice(0, showAll ? properties.length : SHOW_FEWER_COUNT)
                .map((property: PortfolioDashboardPropertyT, idx) => (
                  <LinkBox key={idx}>
                    <Flex alignItems="center" mt={2}>
                      <Image
                        w={16}
                        src={PLACEHOLDER_POLYS[idx % 4]}
                        alt="property_img"
                        borderRadius="md"
                      />
                      <Text w="calc(50% - 4rem)" px={3} isTruncated>
                        <LinkOverlay
                          as={BrowserLink}
                          to={`${portfolioRootUrl}/investment?property=${addressToUrlFragment(
                            property.address,
                          )}&entity=${property.legalEntityId}`}
                        >
                          {property.address.line1}
                        </LinkOverlay>
                      </Text>

                      <Text textAlign="right" w="25%">
                        {property.address.cityLocality}
                      </Text>
                      <Text textAlign="right" w="25%">
                        {property.totalContribution
                          ? '$' + formatFinancial(property.totalContribution)
                          : 'N/A'}
                      </Text>
                    </Flex>
                  </LinkBox>
                ))}
            </VStack>
            {properties.length > SHOW_FEWER_COUNT && (
              <Center>
                <VStack>
                  <Box m={0} h={4}>
                    {!showAll && <Text textStyle="subTitle1">⋯</Text>}
                  </Box>
                  <Button onClick={handleClick} variant="outline">
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

import { FaRegBuilding } from 'react-icons/fa';
import { FiSquare, FiUsers } from 'react-icons/fi';
import { GiStairs } from 'react-icons/gi';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { Card } from '../../../../../../components';
import { H6, SubTitle1, SubTitle2 } from '../../../../../../components/text';
import { formatFinancial } from '../../../../../../lib/financialFormatter';
import { DummyData } from '../../../../../../lib/portfolioData';

type PropertyDetailPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const PropertyDetail = ({ propertyDetail }: PropertyDetailPropsT) => {
  const dummyData = DummyData;

  return (
    <Box>
      <H6>Property details</H6>
      {propertyDetail.numStories !== null && (
        <Flex mb={2} minH={10}>
          <Box mr={4}>
            <Icon as={GiStairs} />
          </Box>
          <Box>
            <SubTitle1>
              {propertyDetail.numStories ? propertyDetail.numStories + ' stories' : 'single story'}
            </SubTitle1>
          </Box>
        </Flex>
      )}
      {propertyDetail.numUnits !== null && (
        <Flex mb={2} minH={10}>
          <Box mr={4}>
            <Icon as={FaRegBuilding} />
          </Box>
          <Box>
            <SubTitle1>
              {propertyDetail.numUnits} apartment unit{propertyDetail.numUnits > 1 && 's'}
            </SubTitle1>
            {propertyDetail.numBeds !== null && propertyDetail.numBaths !== null && (
              <SubTitle2>
                {propertyDetail.numBeds} bed{propertyDetail.numBeds > 1 && 's'} •{' '}
                {propertyDetail.numBaths} bath{propertyDetail.numBaths > 1 && 's'}
              </SubTitle2>
            )}
          </Box>
        </Flex>
      )}
      <Flex mb={2} minH={10}>
        <Box mr={4}>
          <Icon as={FiSquare} />
        </Box>
        <Box>
          <SubTitle1>
            {propertyDetail.areaLiving} {propertyDetail.areaUnits} of living space
          </SubTitle1>
          <Text>
            {propertyDetail.areaLotSize} {propertyDetail.areaUnits} lot size
          </Text>
        </Box>
      </Flex>
      <Flex mb={2} minH={10}>
        <Box mr={4}>
          <Icon as={FiUsers} />
        </Box>
        <Box>
          <SubTitle1>{dummyData.status}</SubTitle1>
          <SubTitle2>{dummyData.builtDate}</SubTitle2>
        </Box>
      </Flex>
      <Flex overflow="auto">
        <Card
          title="Purchase Price"
          value={
            propertyDetail.mdlPurchasePrice
              ? formatFinancial(propertyDetail.mdlPurchasePrice)
              : 'N/A'
          }
          description=""
        />
        <Card
          title="Price / Unit"
          value={
            propertyDetail.mdlPurchasePrice && propertyDetail.numUnits
              ? formatFinancial(propertyDetail.mdlPurchasePrice / propertyDetail.numUnits)
              : 'N/A'
          }
          description=""
        />
      </Flex>
    </Box>
  );
};

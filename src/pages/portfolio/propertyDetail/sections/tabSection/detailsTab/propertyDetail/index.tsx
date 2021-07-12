import { FaRegBuilding } from 'react-icons/fa';
import { FiSquare, FiUsers } from 'react-icons/fi';
import { GiStairs } from 'react-icons/gi';
import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { Card } from '../../../../../../../components';
import { Headline, Subhead, Title2 } from '../../../../../../../components/text';
import { formatFinancial } from '../../../../../../../lib/financialFormatter';

type PropertyDetailPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const PropertyDetail = ({ propertyDetail }: PropertyDetailPropsT) => {
  return (
    <Box>
      <Title2 my={6}>Property details</Title2>
      {propertyDetail.numStories !== null && (
        <Flex mb={6}>
          <Box mr={4}>
            <Icon as={GiStairs} verticalAlign="text-top" />
          </Box>
          <Box>
            <Headline>
              {propertyDetail.numStories ? propertyDetail.numStories + ' stories' : 'single story'}
            </Headline>
          </Box>
        </Flex>
      )}
      {propertyDetail.numUnits !== null && (
        <Flex mb={6} minH={10}>
          <Box mr={4}>
            <Icon as={FaRegBuilding} verticalAlign="text-top" />
          </Box>
          <Box>
            <Headline>
              {propertyDetail.numUnits} apartment unit{propertyDetail.numUnits > 1 && 's'}
            </Headline>
            {propertyDetail.numBeds !== null && propertyDetail.numBaths !== null && (
              <Subhead>
                {propertyDetail.numBeds} bed{propertyDetail.numBeds > 1 && 's'} •{' '}
                {propertyDetail.numBaths} bath{propertyDetail.numBaths > 1 && 's'}
              </Subhead>
            )}
          </Box>
        </Flex>
      )}
      <Flex mb={6} minH={10}>
        <Box mr={4}>
          <Icon as={FiSquare} verticalAlign="text-top" />
        </Box>
        <Box>
          {propertyDetail.areaLiving !== null && (
            <Headline>
              {propertyDetail.areaLiving.toLocaleString()} {propertyDetail.areaUnits}
            </Headline>
          )}
          {propertyDetail.areaLotSize !== null && (
            <Text>
              {propertyDetail.areaLotSize.toLocaleString()} {propertyDetail.areaUnits} lot size
            </Text>
          )}
        </Box>
      </Flex>
      {/* <Flex mb={2} minH={10}> */}
      {/*  <Box mr={4}> */}
      {/*    <Icon as={FiUsers} /> */}
      {/*  </Box> */}
      {/*  <Box> */}
      {/*    <Headline>{dummyData.status}</Headline> */}
      {/*    <Subhead>{dummyData.builtDate}</Subhead> */}
      {/*  </Box> */}
      {/* </Flex> */}
      <Flex overflow="auto">
        <Card
          title="Purchase Price"
          value={
            propertyDetail.mdlPurchasePrice
              ? '$' + formatFinancial(propertyDetail.mdlPurchasePrice)
              : 'N/A'
          }
          description=""
        />
        {propertyDetail.mdlPurchasePrice &&
          propertyDetail.areaUnits &&
          propertyDetail.areaLiving && (
            <Card
              title={`Price / ${propertyDetail.areaUnits}`}
              value={
                '$' + formatFinancial(propertyDetail.mdlPurchasePrice / propertyDetail.areaLiving)
              }
              description=""
            />
          )}
      </Flex>
    </Box>
  );
};

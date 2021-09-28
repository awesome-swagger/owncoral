import { Fragment } from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { FiSquare, FiUsers } from 'react-icons/fi';
import { GiStairs } from 'react-icons/gi';
import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import { Box, Flex, HStack, Icon } from '@chakra-ui/react';

import { Card } from '../../../../components';
import { Headline, Subhead, Title2 } from '../../../../components/text';
import { formatFinancial, formatFinancialSI } from '../../../../lib/financialFormatter';

type listingsDetailPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const PropertyDetail = ({ listingsDetail }: listingsDetailPropsT) => {
  return (
    <Fragment>
      <Title2 my={6}>Property details</Title2>
      {listingsDetail.numStories !== null && (
        <Flex mb={6}>
          <Box mr={4}>
            <Icon as={GiStairs} verticalAlign="text-top" />
          </Box>
          <Box>
            <Headline>
              {listingsDetail.numStories ? listingsDetail.numStories + ' stories' : 'single story'}
            </Headline>
          </Box>
        </Flex>
      )}
      {listingsDetail.numUnits !== null && (
        <Flex mb={6} minH={10}>
          <Box mr={4}>
            <Icon as={FaRegBuilding} verticalAlign="text-top" />
          </Box>
          <Box>
            <Headline>
              {listingsDetail.numUnits} apartment unit{listingsDetail.numUnits > 1 && 's'}
            </Headline>
            {listingsDetail.numBeds !== null && listingsDetail.numBaths !== null && (
              <Subhead>
                {listingsDetail.numBeds} bed{listingsDetail.numBeds > 1 && 's'} •{' '}
                {listingsDetail.numBaths} bath{listingsDetail.numBaths > 1 && 's'}
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
          {listingsDetail.areaLiving !== null && (
            <Headline>
              {listingsDetail.areaLiving.toLocaleString()} {listingsDetail.areaUnits}
            </Headline>
          )}
          {listingsDetail.areaLotSize !== null && (
            <Subhead>
              {listingsDetail.areaLotSize.toLocaleString()} {listingsDetail.areaUnits} lot size
            </Subhead>
          )}
        </Box>
      </Flex>
      <HStack spacing={3} alignItems="stretch">
        <Card
          title="Purchase Price"
          value={
            listingsDetail.mdlPurchasePrice
              ? '$' + formatFinancial(listingsDetail.mdlPurchasePrice)
              : 'N/A'
          }
          description=""
        />
        {listingsDetail.mdlPurchasePrice && listingsDetail.areaUnits && listingsDetail.numBeds && (
          <Card
            title="Price / bedroom"
            value={
              '$' + formatFinancialSI(listingsDetail.mdlPurchasePrice / listingsDetail.numBeds)
            }
            description=""
          />
        )}
      </HStack>
    </Fragment>
  );
};

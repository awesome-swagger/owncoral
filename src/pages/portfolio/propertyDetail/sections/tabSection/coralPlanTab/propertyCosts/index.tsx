/* eslint-disable complexity */
// TODO: refactor render function
import type React from 'react';
import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

import { Title2 } from '../../../../../../../components/text';
import { formatFinancial } from '../../../../../../../lib/financialFormatter';

type PropertyCostsPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const PropertyCosts = ({ propertyDetail }: PropertyCostsPropsT) => {
  const totalCapitalCost =
    propertyDetail.mdlPurchasePrice !== null && propertyDetail.mdlClosingCost !== null
      ? formatFinancial(
          propertyDetail.mdlPurchasePrice +
            propertyDetail.mdlClosingCost +
            (propertyDetail?.mdlOriginationFee || 0) +
            (propertyDetail?.mdlCapexReserve || 0) +
            (propertyDetail?.mdlBrokerFee || 0) +
            (propertyDetail?.mdlPrincipalReserve || 0) +
            (propertyDetail?.mdlRenovation || 0),
        )
      : 'N/A';

  return (
    <Box>
      <Title2 my={6}>Property costs</Title2>
      <VStack align="stretch">
        <Flex justifyContent="space-between">
          <Text>Purchase price</Text>
          <Text>
            {propertyDetail.mdlPurchasePrice !== null
              ? '$' + formatFinancial(propertyDetail.mdlPurchasePrice)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Closing costs</Text>
          <Text>
            {propertyDetail.mdlClosingCost !== null && propertyDetail.mdlBrokerFee !== null
              ? '$' + formatFinancial(propertyDetail.mdlClosingCost + propertyDetail.mdlBrokerFee)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Acquisition fee</Text>
          <Text>
            {propertyDetail.mdlOriginationFee !== null
              ? '$' + formatFinancial(propertyDetail.mdlOriginationFee)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Principal Reserve</Text>
          <Text>
            {propertyDetail.mdlPrincipalReserve !== null
              ? '$' + formatFinancial(propertyDetail.mdlPrincipalReserve)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Total capex</Text>
          <Text>
            {propertyDetail.mdlCapexReserve !== null && propertyDetail.mdlRenovation !== null
              ? '$' + formatFinancial(propertyDetail.mdlCapexReserve + propertyDetail.mdlRenovation)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" fontWeight={600}>
          <Text>Total property cost</Text>
          <Text>${totalCapitalCost}</Text>
        </Flex>
      </VStack>
      {/* <Box h={4} /> */}
      {/* <Button colorScheme="secondary" variant="outline" w="100%"> */}
      {/*  Learn more about Capital Cost */}
      {/* </Button> */}
    </Box>
  );
};

/* eslint-disable complexity */
// TODO: refactor render function
import React from 'react';
import type { ListingsPropertyDetailT } from '../../../../../shared-fullstack/types';
import { PropertyStatus } from '../../../../../shared-fullstack/validators';
import type { IconProps } from '@chakra-ui/react';
import {
  Box,
  Circle,
  Divider,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { Caption1, Title2 } from '../../../../../components/text';
import { formatFinancial } from '../../../../../lib/financialFormatter';

type FinancingPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const Financing = ({ listingsDetail }: FinancingPropsT) => {
  const totalCapitalCost =
    listingsDetail.mdlPurchasePrice !== null && listingsDetail.mdlClosingCost !== null
      ? formatFinancial(
          listingsDetail.mdlPurchasePrice +
            listingsDetail.mdlClosingCost +
            (listingsDetail?.mdlOriginationFee || 0) +
            (listingsDetail?.mdlCapexReserve || 0) +
            (listingsDetail?.mdlBrokerFee || 0) +
            (listingsDetail?.mdlPrincipalReserve || 0) +
            (listingsDetail?.mdlRenovation || 0),
        )
      : 'N/A';

  // Equity percentage for graphing leverage
  const equityPct: number | null =
    listingsDetail.mdlEquity !== null && listingsDetail.mdlMortgage !== null
      ? listingsDetail.mdlEquity / (listingsDetail.mdlEquity + listingsDetail.mdlMortgage)
      : null;

  const eqColor = useColorModeValue('green.900', 'green.700');
  const debtColor = useColorModeValue('green.300', 'green.200');

  return (
    <Box>
      <Title2 my={6}>Total property costs*</Title2>
      <VStack align="stretch">
        <Flex justifyContent="space-between">
          <Text>Purchase price</Text>
          <Text>
            {listingsDetail.mdlPurchasePrice !== null
              ? '$' + formatFinancial(listingsDetail.mdlPurchasePrice)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Property upgrades and closing</Text>
          <Text>
            {listingsDetail.mdlClosingCost !== null && listingsDetail.mdlRenovation !== null
              ? '$' +
                formatFinancial(
                  listingsDetail.mdlClosingCost +
                    listingsDetail.mdlRenovation +
                    (listingsDetail?.mdlBrokerFee || 0),
                )
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Acquisition fee</Text>
          <Text>
            {listingsDetail.mdlOriginationFee !== null
              ? '$' + formatFinancial(listingsDetail.mdlOriginationFee)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Principal reserve</Text>
          <Text>
            {listingsDetail.mdlPrincipalReserve !== null
              ? '$' + formatFinancial(listingsDetail.mdlPrincipalReserve)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Capex&nbsp;reserve</Text>
          <Text>
            {listingsDetail.mdlCapexReserve !== null
              ? '$' + formatFinancial(listingsDetail.mdlCapexReserve)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" fontWeight={600}>
          <Text>Total property costs</Text>
          <Text>${totalCapitalCost}</Text>
        </Flex>
      </VStack>
      <Caption1 color="gray" mt={4}>
        {listingsDetail.status === PropertyStatus.enum.CLOSED
          ? '* Coral estimates. See financial statements for actuals to-date.'
          : '* Coral estimates, subject to change.'}
      </Caption1>

      {listingsDetail.mdlEquity !== null && listingsDetail.mdlMortgage !== null && equityPct && (
        <React.Fragment>
          <Divider my={6} />
          <Title2 my={6}>Financing</Title2>

          <Flex my={6} borderRadius="full" overflow="hidden" h={3} justifyContent="space-between">
            <Box bg={eqColor} w={equityPct} />
            <Box bg={debtColor} w={1 - equityPct} />
          </Flex>

          <VStack spacing={2} justifyContent="stretch">
            <Flex w="100%" align="center">
              <Circle size={2} mr={2} bg={eqColor} />
              <Box flexGrow={1}>Initial equity</Box>
              <Box align="right" w="4rem">
                {(equityPct * 100).toFixed(1)}%
              </Box>
              <Box align="right" minW={24}>
                ${formatFinancial(listingsDetail.mdlEquity)}
              </Box>
            </Flex>

            <Flex w="100%" align="center">
              <Circle size={2} mr={2} bg={debtColor} />
              <Box flexGrow={1}>Initial loan*</Box>
              <Box align="right" w="4rem">
                {((1 - equityPct) * 100).toFixed(1)}%
              </Box>
              <Box align="right" minW={24}>
                ${formatFinancial(listingsDetail.mdlMortgage)}
              </Box>
            </Flex>

            <Flex fontWeight={600} w="100%">
              <Box w={3} mr={2} />
              <Box flexGrow={1}>Total financing</Box>
              <Box align="right" w="4rem">
                100.0%
              </Box>
              <Box align="right" minW={24}>
                ${formatFinancial(listingsDetail.mdlMortgage + listingsDetail.mdlEquity)}
              </Box>
            </Flex>
            <Caption1 color="gray" mt={4} w="100%">
              * Coral estimates, subject to change
            </Caption1>
          </VStack>
        </React.Fragment>
      )}
      {/* <FlexLightBorder */}
      {/*  justifyContent="space-between" */}
      {/*  alignItems="center" */}
      {/*  px={4} */}
      {/*  py={2} */}
      {/*  my={4} */}
      {/*  border="1px" */}
      {/* > */}
      {/*  <Box> */}
      {/*    <Headline>Why Coral participates in equity?</Headline> */}
      {/*    <Text>Crash course</Text> */}
      {/*  </Box> */}
      {/*  <Box> */}
      {/*    <Icon w={6} h={6} as={BsQuestionCircle} /> */}
      {/*  </Box> */}
      {/* </FlexLightBorder> */}
      {/* <Box h={4} /> */}
      {/* <Button colorScheme="secondary" variant="outline" w="100%"> */}
      {/*  Learn more about financing */}
      {/* </Button> */}
    </Box>
  );
};

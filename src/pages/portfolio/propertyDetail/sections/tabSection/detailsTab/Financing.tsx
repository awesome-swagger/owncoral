import { Fragment } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Center, Divider, Flex, Icon, Text, VStack } from '@chakra-ui/react';

import { Headline, Title2 } from '../../../../../../components/text';
import { formatFinancial, formatFinancialSI } from '../../../../../../lib/financialFormatter';

type FinancingPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const Financing = ({ propertyDetail }: FinancingPropsT) => {
  const totalCapitalCost =
    propertyDetail.mdlPurchasePrice !== null && propertyDetail.mdlClosingCost !== null
      ? formatFinancial(
          propertyDetail.mdlPurchasePrice +
            propertyDetail.mdlClosingCost +
            (propertyDetail?.mdlOriginationFee || 0) +
            (propertyDetail?.mdlCapexReserve || 0) +
            (propertyDetail?.mdlRenovation || 0),
        )
      : 'N/A';

  // Equity percentage for graphing leverage
  const equityPct: number | null =
    propertyDetail.mdlEquity !== null && propertyDetail.mdlCurrentMortgage !== null
      ? propertyDetail.mdlEquity / (propertyDetail.mdlEquity + propertyDetail.mdlCurrentMortgage)
      : null;
  return (
    <Box>
      <Box>
        <Title2 my={6}>Total capital costs</Title2>
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
              {propertyDetail.mdlClosingCost !== null
                ? '$' + formatFinancial(propertyDetail.mdlClosingCost)
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
            <Text>Total capex</Text>
            <Text>
              {propertyDetail.mdlCapexReserve !== null && propertyDetail.mdlRenovation !== null
                ? '$' +
                  formatFinancial(propertyDetail.mdlCapexReserve + propertyDetail.mdlRenovation)
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
      <Divider my={6} />
      <Box>
        <Title2 my={6}>Financing</Title2>

        {propertyDetail.mdlEquity !== null &&
          propertyDetail.mdlCurrentMortgage !== null &&
          equityPct && (
            <Fragment>
              <Flex
                my={4}
                borderRadius="full"
                overflow="hidden"
                h={3}
                justifyContent="space-between"
              >
                <Box bg="green.900" w={equityPct} />
                <Box bg="green.300" w={1 - equityPct} />
              </Flex>

              <Flex>
                <Box flexGrow={1}>Initial Equity</Box>
                <Box align="right" w="4rem">
                  {(equityPct * 100).toFixed(1)}%
                </Box>
                <Box align="right" w="4rem">
                  ${formatFinancialSI(propertyDetail.mdlEquity)}
                </Box>
              </Flex>
              <Flex>
                <Box flexGrow={1}>Outstanding Loan Balance</Box>
                <Box align="right" w="4rem">
                  {((1 - equityPct) * 100).toFixed(1)}%
                </Box>
                <Box align="right" w="4rem">
                  ${formatFinancialSI(propertyDetail.mdlCurrentMortgage)}
                </Box>
              </Flex>
            </Fragment>
          )}
        {/* <Flex */}
        {/*  justifyContent="space-between" */}
        {/*  alignItems="center" */}
        {/*  px={4} */}
        {/*  py={2} */}
        {/*  my={4} */}
        {/*  border="1px" */}
        {/*  layerStyle="lightBorder" */}
        {/* > */}
        {/*  <Box> */}
        {/*    <Headline>Why Coral participates in equity?</Headline> */}
        {/*    <Text>Crash course</Text> */}
        {/*  </Box> */}
        {/*  <Box> */}
        {/*    <Icon w={6} h={6} as={BsQuestionCircle} /> */}
        {/*  </Box> */}
        {/* </Flex> */}
        {/* <Box h={4} /> */}
        {/* <Button colorScheme="secondary" variant="outline" w="100%"> */}
        {/*  Learn more about financing */}
        {/* </Button> */}
      </Box>
    </Box>
  );
};

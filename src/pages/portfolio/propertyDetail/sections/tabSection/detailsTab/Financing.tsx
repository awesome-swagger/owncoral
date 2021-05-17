import { Fragment } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Center, Divider, Flex, Icon, Text, VStack } from '@chakra-ui/react';

import { H6, SubTitle1 } from '../../../../../../components/text';
import { formatFinancial } from '../../../../../../lib/financialFormatter';

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
            (propertyDetail?.mdlCapexReserve || 0),
        )
      : 'N/A';

  // Equity percentage for graphing leverage
  const equityPct: number | null =
    propertyDetail.mdlEquity !== null && propertyDetail.mdlMortgage !== null
      ? propertyDetail.mdlEquity / (propertyDetail.mdlEquity + propertyDetail.mdlMortgage)
      : null;
  return (
    <Box>
      <Box>
        <SubTitle1 my="0.6em">Total capital costs</SubTitle1>
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
            <Text>Acquisition Fee</Text>
            <Text>
              {propertyDetail.mdlOriginationFee !== null
                ? '$' + formatFinancial(propertyDetail.mdlOriginationFee)
                : 'N/A'}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Total Capex</Text>
            <Text>
              {propertyDetail.mdlCapexReserve !== null && propertyDetail.mdlRenovation !== null
                ? '$' +
                  formatFinancial(propertyDetail.mdlCapexReserve + propertyDetail.mdlRenovation)
                : 'N/A'}
            </Text>
          </Flex>
          <Divider />
          <Flex justifyContent="space-between">
            <Text>Total capital cost</Text>
            <Text>${totalCapitalCost}</Text>
          </Flex>
        </VStack>
        {/* <Box h={4} /> */}
        {/* <Button colorScheme="secondary" variant="outline" w="100%"> */}
        {/*  Learn more about Capital Cost */}
        {/* </Button> */}
      </Box>
      <Divider my={8} />
      <Box>
        <H6>Financing</H6>

        {propertyDetail.mdlEquity !== null && propertyDetail.mdlMortgage !== null && equityPct && (
          <Fragment>
            <Flex my={4} borderRadius="base" overflow="hidden" h={8} justifyContent="space-between">
              <Box bg="gray.900" w={equityPct} />
              <Box bg="gray.700" w={1 - equityPct} />
            </Flex>

            <Center justifyContent="space-between" h={14} my={4}>
              <Box w={equityPct}>
                <SubTitle1>Equity</SubTitle1>
                <Text>${formatFinancial(propertyDetail.mdlEquity)}</Text>
              </Box>
              <Box h="100%" borderLeft="1px" px={4} w={1.0 - equityPct}>
                <SubTitle1>Loan</SubTitle1>
                <Text>${formatFinancial(propertyDetail.mdlMortgage)}</Text>
              </Box>
              {/* <Box pl={8}> */}
              {/*  <Icon w={6} h={6} as={BsQuestionCircle} /> */}
              {/* </Box> */}
            </Center>
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
        {/*    <SubTitle1>Why Coral participates in equity?</SubTitle1> */}
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

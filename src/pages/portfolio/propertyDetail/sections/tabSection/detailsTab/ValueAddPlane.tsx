
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react';

import { Headline,Title3 } from '../../../../../../components/text';
import { formatFinancial } from '../../../../../../lib/financialFormatter';
import { DummyData } from '../../../../../../lib/portfolioData';

type ValueAddPlanePropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const ValueAddPlane = ({ propertyDetail }: ValueAddPlanePropsT) => {
  const dummyData = DummyData;
  return (
    <Box>
      <Title3>Value-add plan</Title3>
      {/* TODO: Table? */}
      <VStack w="100%" align="stretch">
        <Flex justifyContent="space-between">
          <Text>Renovations</Text>
          <Text>
            {propertyDetail.mdlRenovation !== null
              ? '$' + formatFinancial(propertyDetail.mdlRenovation)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Capex Reserve</Text>
          <Text>
            {propertyDetail.mdlCapexReserve !== null
              ? '$' + formatFinancial(propertyDetail.mdlCapexReserve)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Headline>Total Capex</Headline>
          <Headline>
            {propertyDetail.mdlCapexReserve !== null && propertyDetail.mdlRenovation !== null
              ? '$' + formatFinancial(propertyDetail.mdlRenovation + propertyDetail.mdlCapexReserve)
              : 'N/A'}
          </Headline>
        </Flex>
      </VStack>
      {/* <Flex my={6}> */}
      {/*  {[1, 2].map((idx) => ( */}
      {/*    <Box mx={2} key={idx}> */}
      {/*      <Image src={dummyData.renovationImg} /> */}
      {/*      <Text textStyle="Caption1" textAlign="center"> */}
      {/*        {dummyData.updatePlan} */}
      {/*      </Text> */}
      {/*    </Box> */}
      {/*  ))} */}
      {/* </Flex> */}
      <Divider my={6} />
      <Title3>Rental income</Title3>
      <Box my={4}>
        <Flex justifyContent="space-between">
          <Text>Current</Text>
          <Text>${formatFinancial(propertyDetail.rentalIncomeMonthlyTarget || 0)}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Target</Text>
          <Text>${formatFinancial(propertyDetail.rentalIncomeMonthlyTarget || 0)}</Text>
        </Flex>
      </Box>

      {/* <Button variant="outline" colorScheme="secondary" w="100%"> */}
      {/*  Learn more about the rental income{' '} */}
      {/* </Button> */}
    </Box>
  );
};

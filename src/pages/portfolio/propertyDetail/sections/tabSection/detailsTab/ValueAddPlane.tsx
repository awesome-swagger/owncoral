import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react';

import { Headline, Title2 } from '../../../../../../components/text';
import { formatFinancial } from '../../../../../../lib/financialFormatter';

type ValueAddPlanePropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const ValueAddPlane = ({ propertyDetail }: ValueAddPlanePropsT) => {
  return (
    <Box>
      <Title2 mb={6}>Value-add plan</Title2>
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
      <Title2 my={6}>Rental income</Title2>

      <VStack w="100%" align="stretch" my={4}>
        <Flex justifyContent="space-between">
          <Text>Current</Text>
          <Text>
            {propertyDetail.rentalIncomeMonthlyCurrent !== null
              ? '$' + formatFinancial(propertyDetail.rentalIncomeMonthlyCurrent)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Target</Text>
          <Text>
            {propertyDetail.rentalIncomeMonthlyTarget !== null
              ? '$' + formatFinancial(propertyDetail.rentalIncomeMonthlyTarget)
              : 'N/A'}
          </Text>
        </Flex>
      </VStack>

      {/* <Button variant="outline" colorScheme="secondary" w="100%"> */}
      {/*  Learn more about the rental income{' '} */}
      {/* </Button> */}
    </Box>
  );
};

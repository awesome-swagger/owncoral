import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

import { Headline, Title2 } from '../../../../../../../components/text';
import { formatFinancial } from '../../../../../../../lib/financialFormatter';

type ValueAddPlanPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const ValueAddPlan = ({ propertyDetail }: ValueAddPlanPropsT) => (
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

    {/* <Button variant="outline" colorScheme="secondary" w="100%"> */}
    {/*  Learn more about the rental income{' '} */}
    {/* </Button> */}
  </Box>
);

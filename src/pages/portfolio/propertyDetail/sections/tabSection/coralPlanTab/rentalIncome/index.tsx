import { FiChevronRight } from 'react-icons/fi';
import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';

import { Title2 } from '../../../../../../../components/text';
import { formatFinancial } from '../../../../../../../lib/financialFormatter';

type ValueAddPlanPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const RentalIncome = ({ propertyDetail }: ValueAddPlanPropsT) => (
  <Box>
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
    {/* <Flex alignItems="center" cursor="pointer" mt={6}> */}
    {/*  <Icon as={FiChevronRight} mr={1} /> */}
    {/*  <Text>Learn more about our target rental income</Text> */}
    {/* </Flex> */}
  </Box>
);

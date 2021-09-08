import React from 'react';
import type { ListingsPropertyDetailT } from '../../../../../shared-fullstack/types';
import { Flex, Text, VStack, Box } from '@chakra-ui/react';
import { Title2 } from '../../../../../components/text';
import { formatFinancial } from '../../../../../lib/financialFormatter';

type RentalIncomePropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const RentalIncome = ({ listingsDetail }: RentalIncomePropsT) => {
  return (
    <Box>
      <Title2 mb={6}>Rental income</Title2>
      <VStack w="100%" align="stretch" my={4}>
        <Flex justifyContent="space-between">
          <Text>Target</Text>
          <Text>
            {listingsDetail.rentalIncomeMonthlyTarget !== null
              ? '$' + formatFinancial(listingsDetail.rentalIncomeMonthlyTarget)
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

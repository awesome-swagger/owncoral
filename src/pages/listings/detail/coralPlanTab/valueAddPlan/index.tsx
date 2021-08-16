import { Fragment } from 'react';
import type { ListingsPropertyDetailT } from '../../../../../shared-fullstack/types';
import { Flex, Text, VStack } from '@chakra-ui/react';

import { Headline, Title2 } from '../../../../../components/text';
import { formatFinancial } from '../../../../../lib/financialFormatter';

type ValueAddPlanePropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const ValueAddPlan = ({ listingsDetail }: ValueAddPlanePropsT) => {
  return (
    <Fragment>
      <Title2 mb={6}>Value-add plan</Title2>
      {/* TODO: Table? */}
      <VStack w="100%" align="stretch">
        <Flex justifyContent="space-between">
          <Text>Renovations</Text>
          <Text>
            {listingsDetail.mdlRenovation !== null
              ? '$' + formatFinancial(listingsDetail.mdlRenovation)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Capex Reserve</Text>
          <Text>
            {listingsDetail.mdlCapexReserve !== null
              ? '$' + formatFinancial(listingsDetail.mdlCapexReserve)
              : 'N/A'}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Headline>Total Capex</Headline>
          <Headline>
            {listingsDetail.mdlCapexReserve !== null && listingsDetail.mdlRenovation !== null
              ? '$' + formatFinancial(listingsDetail.mdlRenovation + listingsDetail.mdlCapexReserve)
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
    </Fragment>
  );
};

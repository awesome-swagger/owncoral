import { Fragment } from 'react';
import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import { Box, Divider, VStack } from '@chakra-ui/react';

import { Financing } from './financing';
import { Upgrades } from './upgrades';
import { RentalIncome } from './rentalIncome';
import { ValueAddPlan } from './valueAddPlan';

type CoralPlanTabPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
const CoralPlanTab = ({ listingsDetail }: CoralPlanTabPropsT) => {
  return (
    <Fragment>
      <VStack px={6} alignItems="normal" gridGap={6} spacing={0}>
        <Financing listingsDetail={listingsDetail} />
        <Divider />
      </VStack>
      <Upgrades listingsDetail={listingsDetail} />
      <VStack px={6} alignItems="normal" gridGap={6} spacing={0}>
        <Divider />
        <RentalIncome listingsDetail={listingsDetail} />
      </VStack>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default CoralPlanTab;

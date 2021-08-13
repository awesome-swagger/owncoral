import { Fragment } from 'react';
import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import { Divider, Box } from '@chakra-ui/react';

import { Financing } from '../coralPlanTab/Financing';
import { ValueAddPlan } from './ValueAddPlan';
import { Renovation } from './Renovation';
import { RentalIncome } from './RentalIncome';

type CoralPlanTabPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
const CoralPlanTab = ({ listingsDetail }: CoralPlanTabPropsT) => {
  return (
    <Fragment>
      <Box px={6}>
        <Financing listingsDetail={listingsDetail} />
        <Divider my={6} />
        <ValueAddPlan listingsDetail={listingsDetail} />
        <Divider my={6} />
      </Box>
      <Renovation listingsDetail={listingsDetail} />
      <Box px={6}>
        <Divider my={6} />
        <RentalIncome listingsDetail={listingsDetail} />
      </Box>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default CoralPlanTab;

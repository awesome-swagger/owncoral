import { Fragment } from 'react';
import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import { Divider, Box } from '@chakra-ui/react';

import { Financing } from './financing';
import { ValueAddPlan } from './valueAddPlan';
import { Renovation } from './renovation';
import { RentalIncome } from './rentalIncome';

type CoralPlanTabPropsT = {
  listingsDetail: ListingsPropertyDetailT;
  propertyId: string | null;
};
const CoralPlanTab = ({ listingsDetail, propertyId }: CoralPlanTabPropsT) => {
  return (
    <Fragment>
      <Box px={6}>
        <Financing listingsDetail={listingsDetail} />
        <Divider my={6} />
        <ValueAddPlan listingsDetail={listingsDetail} />
        <Divider my={6} />
      </Box>
      <Renovation propertyId={propertyId} />
      <Box px={6}>
        <Divider my={6} />
        <RentalIncome listingsDetail={listingsDetail} />
      </Box>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default CoralPlanTab;

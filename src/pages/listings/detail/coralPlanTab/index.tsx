import { Fragment } from 'react';
import type { ListingsPropertyDetailT } from '@app/shared-fullstack/types';
import { Divider } from '@chakra-ui/react';

import { Financing } from '../coralPlanTab/Financing';
import { ValueAddPlan } from './ValueAddPlan';

type CoralPlanTabPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
const CoralPlanTab = ({ listingsDetail }: CoralPlanTabPropsT) => {
  return (
    <Fragment>
      <Financing listingsDetail={listingsDetail} />
      <Divider my={6} />
      <ValueAddPlan listingsDetail={listingsDetail} />
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default CoralPlanTab;

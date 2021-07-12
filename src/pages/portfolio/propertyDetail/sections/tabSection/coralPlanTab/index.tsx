import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';
import { Financing } from './financing';
import { PropertyCosts } from './propertyCosts';
import { Renovation } from './renovation';
import { RentalIncome } from './rentalIncome';
import { ValueAddPlan } from './valueAddPlan';

type DetailsTabPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

const CoralPlanTab = ({ propertyDetail }: DetailsTabPropsT) => {
  return (
    <Box>
      <ValueAddPlan propertyDetail={propertyDetail} />
      <Renovation propertyDetail={propertyDetail} />
      <Divider my={6} />
      <RentalIncome propertyDetail={propertyDetail} />
      <Divider my={6} />
      <PropertyCosts propertyDetail={propertyDetail} />
      <Divider my={6} />
      <Financing propertyDetail={propertyDetail} />
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default CoralPlanTab;

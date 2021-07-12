import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';
import { ValueAddPlan } from './valueAddPlan';
import { Renovation } from './renovation';
import { RentalIncome } from './rentalIncome';
import { PropertyCosts } from './propertyCosts';
import { Financing } from './financing';

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

export default CoralPlanTab;

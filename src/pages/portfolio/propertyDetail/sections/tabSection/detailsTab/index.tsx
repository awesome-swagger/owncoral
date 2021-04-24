import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';

import { Financing } from './Financing';
import { PropertyDetail } from './PropertyDetail';
import { PropertyLocation } from './PropertyLocation';
import { ValueAddPlane } from './ValueAddPlane';

type DetailsTabPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const DetailsTab = ({ propertyDetail }: DetailsTabPropsT) => {
  return (
    <Box>
      <PropertyLocation propertyDetail={propertyDetail} />
      <Divider my={8} />
      <PropertyDetail propertyDetail={propertyDetail} />
      <Divider my={8} />
      <ValueAddPlane propertyDetail={propertyDetail} />
      <Divider my={8} />
      <Financing propertyDetail={propertyDetail} />
    </Box>
  );
};

import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';

import { Financing } from './Financing';
import { PropertyDetail } from './PropertyDetail';
import { PropertyLocation } from './PropertyLocation';
import { ValueAddPlane } from './ValueAddPlane';
import { Images } from './Images';

type DetailsTabPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const DetailsTab = ({ propertyDetail }: DetailsTabPropsT) => {
  return (
    <Box>
      <PropertyLocation propertyDetail={propertyDetail} />
      <Divider my={6} />
      <PropertyDetail propertyDetail={propertyDetail} />
      <Divider my={6} />
      <ValueAddPlane propertyDetail={propertyDetail} />
      <Divider my={6} />
      <Financing propertyDetail={propertyDetail} />
      <Divider my={6} />
      <Images propertyDetail={propertyDetail} />
    </Box>
  );
};

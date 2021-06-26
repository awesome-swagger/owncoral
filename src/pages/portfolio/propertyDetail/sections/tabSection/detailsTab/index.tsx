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
export const DetailsTab = ({ propertyDetail }: DetailsTabPropsT) => (
  <Box>
    <Images propertyDetail={propertyDetail} />
    <Divider my={6} />
    <PropertyLocation propertyDetail={propertyDetail} />
    <Divider my={6} />
    <PropertyDetail propertyDetail={propertyDetail} />
    <Divider my={6} />
    <ValueAddPlane propertyDetail={propertyDetail} />
    <Divider my={6} />
    <Financing propertyDetail={propertyDetail} />
  </Box>
);

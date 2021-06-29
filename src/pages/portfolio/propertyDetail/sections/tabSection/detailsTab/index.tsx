import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';

import { Financing } from './Financing';
import { Images } from './Images';
import { PropertyDetail } from './PropertyDetail';
import { PropertyLocation } from './PropertyLocation';
import { ValueAddPlane } from './ValueAddPlane';

type DetailsTabPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
const DetailsTab = ({ propertyDetail }: DetailsTabPropsT) => {
  return (
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
};

// eslint-disable-next-line import/no-default-export
export default DetailsTab;

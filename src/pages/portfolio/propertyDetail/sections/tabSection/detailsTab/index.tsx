import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';

import { Images } from './images';
import { PropertyDetail } from './propertyDetail';
import { PropertyLocation } from './propertyLocation';

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
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default DetailsTab;

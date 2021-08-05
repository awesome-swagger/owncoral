import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import { Box, Divider } from '@chakra-ui/react';

import { Images } from './Images';
import { PropertyDetail } from './PropertyDetail';
import { PropertyLocation } from './PropertyLocation';

type DetailsTabPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
const DetailsTab = ({ listingsDetail }: DetailsTabPropsT) => {
  return (
    <Box>
      <Images listingsDetail={listingsDetail} />
      <Divider my={6} />
      <PropertyLocation listingsDetail={listingsDetail} />
      <Divider my={6} />
      <PropertyDetail listingsDetail={listingsDetail} />
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default DetailsTab;

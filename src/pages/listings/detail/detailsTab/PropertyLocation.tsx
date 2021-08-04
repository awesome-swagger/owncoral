import { Fragment } from 'react';
import type { ListingsPropertyDetailT } from '@app/shared-fullstack/types';
import { Box, Text } from '@chakra-ui/react';

import { MapBox } from '../../../../components';
import { Title2 } from '../../../../components/text';

type PropertyLocationPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const PropertyLocation = ({ listingsDetail }: PropertyLocationPropsT) => {
  return (
    <Fragment>
      <Title2 mb={6}>Property location</Title2>
      <Box pos="relative">
        <MapBox address={listingsDetail.address} />
        <Box h={6} />
      </Box>
      {listingsDetail.description && <Text>{listingsDetail.description}</Text>}

      {/* <Button colorScheme="secondary" variant="outline" my={4} w="100%"> */}
      {/*  Learn more about location */}
      {/* </Button> */}
    </Fragment>
  );
};

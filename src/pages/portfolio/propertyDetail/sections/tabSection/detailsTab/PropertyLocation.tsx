import { FiMap } from 'react-icons/fi';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Center, Icon, Image, Text } from '@chakra-ui/react';

import { MapBox } from '../../../../../../components';
import { Title2 } from '../../../../../../components/text';
import { DummyData } from '../../../../../../lib/portfolioData';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const PropertyLocation = ({ propertyDetail }: PropertyLocationPropsT) => (
  <Box>
    <Title2 mb={6}>Location</Title2>
    <Box pos="relative">
      <MapBox address={propertyDetail.address} />
      <Box h={6} />
    </Box>
    {propertyDetail.description && <Text>{propertyDetail.description}</Text>}

    {/* <Button colorScheme="secondary" variant="outline" my={4} w="100%"> */}
    {/*  Learn more about location */}
    {/* </Button> */}
  </Box>
);

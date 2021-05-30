import { FiMap } from 'react-icons/fi';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Center, Icon, Image, Text } from '@chakra-ui/react';

import { MapBox } from '../../../../../../components';
import { Title3 } from '../../../../../../components/text';
import { DummyData } from '../../../../../../lib/portfolioData';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const PropertyLocation = ({ propertyDetail }: PropertyLocationPropsT) => {
  const dummyData = DummyData;
  return (
    <Box>
      <Title3>Property Location</Title3>
      <Box pos="relative">
        <MapBox address={propertyDetail.address} />
        <Box h={2} />
        <Center
          borderRadius="full"
          layerStyle="iconColor"
          pos="absolute"
          bottom={4}
          right={4}
          p={2}
          cursor="pointer"
        >
          <Icon h={4} w={4} as={FiMap} />
        </Center>
      </Box>
      <Text>{dummyData.propertyLocation}</Text>

      <Button colorScheme="secondary" variant="outline" my={4} w="100%">
        Learn more about location
      </Button>
    </Box>
  );
};

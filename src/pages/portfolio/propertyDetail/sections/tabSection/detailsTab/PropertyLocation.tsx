import { FiMap } from 'react-icons/fi';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Center, Icon, Image, Text } from '@chakra-ui/react';
import { H6 } from '../../../../../../components/text';
import { DummyData } from '../../../../../../lib/portfolioData';
import { MapBox } from '../../../../../../components';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const PropertyLocation = ({ propertyDetail }: PropertyLocationPropsT) => {
  const dummyData = DummyData;
  console.log(propertyDetail);
  return (
    <Box>
      <H6>Property Location</H6>
      <Box pos="relative">
        <MapBox propertyLng={-71} propertyLat={42} />
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

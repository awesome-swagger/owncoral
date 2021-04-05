import { Box, Heading, Image, Center, Icon } from '@chakra-ui/react';
import { FiMap } from 'react-icons/fi';
import MapImg from '../../../../../../../assets/Map2.png';

export const PropertyLocation = () => (
  <Box>
    <Heading fontSize="lg" fontWeight="bold">
      Property Location
    </Heading>
    <Box pos="relative">
      <Image src={MapImg} alt="map_img" w="100%" />
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
    <Heading fontSize="md">
      3 Linden is in the heart of Somerville, an emerging biotech hub. It's minutes from the new
      Union Square biotech hub, which is in development, and the Union Square Greenline T Station
      (estimated to be complete at the end of this year)
    </Heading>
    <Box border="1px" layerStyle="lightBorder" textAlign="center">
      <Heading fontSize="md">Learn more about location</Heading>
    </Box>
  </Box>
);

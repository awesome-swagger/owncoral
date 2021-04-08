import { Box, Heading, Image, Center, Icon } from '@chakra-ui/react';
import { FiMap } from 'react-icons/fi';

export const PropertyLocation = ({ data }: { data: any }) => (
  <Box>
    <Heading fontSize="lg" fontWeight="bold">
      Property Location
    </Heading>
    <Box pos="relative">
      <Image src={data.mapImg2} alt="map_img" w="100%" />
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
    <Heading fontSize="md">{data.propertyLocation}</Heading>
    <Box border="1px" layerStyle="lightBorder" textAlign="center">
      <Heading fontSize="md">Learn more about location</Heading>
    </Box>
  </Box>
);

import { Container } from '../container';
import { IoMdClose } from 'react-icons/io';
import { Flex, Box, Icon, Center, Heading, Image } from '@chakra-ui/react';
import { CardTop } from '../propertyCard/CardTop';
import { CardBottom } from '../propertyCard/CardBottom';

import Map from '../../assets/Map.png';

export const PropertyCard = () => {
  console.log(Map);
  return (
    <Container>
      <Box pos="relative">
        <Center pos="absolute" h="100%">
          <Icon as={IoMdClose} />
        </Center>
        <Box textAlign="center" borderRadius="full" boxShadow="xs" py={2} w="56" mx="auto">
          <Heading layerStyle="grayHeading" fontSize="sm" m="0">
            Greater Boston Area
          </Heading>
          <Heading fontSize="sm" m="0">
            Cambridge
          </Heading>
        </Box>
      </Box>
      <Box h="500px" className="property_card" mt={6} p={4}>
        <Image src={Map} alt="map" pos="absolute" top="0" left="0" w="100%" zIndex="-2" />
        <Box className="card_gradient" zIndex="-1" />
        <CardTop />
        <CardBottom />
      </Box>
    </Container>
  );
};

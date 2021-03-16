import { useState, useEffect } from 'react';
import { Container } from '../container';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { Box, Icon, Center, Heading, Image } from '@chakra-ui/react';
import { CardTop } from '../propertyCard/CardTop';
import { CardBottom } from '../propertyCard/CardBottom';

import Map from '../../assets/Map.png';
import House from '../../assets/Multifamily_Night.png';

export const PropertyCard = () => {
  const [zoom, setZoom] = useState(false);
  const [image, setImage] = useState(Map);
  useEffect(() => {
    {
      zoom ? setTimeout(() => setImage(House), 500) : setImage(Map);
    }
  }, [zoom]);
  const handleZoom = () => {
    setZoom(!zoom);
  };

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
      <Box h={{ base: '500px', sm: '550px', md: '650px' }} className="property_card" mt={6} p={4}>
        <Image
          src={image}
          alt="map"
          className={zoom ? 'property_card_img zoom' : 'property_card_img'}
        />

        <Box className="card_gradient" zIndex="-1" />
        <CardTop />
        <CardBottom />
      </Box>
      <Center my={6}>
        <Icon onClick={handleZoom} as={zoom ? AiOutlineZoomOut : AiOutlineZoomIn} h={6} w={6} />
      </Center>
    </Container>
  );
};

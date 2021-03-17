import { useState, useEffect } from 'react';
import { Container } from '../container';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { Box, Icon, Center, Heading, Image } from '@chakra-ui/react';
import { CardTop } from '../propertyCard/CardTop';
import { CardBottom } from '../propertyCard/CardBottom';

import MapImg from '../../assets/Map.png';
import HouseImg from '../../assets/Multifamily_Night.png';

export const PropertyCard = () => {
  const Map = MapImg;
  const House = HouseImg;

  const [remove, setRemove] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomOut, setZoomOut] = useState(true);
  const [image, setImage] = useState(Map);

  useEffect(() => {
    {
      zoom
        ? setTimeout(() => setImage(House), 100) && setTimeout(() => setRemove(true), 500)
        : setImage(Map);
    }
  }, [zoom]);
  const handleZoom = () => {
    if (zoom === false) {
      setZoom(true);
      setZoomOut(false);
    } else if (zoom === true) {
      setZoomOut(true);
      setRemove(false);
      setTimeout(() => {
        setZoom(false);
      }, 500);
    }
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
        {remove ? (
          ''
        ) : (
          <Image
            src={Map}
            alt="map"
            className={
              zoom
                ? zoomOut
                  ? 'property_card_img'
                  : 'property_card_img zoom'
                : 'property_card_img'
            }
          />
        )}
        {image === House ? (
          <Image
            src={House}
            className={zoomOut ? 'property_card_img zoomout' : 'property_card_img zoomin '}
          />
        ) : (
          ''
        )}
        <Box className="card_gradient" zIndex="-1" />
        <CardTop />
        <CardBottom />
      </Box>
      <Center my={6}>
        <Icon onClick={handleZoom} as={zoomOut ? AiOutlineZoomIn : AiOutlineZoomOut} h={6} w={6} />
      </Center>
    </Container>
  );
};

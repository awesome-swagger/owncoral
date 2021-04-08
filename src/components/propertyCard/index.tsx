import React, { useState, useEffect } from 'react';
import { Box, Icon, Center, Heading, Image } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { Container } from '../container';
import { CardTop } from '../propertyCard/CardTop';
import { CardBottom } from '../propertyCard/CardBottom';
import { CardStyle, ImgZoomOut, ImgZoomIn, ImgZoom, CardImg, CardGradient } from './styleProps';

import MapImg from '../../assets/Map.png';
import HouseImg from '../../assets/Multifamily_Night.png';

export const PropertyCard = ({ data, handleClose }: { data: any; handleClose: () => void }) => {
  const Map = MapImg;
  const House = HouseImg;

  const [remove, setRemove] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomOut, setZoomOut] = useState(true);
  const [image, setImage] = useState(Map);

  useEffect(() => {
    if (zoom) setTimeout(() => setImage(House), 100) && setTimeout(() => setRemove(true), 500);
    else setImage(Map);
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

  return (
    <Container>
      <Box pos="relative">
        <Center pos="absolute" h="100%" cursor="pointer" onClick={() => handleClose()}>
          <Icon as={IoMdClose} />
        </Center>
        <Box textAlign="center" borderRadius="full" boxShadow="xs" py={2} w="56" mx="auto">
          <Heading layerStyle="grayHeading" fontSize="sm" m="0">
            {data.stateRegion}
          </Heading>
          <Heading fontSize="sm" m="0">
            {data.cityLocality}
          </Heading>
        </Box>
      </Box>
      <Box h={{ base: '500px', sm: '550px', md: '650px' }} style={CardStyle} mt={6} p={4}>
        {!remove && (
          <Image src={Map} alt="map" style={zoom ? (zoomOut ? CardImg : ImgZoom) : CardImg} />
        )}
        {image === House && <Image src={House} style={zoomOut ? ImgZoomOut : ImgZoomIn} />}
        <Box style={CardGradient} />
        <CardTop data={data} />
        <CardBottom data={data} />
      </Box>
      <Center my={6}>
        <Icon onClick={handleZoom} as={zoomOut ? AiOutlineZoomIn : AiOutlineZoomOut} h={6} w={6} />
      </Center>
    </Container>
  );
};

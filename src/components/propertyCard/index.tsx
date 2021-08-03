import React, { useState, useEffect } from 'react';
import { Box, Button, Icon, Center, Image } from '@chakra-ui/react';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { CardTop } from '../propertyCard/CardTop';
import { CardBottom } from '../propertyCard/CardBottom';
import { FiMapPin } from 'react-icons/fi';
import { CardStyle, ImgZoomOut, ImgZoomIn, ImgZoom, CardImg, CardGradient } from './styleProps';

import MapImg from '../../assets/Map.png';
import HouseImg from '../../assets/Multifamily_Night.png';

export const PropertyCard = ({ data }: { data: any }) => {
  const Map = MapImg;
  const House = HouseImg;

  const [remove, setRemove] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomOut, setZoomOut] = useState(true);
  const [image, setImage] = useState(Map);

  useEffect(() => {
    if (zoom) setTimeout(() => setImage(House), 100) && setTimeout(() => setRemove(true), 500);
    else setImage(Map);
  }, [zoom, Map, House]);

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
    <Box>
      <Box
        h={{ base: '500px', sm: '550px', md: '650px' }}
        style={CardStyle}
        borderRadius="2xl"
        p={4}
      >
        {!remove && (
          <Image src={Map} alt="map" style={zoom ? (zoomOut ? CardImg : ImgZoom) : CardImg} />
        )}
        {image === House && <Image src={House} style={zoomOut ? ImgZoomOut : ImgZoomIn} />}
        <Box style={CardGradient} />
        <CardTop data={data} />
        <CardBottom data={data} />
      </Box>
      <Center pos="relative" mt={10}>
        <Button top={-16} pos="absolute" border="4px" borderColor="white" h={12} w={12}>
          <Icon h={6} w={6} as={FiMapPin} />
        </Button>
        <Icon onClick={handleZoom} as={zoomOut ? AiOutlineZoomIn : AiOutlineZoomOut} h={6} w={6} />
      </Center>
    </Box>
  );
};

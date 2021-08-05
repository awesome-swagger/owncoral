import React, { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Box, Button, Center, Icon, Image } from '@chakra-ui/react';

import MapImg from '../../assets/Map.png';
import HouseImg from '../../assets/Multifamily_Night.png';

import { CardBottom } from '../propertyCard/CardBottom';
import { CardTop } from '../propertyCard/CardTop';
import {
  CardGradient,
  CardImg,
  CardStyle,
  ImgZoom,
  ImgZoomIn,
  ImgZoomOut
} from './styleProps';

export const PropertyCard = ({ data }: { data: any }) => {
  const Map = MapImg;
  const House = HouseImg;

  const [remove, setRemove] = useState(false);
  const [zoom, setZoom] = useState(true);
  const [zoomOut, setZoomOut] = useState(false);
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
    <Box h="100%">
      <Box style={CardStyle} borderRadius="2xl" p={4}>
        {!remove && (
          <Image src={Map} alt="map" style={zoom ? (zoomOut ? CardImg : ImgZoom) : CardImg} />
        )}
        {image === House && <Image src={House} style={zoomOut ? ImgZoomOut : ImgZoomIn} />}
        <Box style={CardGradient} />
        <CardTop data={data} />
        <CardBottom data={data} />
      </Box>
      <Center pos="relative" mt={10}>
        <Button
          top={-16}
          pos="absolute"
          border="4px"
          borderColor="white"
          h={12}
          w={12}
          onClick={handleZoom}
        >
          <Icon h={6} w={6} as={FiMapPin} />
        </Button>
      </Center>
    </Box>
  );
};

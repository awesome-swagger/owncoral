import { useState } from 'react';
import { Image, Box, Center, Heading, Icon } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { PopUpBox } from './popUpBox';
import { Container } from '../../../../components';
import MapImg from '../../../../assets/MapsicleMap.png';

export const PortfolioMap = () => {
  const [popUp, setPopUp] = useState(false);
  const history = useHistory();
  return (
    <Container>
      <Box pos="absolute" w="100%" left="0px" top={8}>
        <Center pos="absolute" h="100%" left={8}>
          <Center
            cursor="pointer"
            borderRadius="full"
            layerStyle="iconColor"
            p={1}
            onClick={() => history.goBack()}
          >
            <Icon as={FiChevronLeft} h={6} w={6} />
          </Center>
        </Center>
        <Box
          layerStyle="iconColor"
          textAlign="center"
          borderRadius="full"
          cursor="pointer"
          boxShadow="xs"
          py={2}
          w="56"
          mx="auto"
          onClick={() => setPopUp(true)}
        >
          <Heading layerStyle="grayHeading" fontSize="sm" m="0">
            Greater Boston Area
          </Heading>
          <Heading fontSize="sm" m="0">
            Cambridge
          </Heading>
        </Box>
      </Box>
      <Image w="100%" src={MapImg} alt="map" />
      {popUp && <PopUpBox handleClose={setPopUp} />}
    </Container>
  );
}

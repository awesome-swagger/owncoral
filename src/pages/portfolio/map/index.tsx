import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Box, Center, Heading, Icon, Image } from '@chakra-ui/react';

import MapImg from '../../../assets/MapsicleMap.png';
import { Container } from '../../../components';
import { DummyData } from '../../../lib/portfolioData';
import { PopUpBox } from './popUpBox';

const PortfolioMap = () => {
  const PortfolioData = DummyData;

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
            {PortfolioData.stateRegion}
          </Heading>
          <Heading fontSize="sm" m="0">
            {PortfolioData.cityLocality}
          </Heading>
        </Box>
      </Box>
      <Image w="100%" src={MapImg} alt="map" />
      {popUp && <PopUpBox handleClose={setPopUp} />}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioMap;

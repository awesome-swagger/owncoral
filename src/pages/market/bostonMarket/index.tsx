import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { Box, Button, Divider, Icon, Image } from '@chakra-ui/react';

import { Container } from '../../../components';
import { AreaDetails } from './areaDetails';
import { Highlights } from './highlights';
// import { SubMarkets } from './subMarkets';
import MarketImg from '../../../assets/boston-market-v1.png';

const BostonMarket = () => {
  const history = useHistory();
  const handleClose = () => history.goBack();
  const handleMarketProperties = () => history.push('listings');

  return (
    <Container p={0}>
      <Box>
        <Image src={MarketImg} alt="house_img" w="100%" />
        <Icon
          pos="absolute"
          top={6}
          left={6}
          h={8}
          w={8}
          p={1}
          as={FiX}
          cursor="pointer"
          onClick={handleClose}
          borderRadius="full"
          layerStyle="iconColor"
        />
      </Box>
      <Box px={6} pt={6} borderRadius="2xl" pos="relative" bottom={6} bg="inherit">
        <AreaDetails />
        <Divider my={6} />
        <Highlights />
        {/* <Divider my={6} /> */}
        {/* <SubMarkets /> */}
      </Box>
      <Divider my={6} />
      <Box px={6}>
        <Button mb={6} w="100%" onClick={handleMarketProperties}>
          Back to market properties
        </Button>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default BostonMarket;

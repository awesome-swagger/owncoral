import { useHistory } from 'react-router';
import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { Button, Divider, Icon, Image, Box } from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi';
import MarketImg from '../../../assets/boston-market.png';
import { Container } from '../../../components';
import { AreaDetails } from './areaDetails';
import { Highlights } from './highlights';
import { SubMarkets } from './subMarkets';

const BostonMarket = () => {
  const history = useHistory();
  const handleClose = () => history.goBack();
  return (
    <Container p={0}>
      <Box>
        <Image src={MarketImg} alt="house_img" w="100%" filter="grayscale(1)" />
        <Icon
          pos="absolute"
          top={6}
          left={6}
          h={8}
          w={8}
          as={AiFillCloseCircle}
          color="white"
          cursor="pointer"
          onClick={handleClose}
        />
        <Icon
          pos="absolute"
          top={6}
          right={6}
          h={8}
          w={8}
          p={1}
          as={FiMoreHorizontal}
          borderRadius="full"
          layerStyle="iconColor"
          color="grey"
          cursor="pointer"
        />
        <Icon
          pos="absolute"
          top={6}
          right={16}
          mr={2}
          h={8}
          w={8}
          p={1}
          as={AiOutlineUpload}
          borderRadius="full"
          layerStyle="iconColor"
          color="grey"
          cursor="pointer"
        />
      </Box>
      <Box px={6}>
        <Box my={6}>
          <AreaDetails />
          <Divider my={6} />
          <Highlights />
          <Divider my={6} />
          <SubMarkets />
        </Box>
      </Box>
      <Divider my={6} />
      <Box px={6}>
        <Button mb={6} w="100%">
          Continue to market properties
        </Button>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default BostonMarket;

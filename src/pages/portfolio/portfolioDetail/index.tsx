import { Image, Center, Icon, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FiMap } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import { Container } from '../../../components';
import MapImg from '../../../assets/Frame269.png';

const PortfolioDetail = () => {
  const history = useHistory();
  const handleClick = (route: string) => history.push(`/portfolio-detail/${route}`);
  return (
    <Container>
      <Box pos="relative" mx="auto">
        <Image w="100%" src={MapImg} />
        <Center
          borderRadius="full"
          layerStyle="iconColor"
          pos="absolute"
          bottom={4}
          right={4}
          p={3}
          cursor="pointer"
          onClick={() => handleClick('portfolio-map')}
        >
          <Icon h={6} w={6} as={FiMap} />
        </Center>
        <Center
          borderRadius="full"
          layerStyle="iconColor"
          pos="absolute"
          bottom={16}
          right={4}
          p={3}
          cursor="pointer"
          mb={2}
          onClick={() => handleClick('dashboard')}
        >
          <Icon h={6} w={6} as={FaChartLine} />
        </Center>
      </Box>
    </Container>
  );
}

// eslint-disable-next-line import/no-default-export
export default PortfolioDetail;

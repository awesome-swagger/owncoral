import { useHistory } from 'react-router-dom';
import { Image, Icon } from '@chakra-ui/react';
import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { TopSection, TabSection } from './sections';
import { Container } from '../../../components';
import { DummyData } from '../../../lib/portfolioData';

const PortfolioPropertyDetail2 = () => {
  const PortfolioData = DummyData;
  const history = useHistory();

  return (
    <Container>
      <Image src={PortfolioData.propertyImg} alt="house_img" w="100%" />
      <Icon
        pos="absolute"
        top={10}
        left={10}
        h={8}
        w={8}
        color="white"
        as={AiFillCloseCircle}
        cursor="pointer"
        onClick={() => history.goBack()}
      />
      <Icon
        pos="absolute"
        top={10}
        right={10}
        h={8}
        w={8}
        p={1}
        color="white"
        as={FiMoreHorizontal}
        borderRadius="full"
        layerStyle="iconColor"
      />
      <Icon
        pos="absolute"
        top={10}
        right={20}
        mr={2}
        h={8}
        w={8}
        p={1}
        color="white"
        as={AiOutlineUpload}
        borderRadius="full"
        layerStyle="iconColor"
      />
      <TopSection data={PortfolioData} />
      <TabSection data={PortfolioData} />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PortfolioPropertyDetail2;

import { Image, Divider, Icon } from '@chakra-ui/react';
import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import {
  TopSection,
  TabSection,
  ChartSection,
  PropertyLocation,
  AssetSection,
  RenovationSection,
} from './sections';
import { Container } from '../../../../components';
import HouseImg from '../../../../assets/Multifamily_Night.png';

const PortfolioPropertyDetail = () => (
  <Container>
    <Image src={HouseImg} alt="house_img" w="100%" />
    <Icon pos="absolute" top={10} left={10} h={8} w={8} color="white" as={AiFillCloseCircle} />
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
    <TopSection />
    <TabSection />
    <ChartSection />
    <Divider my={6} />
    <PropertyLocation />
    <Divider my={6} />
    <AssetSection />
    <Divider my={6} />
    <RenovationSection /> <Divider my={6} />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default PortfolioPropertyDetail;

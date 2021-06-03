import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Button, Divider, Icon,Image } from '@chakra-ui/react';

import HouseImg from '../../../assets/Multifamily_Night.png';
import { Container } from '../../../components';
import {
  AssetSection,
  ChartSection,
  PropertyLocation,
  RenovationSection,
  SourcesAndUses,
  TabSection,
  TopSection,
  WhatWeLove,
} from './sections';

const OpportunityDetail = () => (
  <Container>
    <Image src={HouseImg} alt="house_img" w="100%" />
    <Icon
      pos="absolute"
      top={10}
      left={10}
      h={8}
      w={8}
      as={AiFillCloseCircle}
      color="white"
    />
    <Icon
      pos="absolute"
      top={10}
      right={10}
      h={8}
      w={8}
      p={1}
      as={FiMoreHorizontal}
      borderRadius="full"
      layerStyle="iconColor"
      color="grey"
    />
    <Icon
      pos="absolute"
      top={10}
      right={20}
      mr={2}
      h={8}
      w={8}
      p={1}
      as={AiOutlineUpload}
      borderRadius="full"
      layerStyle="iconColor"
      color="grey"
    />
    <TopSection />
    <TabSection />
    <ChartSection /> <Divider my={6} />
    <WhatWeLove /> <Divider my={6} />
    <PropertyLocation /> <Divider my={6} />
    <AssetSection /> <Divider my={6} />
    <RenovationSection /> <Divider my={6} />
    <SourcesAndUses />
    <Button w="100%" mt={12}>
      Invest in this property
    </Button>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default OpportunityDetail;

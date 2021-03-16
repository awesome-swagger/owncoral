import { Container } from '../../../components';
import { Image, Button, Divider, Icon } from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  TopSection,
  TabSection,
  ChartSection,
  PropertyLocation,
  AssetSection,
  WhatWeLove,
  RenovationSection,
  SourcesAndUses,
} from './sections';
import HouseImg from '../../../assets/Multifamily_Night.png';

const PropertyDetail = () => (
  <Container>
    <Image src={HouseImg} alt="house_img" w="100%" />
    <Icon pos="absolute" top={10} left={10} h={8} w={8} color="white" as={AiFillCloseCircle} />
    <TopSection />
    <TabSection />
    <ChartSection />
    <Divider my={6} />
    <WhatWeLove />
    <Divider my={6} />
    <PropertyLocation />
    <Divider my={6} />
    <AssetSection />
    <Divider my={6} />
    <RenovationSection /> <Divider my={6} />
    <SourcesAndUses />
    <Button w="100%" mt={12}>
      Invest in this property
    </Button>
  </Container>
);
export default PropertyDetail;

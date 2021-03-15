import { Container } from '../../../components';
import { FiMapPin } from 'react-icons/fi';
import { Image, Button, Box, Heading, Divider, Flex, Icon } from '@chakra-ui/react';
import { TopSection, TabSection, ChartSection, PropertyLocation } from './sections';
import HouseImg from '../../../assets/Multifamily_Night.png';

const PropertyDetail = () => (
  <Container>
    <Image src={HouseImg} alt="house_img" w="100%" />
    <TopSection />
    <TabSection />
    <ChartSection />
    <Divider my={6} />

    <Heading fontWeight="bold" fontSize="2xl">
      What we love
    </Heading>

    <Flex mt={6}>
      <Box w={12}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Prime location
        </Heading>
        <Heading fontSize="sm">
          Next to the new Union Square Greenline T station and the new Union Square biotech hub (est
          completion 2023). Learn more
        </Heading>
      </Box>
    </Flex>

    <Flex mt={6}>
      <Box w={12}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Opportunity to extract more value
        </Heading>
        <Heading fontSize="sm">
          Raise rental rates up once Union Square T station is complete (est. Dec 2021). Potential
          to raise more significantly when union square biotech hub is complete. Learn more
        </Heading>
      </Box>
    </Flex>

    <Flex mt={6}>
      <Box w={12}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Well-priced
        </Heading>
        <Heading fontSize="sm">
          Purchase price is 35% below market due to inefficient management and need to renovate.
          Learn more
        </Heading>
      </Box>
    </Flex>

    <Divider my={6} />

    <PropertyLocation />

    <Button w="100%"> Invest in this property</Button>
  </Container>
);
export default PropertyDetail;

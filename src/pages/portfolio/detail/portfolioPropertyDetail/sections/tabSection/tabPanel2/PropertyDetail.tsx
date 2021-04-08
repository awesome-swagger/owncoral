import { Box, Heading, Icon, Flex } from '@chakra-ui/react';
import { AiOutlineApartment } from 'react-icons/ai';
import { Card } from '../../../../../../../components';

export const PropertyDetail = ({ data }: { data: any }) => (
  <Box>
    <Heading fontSize="lg" fontWeight="bold">
      Property details
    </Heading>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          {data.propertyStories}
        </Heading>
      </Box>
    </Flex>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          {data.apartment}
        </Heading>
        <Heading fontSize="sm">{data.units}</Heading>
      </Box>
    </Flex>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          {data.livingSpace}
        </Heading>
        <Heading fontSize="sm">{data.size}</Heading>
      </Box>
    </Flex>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          {data.status}
        </Heading>
        <Heading fontSize="sm">{data.builtDate}</Heading>
      </Box>
    </Flex>
    <Flex overflow="auto">
      <Card title="Purchase Price" value={data.purchasePrice} description="Lorem ipsum" />

      <Card title="Price/Bedroom" value={data.bedroomPrice} description="30% below market" />
    </Flex>
  </Box>
);

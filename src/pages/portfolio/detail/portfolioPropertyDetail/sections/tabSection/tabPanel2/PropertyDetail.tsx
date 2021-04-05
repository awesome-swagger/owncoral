import { Box, Heading, Icon, Flex } from '@chakra-ui/react';
import { AiOutlineApartment } from 'react-icons/ai';

export const PropertyDetail = () => (
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
          3 stories
        </Heading>
      </Box>
    </Flex>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          2 apartment units
        </Heading>
        <Heading fontSize="sm"> 6 bedrooms - 2 bathrooms </Heading>
      </Box>
    </Flex>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          1806 sqft of living space
        </Heading>
        <Heading fontSize="sm">3920 sq. ft lot size</Heading>
      </Box>
    </Flex>
    <Flex mb={2} minH={10}>
      <Box mr={4}>
        <Icon as={AiOutlineApartment} />
      </Box>
      <Box>
        <Heading fontSize="md" fontWeight="bold" my="0">
          Vacant
        </Heading>
        <Heading fontSize="sm">Built in 1920 and in need of a renovation</Heading>
      </Box>
    </Flex>
    <Flex overflow="auto">
      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Purchase Price
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $890k
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          Lorem ipsum
        </Heading>
      </Box>
      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Price/Bedroom
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $148k
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          35% below market
        </Heading>
      </Box>
    </Flex>
  </Box>
);

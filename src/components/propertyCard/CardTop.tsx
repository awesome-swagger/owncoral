import { Box, Flex, Heading } from '@chakra-ui/react';

export const CardTop = ({ data }: { data: any }) => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Heading w="100%" color="gray.200" fontSize="sm">
      Great business, fair price
    </Heading>
    <Box>
      <Heading lineHeight={8} color="white" fontSize="2xl" m="0">
        {data.uriAddress}
      </Heading>
      <Heading color="white" fontSize="xs">
        {data.propertyMeasure}
      </Heading>
    </Box>
    <Box>
      <Heading lineHeight={8} color="white" fontSize="lg" m="0">
        {data.propertyPrice}
      </Heading>
      <Heading color="gray.200" fontSize="xs">
        Ownership
      </Heading>
    </Box>
  </Flex>
);

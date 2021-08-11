import { Box, Flex, Heading } from '@chakra-ui/react';

export const CardTop = ({ data }: { data: any }) => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Heading w="100%" color="#EDF2F7" fontSize="sm">
      Great business, fair price
    </Heading>
    <Box>
      <Heading lineHeight={8} color="#FFF" fontSize="2xl" m="0">
        {data.uriAddress}
      </Heading>
      <Heading color="#EDF2F7" fontSize="xs">
        {data.propertyMeasure}
      </Heading>
    </Box>
    <Box>
      <Heading lineHeight={8} color="#FFF" fontSize="lg" m="0">
        {data.propertyPrice}
      </Heading>
      <Heading color="#EDF2F7" fontSize="xs">
        Ownership
      </Heading>
    </Box>
  </Flex>
);

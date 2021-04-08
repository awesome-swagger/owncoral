import { Flex, Box, Heading } from '@chakra-ui/react';

export const CardTop = ({ data }: { data: any }) => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Heading w="100%" layerStyle="lightGrayHeading" fontSize="sm">
      Great business, fair price
    </Heading>
    <Box>
      <Heading lineHeight={8} layerStyle="whiteHeading" fontSize="2xl" m="0">
        {data.uriAddress}
      </Heading>
      <Heading layerStyle="lightGrayHeading" fontSize="xs">
        {data.propertyMeasure}
      </Heading>
    </Box>
    <Box>
      <Heading lineHeight={8} layerStyle="whiteHeading" fontSize="lg" m="0">
        {data.propertyPrice}
      </Heading>
      <Heading layerStyle="lightGrayHeading" fontSize="xs">
        Ownership
      </Heading>
    </Box>
  </Flex>
);

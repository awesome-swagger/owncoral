import { Flex, Box, Heading } from '@chakra-ui/react';

export const CardTop = () => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Heading w="100%" layerStyle="lightGrayHeading" fontSize="sm">
      Great business, fair price
    </Heading>
    <Box>
      <Heading lineHeight={8} layerStyle="whiteHeading" fontSize="2xl" m="0">
        2972 Westheimer Rd.
      </Heading>
      <Heading layerStyle="lightGrayHeading" fontSize="xs">
        5,000 sq ft · 6 units
      </Heading>
    </Box>
    <Box>
      <Heading lineHeight={8} layerStyle="whiteHeading" fontSize="lg" m="0">
        $1.05M
      </Heading>
      <Heading layerStyle="lightGrayHeading" fontSize="xs">
        Total equity
      </Heading>
    </Box>
  </Flex>
);

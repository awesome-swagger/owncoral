import { Flex, Box, Heading } from '@chakra-ui/react';

export const CardBottom = () => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Box>
      <Heading layerStyle="lightGrayHeading" fontSize="sm">
        Target cash distribution
      </Heading>
      <Flex>
        <Box mr={4}>
          <Heading layerStyle="whiteHeading" fontSize="xl" m="0">
            20%
          </Heading>
          <Heading layerStyle="lightGrayHeading" fontSize="xs">
            Year 1
          </Heading>
        </Box>
        <Box>
          <Heading layerStyle="whiteHeading" fontSize="xl" m="0">
            5-9%
          </Heading>
          <Heading layerStyle="lightGrayHeading" fontSize="xs">
            Year 2+
          </Heading>
        </Box>
      </Flex>
    </Box>
    <Box>
      <Heading layerStyle="lightGrayHeading" fontSize="sm">
        IRR
      </Heading>
      <Heading layerStyle="whiteHeading" fontSize="xl" m="0">
        15-16%
      </Heading>
      <Heading layerStyle="lightGrayHeading" fontSize="xs">
        5-10 yr hold
      </Heading>
    </Box>
  </Flex>
);

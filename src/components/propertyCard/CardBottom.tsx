import { Box, Flex, Heading } from '@chakra-ui/react';

export const CardBottom = ({ data }: { data: any }) => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Box>
      <Heading layerStyle="lightGrayHeading" fontSize="sm">
        Distribution
      </Heading>
      <Flex>
        <Box mr={8}>
          <Heading layerStyle="whiteHeading" fontSize="xl" m="0">
            {data.totalDistribution}
          </Heading>
          <Heading layerStyle="lightGrayHeading" fontSize="xs">
            Total
          </Heading>
        </Box>
        <Box>
          <Heading layerStyle="whiteHeading" fontSize="xl" m="0">
            {data.lastMonthDistribution}
          </Heading>
          <Heading layerStyle="lightGrayHeading" fontSize="xs">
            Last month
          </Heading>
        </Box>
      </Flex>
    </Box>
    <Box>
      <Heading layerStyle="lightGrayHeading" fontSize="sm">
        Return rate
      </Heading>
      <Heading layerStyle="whiteHeading" fontSize="xl" m="0">
        {data.returnRate}
      </Heading>
      <Heading layerStyle="lightGrayHeading" fontSize="xs">
        6 months
      </Heading>
    </Box>
  </Flex>
);

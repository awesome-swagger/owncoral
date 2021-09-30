import { Box, Flex, Heading } from '@chakra-ui/react';

export const CardBottom = ({ data }: { data: any }) => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Box>
      <Heading color="gray.200" fontSize="sm">
        Distribution
      </Heading>
      <Flex>
        <Box mr={8}>
          <Heading color="white" fontSize="xl" m="0">
            {data.totalDistribution}
          </Heading>
          <Heading color="gray.200" fontSize="xs">
            Total
          </Heading>
        </Box>
        <Box>
          <Heading color="white" fontSize="xl" m="0">
            {data.lastMonthDistribution}
          </Heading>
          <Heading color="gray.200" fontSize="xs">
            Last month
          </Heading>
        </Box>
      </Flex>
    </Box>
    <Box>
      <Heading color="gray.200" fontSize="sm">
        Return rate
      </Heading>
      <Heading color="white" fontSize="xl" m="0">
        {data.returnRate}
      </Heading>
      <Heading color="gray.200" fontSize="xs">
        6 months
      </Heading>
    </Box>
  </Flex>
);

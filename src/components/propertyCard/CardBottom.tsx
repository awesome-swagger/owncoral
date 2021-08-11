import { Box, Flex, Heading } from '@chakra-ui/react';

export const CardBottom = ({ data }: { data: any }) => (
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Box>
      <Heading color="#EDF2F7" fontSize="sm">
        Distribution
      </Heading>
      <Flex>
        <Box mr={8}>
          <Heading color="#FFF" fontSize="xl" m="0">
            {data.totalDistribution}
          </Heading>
          <Heading color="#EDF2F7" fontSize="xs">
            Total
          </Heading>
        </Box>
        <Box>
          <Heading color="#FFF" fontSize="xl" m="0">
            {data.lastMonthDistribution}
          </Heading>
          <Heading color="#EDF2F7" fontSize="xs">
            Last month
          </Heading>
        </Box>
      </Flex>
    </Box>
    <Box>
      <Heading color="#EDF2F7" fontSize="sm">
        Return rate
      </Heading>
      <Heading color="#FFF" fontSize="xl" m="0">
        {data.returnRate}
      </Heading>
      <Heading color="#EDF2F7" fontSize="xs">
        6 months
      </Heading>
    </Box>
  </Flex>
);

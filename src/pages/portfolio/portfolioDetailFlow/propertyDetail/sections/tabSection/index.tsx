import { Box, Heading, Flex } from '@chakra-ui/react';

export const TabSection = () => (
  <Box>
    <Heading fontSize="3xl" fontWeight="bold" mb={0}>
      $20k
    </Heading>
    <Heading fontSize="sm" mb={4}>
      Total distribution
    </Heading>
    <Flex overflow="auto">
      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Contribution
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $200k
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          Sed malesuada viverra in facilisi lectus metus
        </Heading>
      </Box>

      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Contribution
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $200k
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          Sed malesuada viverra in facilisi lectus metus
        </Heading>
      </Box>
      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Contribution
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $200k
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          Sed malesuada viverra in facilisi lectus metus
        </Heading>
      </Box>
    </Flex>
  </Box>
);

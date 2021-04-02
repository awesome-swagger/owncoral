import { Flex, Box, Heading } from '@chakra-ui/react';

export const TotalDistribution = () => {
  return (
    <Box py={4}>
      <Heading fontSize="sm" m="0">
        Total distribution
      </Heading>
      <Heading fontSize="3xl" mt="0" fontWeight="bold">
        $780k
      </Heading>
      <Flex overflow="auto">
        <Box layerStyle="card" m="2" ml="0" p={4} w={40} minW={40}>
          <Heading layerStyle="highlightForeground" fontSize="sm">
            Rental distribution
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            $600k
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            Sed malesuada viverra in facilisi lectus metus
          </Heading>
        </Box>
        <Box layerStyle="card" m="2" p={4} w={40} minW={40}>
          <Heading layerStyle="highlightForeground" fontSize="sm">
            Special distribution
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            $180k
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            Lobortis non sit nunc hac sit sed
          </Heading>
        </Box>
        <Box layerStyle="card" m="2" p={4} w={40} minW={40}>
          <Heading layerStyle="highlightForeground" fontSize="sm">
            Rental distribution
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            $600k
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            Sed malesuada viverra in facilisi lectus metus
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

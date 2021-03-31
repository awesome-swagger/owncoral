import { Box, Image, Heading, Flex } from '@chakra-ui/react';
import ChartImg from '../../../../../../assets/Chart.png';

export const ChartSection = () => {
  return (
    <Box>
      <Heading fontSize="2xl" fontWeight="bold">
        Monthly progression
      </Heading>
      <Heading fontSize="md">Lobortis eget et mauris viverra amet, ut</Heading>
      <Flex justifyContent="space-between" alignItems="center" fontWeight="bold" my={2}>
        <Heading fontSize="md">Avg Monthly distribution</Heading>
        <Heading fontSize="md">$4000</Heading>
      </Flex>
      <Image src={ChartImg} alt="chart" w="100%" />
      <Heading fontSize="2xl" fontWeight="bold">
        Investment returns
      </Heading>
      <Heading fontSize="md">$999k total dolars invested</Heading>

      <Flex overflow="auto">
        <Box layerStyle="card" m="2" p={4} w={40}>
          <Heading layerStyle="highlightForeground" fontSize="xs">
            Return of capital
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            1.5%
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            Sed malesuada viverra in facilisi lectus metus
          </Heading>
        </Box>

        <Box layerStyle="card" m="2" p={4} w={40}>
          <Heading layerStyle="highlightForeground" fontSize="xs">
            Return of capital
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            1.5%
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            Sed malesuada viverra in facilisi lectus metus
          </Heading>
        </Box>
        <Box layerStyle="card" m="2" p={4} w={40}>
          <Heading layerStyle="highlightForeground" fontSize="xs">
            Return of capital
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            1.5%
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            Sed malesuada viverra in facilisi lectus metus
          </Heading>
        </Box>
      </Flex>
      <Heading fontSize="md" fontWeight="bold">
        Net asset value
      </Heading>
      <Heading fontSize="md">Lobortis eget et mauris viverra amet, ut</Heading>
      <Image src={ChartImg} alt="chart" w="100%" />

      <Box px={4} border="1px" layerStyle="lightBorder">
        <Heading fontSize="sm" fontWeight="bold">
          Learn more about NAV
        </Heading>
        <Heading fontSize="xs">Crash course</Heading>
      </Box>
    </Box>
  );
};

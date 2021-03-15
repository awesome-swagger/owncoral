import { Box, Image, Heading } from '@chakra-ui/react';
import ChartImg from '../../../../../assets/Chart.png';

export const ChartSection = () => (
  <Box>
    <Image src={ChartImg} alt="chart" w="100%" />
    <Box border="1px" p={2} my={4}>
      <Heading fontSize="md" m="0">
        Understanding investor cash flow
      </Heading>
      <Heading fontSize="sm" m="0">
        Crash course
      </Heading>
    </Box>
    <Box border="1px" p={2} my={4}>
      <Heading fontSize="md" m="0">
        Learn more about hypothetical investment
      </Heading>
    </Box>
  </Box>
);

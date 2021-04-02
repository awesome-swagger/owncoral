import { Box, Flex, Icon, Heading, Divider } from '@chakra-ui/react';
import { FaPercent } from 'react-icons/fa';
import { InvestmentReturn, ChartSection } from '../../../sections';

export const TabPanel1 = () => (
  <Box>
    <Flex alignItems="center">
      <Icon as={FaPercent} borderRadius="full" border="2px" p="2px" mr={2} h={6} w={6} />
      <Heading fontSize="md">You invested $13,800 for 3% ownership</Heading>
    </Flex>
    <Divider mb={4} />
    <Heading fontSize="lg" fontWeight="bold" my={4}>
      Distributions
    </Heading>
    <Flex overflow="auto">
      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Monthly
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $124
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          March, 2021
        </Heading>
      </Box>
      <Box layerStyle="card" m="2" p={4} w={40}>
        <Heading layerStyle="highlightForeground" fontSize="xs">
          Total
        </Heading>
        <Heading fontSize="2xl" m="0" fontWeight="bold">
          $1200
        </Heading>
        <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
          $830 rental, $370 special
        </Heading>
      </Box>
    </Flex>
    <InvestmentReturn />
    <ChartSection />
  </Box>
);

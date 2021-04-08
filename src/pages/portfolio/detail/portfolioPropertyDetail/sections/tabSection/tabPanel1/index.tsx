import { Box, Flex, Icon, Heading, Divider } from '@chakra-ui/react';
import { FaPercent } from 'react-icons/fa';
import { InvestmentReturn } from '../../investmentReturn';
import { ChartSection } from '../../chartSection';
import { Card } from '../../../../../../../components';

export const TabPanel1 = ({ data }: { data: any }) => (
  <Box>
    <Flex alignItems="center">
      <Icon as={FaPercent} borderRadius="full" border="2px" p="2px" mr={2} h={6} w={6} />
      <Heading fontSize="md">You invested {data.totalInvest} for 3% ownership</Heading>
    </Flex>
    <Divider mb={4} />
    <Heading fontSize="lg" fontWeight="bold" my={4}>
      Distributions
    </Heading>
    <Flex overflow="auto">
      <Card title="Monthly" value={data.monthlyDistribution} description="March, 2021" />
      <Card title="Total" value={data.totalDistribution} description="$830 rental, $370 special" />
    </Flex>
    <InvestmentReturn data={data} />
    <ChartSection />
  </Box>
);

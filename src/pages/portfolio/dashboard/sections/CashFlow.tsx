import { Box, Heading, Flex, Switch } from '@chakra-ui/react';
import { CumulativeChart } from '../charts';
export const CashFlow = () => (
  <Box>
    <Heading fontSize="2xl" fontWeight="bold">
      Cumulative returns
    </Heading>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading fontSize="md">Switch to 5 years hold</Heading>
      <Switch size="lg" />
    </Flex>
    <Box h="400px">
      <CumulativeChart />
    </Box>
    <Heading fontSize="2xl" fontWeight="bold">
      Cashflow
    </Heading>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading fontSize="md">Switch to 5 years hold</Heading>
      <Switch size="lg" />
    </Flex>
    <Box h="400px">
      <CumulativeChart />
    </Box>
  </Box>
);

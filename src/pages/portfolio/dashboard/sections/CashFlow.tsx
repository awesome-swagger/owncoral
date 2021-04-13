import { Box, Flex, Heading, Switch, Text } from '@chakra-ui/react';

import { CumulativeChart } from '../charts';
export const CashFlow = () => (
  <Box>
    <Heading size="xs" as="h6">
      Cumulative returns
    </Heading>
    <Flex alignItems="center" justifyContent="space-between">
      <Text textStyle="subtitle1">Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="400px">
      <CumulativeChart />
    </Box>
    <Heading size="xs" as="h6">
      Cashflow
    </Heading>
    <Flex alignItems="center" justifyContent="space-between">
      <Text textStyle="subtitle1">Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="400px">
      <CumulativeChart />
    </Box>
  </Box>
);

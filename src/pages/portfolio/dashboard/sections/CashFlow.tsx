import { Box, Flex, Heading, Switch, Text } from '@chakra-ui/react';

import { H6 } from '../../../../components/text';
import { CumulativeChart } from '../charts';
export const CashFlow = () => (
  <Box>
    <H6>Cumulative returns</H6>
    <Flex alignItems="center" justifyContent="space-between">
      <Text textStyle="subtitle1">Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="400px">
      <CumulativeChart />
    </Box>
    <H6>Cashflow</H6>
    <Flex alignItems="center" justifyContent="space-between">
      <Text textStyle="subtitle1">Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="400px">
      <CumulativeChart />
    </Box>
  </Box>
);

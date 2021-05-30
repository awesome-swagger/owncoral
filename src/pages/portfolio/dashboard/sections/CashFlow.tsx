import { Box, Flex, Heading, Switch, Text } from '@chakra-ui/react';

import { Headline } from '../../../../components/text';
import { CumulativeChart } from '../charts';
export const CashFlow = () => (
  <Box>
    <Headline>Cumulative returns</Headline>
    <Box h="400px">
      <CumulativeChart />
    </Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Headline>Cashflow</Headline>

    <Box h="400px">
      <CumulativeChart />
    </Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
  </Box>
);

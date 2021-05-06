import { Box, Flex, Heading, Switch, Text } from '@chakra-ui/react';

import { SubTitle1 } from '../../../../components/text';
import { CumulativeChart } from '../charts';
export const CashFlow = () => (
  <Box>
    <SubTitle1>Cumulative returns</SubTitle1>
    <Box h="400px">
      <CumulativeChart />
    </Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <SubTitle1>Cashflow</SubTitle1>

    <Box h="400px">
      <CumulativeChart />
    </Box>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
  </Box>
);

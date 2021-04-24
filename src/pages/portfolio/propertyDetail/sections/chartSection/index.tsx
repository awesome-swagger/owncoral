import { Box, Flex, Switch, Text } from '@chakra-ui/react';

import { SubTitle1 } from '../../../../../components/text';
import { CumulativeChart } from '../../charts';

export const ChartSection = () => (
  <Box>
    <SubTitle1 my={2}>Cumulative returns</SubTitle1>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="380px">
      <CumulativeChart />
    </Box>
    <SubTitle1 my={2}>Cashflow</SubTitle1>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="380px">
      <CumulativeChart />
    </Box>
  </Box>
);

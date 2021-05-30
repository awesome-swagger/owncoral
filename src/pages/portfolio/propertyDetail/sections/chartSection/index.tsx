import { Box, Flex, Switch, Text } from '@chakra-ui/react';

import { Headline } from '../../../../../components/text';
import { CumulativeChart } from '../../charts';

export const ChartSection = () => (
  <Box>
    <Headline my={2}>Cumulative returns</Headline>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="380px">
      <CumulativeChart />
    </Box>
    <Headline my={2}>Cashflow</Headline>
    <Flex alignItems="center" justifyContent="space-between">
      <Text>Switch to 5 years hold</Text>
      <Switch size="lg" />
    </Flex>
    <Box h="380px">
      <CumulativeChart />
    </Box>
  </Box>
);

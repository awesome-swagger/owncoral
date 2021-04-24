import { AiOutlineReload } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import { Box, Divider, Flex, Icon, Text } from '@chakra-ui/react';

import { SubTitle1 } from '../../../../../components/text';
import { DummyData } from '../../../../../lib/portfolioData';

export const InvestmentReturn = ({ data }: { data: any }) => {
  const dummyData = DummyData;
  return (
    <Box>
      <SubTitle1 my={2}>Investment returns</SubTitle1>
      <Box my={4}>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text my={2}>
              <Icon as={AiOutlineReload} mr={3} h={4} w={4} />
              Return of capital
            </Text>
            <Text my={2}>{dummyData.capitalReturn}</Text>
          </Flex>
          <Divider />
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text my={2}>
              <Icon as={HiOutlineCash} mr={3} h={4} w={4} />
              Cash-on-cash Return
            </Text>
            <Text my={2}>{dummyData.cashReturn}</Text>
          </Flex>
          <Divider />
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text my={2}>
              <Icon as={FaChartLine} mr={3} h={4} w={4} />
              Lorem Ipsum
            </Text>
            <Text my={2}>{dummyData.returnRate}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

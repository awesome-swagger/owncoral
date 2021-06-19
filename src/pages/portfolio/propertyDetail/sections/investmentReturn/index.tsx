import { FiCalendar, FiRotateCw } from 'react-icons/fi';
import type { PortfolioPropertyDetailInvestmentT } from '../../../../../shared-fullstack/types';
import { Box, Divider, Flex, Icon, Text } from '@chakra-ui/react';

import { Title2 } from '../../../../../components/text';

type InvestmentReturnPropertiesPropsT = {
  investment: PortfolioPropertyDetailInvestmentT;
};
export const InvestmentReturn = ({ investment }: InvestmentReturnPropertiesPropsT) => {
  return (
    <Box>
      <Title2 my={6}>Investment returns</Title2>
      <Box mb={6}>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text my={2}>
              <Icon as={FiRotateCw} mr={3} h={4} w={4} />
              Cash-on-cash return
            </Text>
            <Text my={2}>
              {investment.currentEquity
                ? ((investment.sumDistributionTotal / investment.currentEquity) * 100).toFixed() +
                  '%'
                : 'N/A'}
            </Text>
          </Flex>
          <Divider />
        </Box>

        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text my={2}>
              <Icon as={FiCalendar} mr={3} h={4} w={4} />
              Average time invested
            </Text>
            <Text my={2}>{investment.months !== null ? investment.months + ' months' : 'N/A'}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

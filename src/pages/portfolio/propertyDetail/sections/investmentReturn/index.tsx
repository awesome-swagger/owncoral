import { FiCalendar, FiRotateCw } from 'react-icons/fi';
import type { PortfolioPropertyDetailInvestmentT } from '../../../../../shared-fullstack/types';
import { PortfolioDashboardPropertyT } from '../../../../../shared-fullstack/types';
import { Box, Divider, Flex, Icon, Text } from '@chakra-ui/react';

import { SubTitle1 } from '../../../../../components/text';

type InvestmentReturnPropertiesPropsT = {
  investment: PortfolioPropertyDetailInvestmentT;
};
export const InvestmentReturn = ({ investment }: InvestmentReturnPropertiesPropsT) => {
  return (
    <Box>
      <SubTitle1 my={2}>Investment returns</SubTitle1>
      <Box my={4}>
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
            <Text my={2}>{investment.months !== null ? investment.months : 'N/A'}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

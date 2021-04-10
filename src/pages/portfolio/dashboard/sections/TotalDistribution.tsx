import { Flex, Box, Heading, Divider, Icon } from '@chakra-ui/react';
import { AiOutlineReload } from 'react-icons/ai';
import { HiOutlineCash } from 'react-icons/hi';
import { FaChartLine } from 'react-icons/fa';

export const TotalDistribution = ({ data }: { data: any }) => {
  return (
    <Box py={4}>
      <Heading fontSize="3xl" mt="0" fontWeight="bold">
        {data.totalInvest}
      </Heading>
      <Heading fontSize="sm" m="0">
        Total amount invested
      </Heading>
      <Flex my={4}>
        <Heading
          borderRadius="full"
          display="inline-block"
          cursor="pointer"
          fontSize="sm"
          mr={2}
          py={2}
          px={3}
          border="1px"
          layerStyle="lightBorder"
          whiteSpace="nowrap"
        >
          All markets
        </Heading>
        <Heading
          borderRadius="full"
          display="inline-block"
          cursor="pointer"
          fontSize="sm"
          mr={2}
          py={2}
          px={3}
          border="1px"
          layerStyle="lightBorder"
          whiteSpace="nowrap"
        >
          All entities
        </Heading>
      </Flex>
      <Heading fontSize="xl" fontWeight="bold">
        Distribution
      </Heading>
      <Flex overflow="auto">
        <Box layerStyle="card" m="2" ml="0" p={4} w={40} minW={40}>
          <Heading layerStyle="highlightForeground" fontSize="sm">
            Monthly
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            {data.monthlyDistribution}
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            March, 2021
          </Heading>
        </Box>
        <Box layerStyle="card" m="2" p={4} w={40} minW={40}>
          <Heading layerStyle="highlightForeground" fontSize="sm">
            Total
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            {data.totalDistribution}
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
            $830 rental, $370 special
          </Heading>
        </Box>
      </Flex>
      <Divider my={4} />
      <Heading fontSize="xl" fontWeight="bold">
        Investment returns
      </Heading>
      <Box my={4}>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="md">
              <Icon as={AiOutlineReload} mr={3} h={4} w={4} />
              Return of capital
            </Heading>
            <Heading fontSize="md" fontWeight="bold">
              {data.capitalReturn}
            </Heading>
          </Flex>
          <Divider />
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="md">
              <Icon as={HiOutlineCash} mr={3} h={4} w={4} />
              Cash-on-cash Return
            </Heading>
            <Heading fontSize="md" fontWeight="bold">
              {data.cashReturn}
            </Heading>
          </Flex>
          <Divider />
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="md">
              <Icon as={FaChartLine} mr={3} h={4} w={4} />
              Lorem Ipsum
            </Heading>
            <Heading fontSize="md" fontWeight="bold">
              {data.returnRate}
            </Heading>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

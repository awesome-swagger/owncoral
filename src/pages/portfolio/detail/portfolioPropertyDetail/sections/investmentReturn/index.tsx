import { Box, Flex, Heading, Icon, Divider } from '@chakra-ui/react';
import { AiOutlineReload } from 'react-icons/ai';
import { HiOutlineCash } from 'react-icons/hi';
import { FaChartLine } from 'react-icons/fa';

export const InvestmentReturn = () => (
  <Box>
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
            1.5%
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
            4.5%
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
            3.2%
          </Heading>
        </Flex>
        <Divider my={8} />
      </Box>
    </Box>
  </Box>
);

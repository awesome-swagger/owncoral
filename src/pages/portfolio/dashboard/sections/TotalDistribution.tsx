import { AiOutlineReload } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import type { PortfolioDashboardPropertyT } from '../../../../shared-fullstack/validators';
import { Box, Center, Divider, Flex, Heading, Icon, Spinner, Text, VStack } from '@chakra-ui/react';

import { formatFinancial } from '../../../../lib/financialFormatter';

const sum = (arr: number[]) => arr.reduce((n, acc) => n + acc, 0);

type TotalDistributionPropsT = {
  properties: PortfolioDashboardPropertyT[] | null;
};
export const TotalDistribution = ({ properties }: TotalDistributionPropsT) => {
  const totalDistribution: number | null = properties
    ? sum(properties.map((property) => property.totalDistribution || 0))
    : null;
  const totalContribution: number | null = properties
    ? sum(properties.map((property) => property.totalContribution || 0))
    : null;
  return (
    <Box py={4}>
      <Heading fontSize="3xl" mt="0" mb="1" fontWeight="bold">
        {totalContribution !== null ? (
          '$' + formatFinancial(totalContribution)
        ) : (
          <Center h="100%" w={10}>
            <Spinner />
          </Center>
        )}
      </Heading>
      <Text textStyle="subTitle2">Total amount invested</Text>
      {/* <Flex my={4}> */}
      {/*  <Heading */}
      {/*    borderRadius="full" */}
      {/*    display="inline-block" */}
      {/*    cursor="pointer" */}
      {/*    fontSize="sm" */}
      {/*    mr={2} */}
      {/*    py={2} */}
      {/*    px={3} */}
      {/*    border="1px" */}
      {/*    layerStyle="lightBorder" */}
      {/*    whiteSpace="nowrap" */}
      {/*  > */}
      {/*    All markets */}
      {/*  </Heading> */}
      {/*  <Heading */}
      {/*    borderRadius="full" */}
      {/*    display="inline-block" */}
      {/*    cursor="pointer" */}
      {/*    fontSize="sm" */}
      {/*    mr={2} */}
      {/*    py={2} */}
      {/*    px={3} */}
      {/*    border="1px" */}
      {/*    layerStyle="lightBorder" */}
      {/*    whiteSpace="nowrap" */}
      {/*  > */}
      {/*    All entities */}
      {/*  </Heading> */}
      {/* </Flex> */}
      <Box h={1} />
      <Heading size="xs" as="h6">
        Distribution
      </Heading>
      <Flex overflow="auto">
        {/* TODO: load in real cashflows */}
        {/* <Box layerStyle="card" m="2" ml="0" p={4} w={40} minW={40}> */}
        {/*  <Heading layerStyle="highlightForeground" fontSize="sm"> */}
        {/*    Monthly */}
        {/*  </Heading> */}
        {/*  <Heading fontSize="2xl" m="0" fontWeight="bold"> */}
        {/*    {data.monthlyDistribution} */}
        {/*  </Heading> */}
        {/*  <Heading layerStyle="highlightForeground" w="100%" fontSize="xs"> */}
        {/*    March, 2021 */}
        {/*  </Heading> */}
        {/* </Box> */}
        <Box layerStyle="card" m="2" paddingX={4} paddingY={3} w={40} minW={40} borderRadius="lg">
          <Heading layerStyle="highlightForeground" fontSize="sm">
            Total
          </Heading>
          <Heading size="sm" as="h5">
            {totalDistribution !== null ? (
              '$' + formatFinancial(totalDistribution)
            ) : (
              <Center h="100%" w="100%">
                <Spinner />
              </Center>
            )}
          </Heading>
          {/* <Heading layerStyle="highlightForeground" w="100%" fontSize="xs"> */}
          {/*  $830 rental, $370 special */}
          {/* </Heading> */}
        </Box>
      </Flex>
      <Divider my={4} />
      <Heading size="xs" as="h6">
        Investment returns
      </Heading>
      <VStack my={4} spacing={2} w="100%">
        <Box w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Text textStyle="subTitle1">
              <Icon as={AiOutlineReload} mr={3} h={4} w={4} />
              Return of capital
            </Text>
            <Text textStyle="subTitle1">1.5%</Text>
          </Flex>
          <Divider />
        </Box>
        <Box w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Text textStyle="subTitle1">
              <Icon as={HiOutlineCash} mr={3} h={4} w={4} />
              Cash-on-cash Return
            </Text>
            <Text textStyle="subTitle1">3.5%</Text>
          </Flex>
          <Divider />
        </Box>
        <Box w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Text textStyle="subTitle1">
              <Icon as={FaChartLine} mr={3} h={4} w={4} />
              Lorem Ipsum
            </Text>
            <Text textStyle="subTitle1">4.5%</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

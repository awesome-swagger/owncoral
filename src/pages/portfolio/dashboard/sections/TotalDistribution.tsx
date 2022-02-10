import { Fragment } from 'react';
import { FiCalendar, FiRotateCw } from 'react-icons/fi';
import type { PortfolioDashboardPropertyT } from '../../../../shared-fullstack/types';
import { Box, Center, Divider, Flex, HStack, Icon, Spinner, Text, VStack } from '@chakra-ui/react';
import * as R from 'remeda';

import { Card } from '../../../../components';
import { Overline, Title1, Title2 } from '../../../../components/text';
import { formatFinancial, formatFinancialSI } from '../../../../lib/financialFormatter';
import { formatUTCDateMMMyyyy } from '../../lib';

const sum = (arr: number[]) => arr.reduce((n, acc) => n + acc, 0);

type TotalDistributionPropsT = {
  properties: PortfolioDashboardPropertyT[] | null;
};
export const TotalDistribution = ({ properties }: TotalDistributionPropsT) => {
  const totalDistribution: number | null = properties
    ? sum(properties.map((property) => property.sumDistributionTotal || 0))
    : null;

  const totalDistributionRental: number | null = properties
    ? sum(properties.map((property) => property.sumDistributionRental || 0))
    : null;

  const totalDistributionSpecial: number | null = properties
    ? sum(properties.map((property) => property.sumDistributionSpecial || 0))
    : null;

  const totalContribution: number | null = properties
    ? sum(properties.map((property) => property.currentEquity || 0))
    : null;

  const totalMonthlyLast: number | null = properties
    ? sum(properties.map((property) => property.lastDistributionTotal || 0))
    : null;

  // Properties that have both month and contribution
  const withMonthsContribution = (properties || []).filter(
    (property) => property.currentEquity && property.months !== null,
  );

  const hasDistributions =
    (properties || []).filter((property) => property.lastDistributionMonth !== null).length > 0;

  // TODO(jimmy): remove/simplify this logic, we always return distributions for current month now
  const maxMonth: Date | null =
    hasDistributions && properties
      ? new Date(
          Math.max(
            ...properties.map((property) =>
              property.lastDistributionMonth !== null
                ? property.lastDistributionMonth.getTime()
                : -1,
            ),
          ),
        )
      : null;

  return (
    <Box py={4}>
      <Overline>Your Investments</Overline>
      <Title1 my={2}>
        {totalContribution !== null ? (
          '$' + formatFinancial(totalContribution)
        ) : (
          <Center h="100%" w={10}>
            <Spinner />
          </Center>
        )}
      </Title1>
      <Box h={2} />
      <Text textStyle="Body2">Total amount invested</Text>
      {/* <Flex my={4}> */}
      {/*  <Heading */}
      {/*    borderRadius="full" */}
      {/*    display="inline-block" */}
      {/*    cursor="pointer" */}
      {/*    fontSize="sm" */}
      {/*    mr={2} */}
      {/*    py={2} */}
      {/*    px={3} */}
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
      {/*    whiteSpace="nowrap" */}
      {/*  > */}
      {/*    All entities */}
      {/*  </Heading> */}
      {/* </Flex> */}
      <Divider mt={2} />
      <Title2 my={6}>Distributions</Title2>
      <HStack alignItems="stretch" w="100%" spacing={3}>
        <Card
          title="Monthly"
          value={
            totalMonthlyLast !== null ? (
              '$' + formatFinancial(totalMonthlyLast)
            ) : (
              <Center h="100%" w="100%">
                <Spinner />
              </Center>
            )
          }
          description={maxMonth !== null ? formatUTCDateMMMyyyy(maxMonth) : ''}
        />

        <Card
          title="Total"
          value={
            totalDistribution !== null ? (
              '$' + formatFinancial(totalDistribution)
            ) : (
              <Center h="100%" w="100%">
                <Spinner />
              </Center>
            )
          }
          description={
            totalDistributionRental !== null &&
            totalDistributionSpecial !== null && (
              <Fragment>
                ${formatFinancialSI(totalDistributionRental)} rental
                <br />${formatFinancialSI(totalDistributionSpecial)} special
              </Fragment>
            )
          }
        />
      </HStack>
      <Divider my={6} />
      <Title2>Investment returns</Title2>
      <VStack my={4} spacing={2} w="100%">
        <Box w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>
              <Icon as={FiRotateCw} mr={3} h={4} w={4} />
              Cash-on-cash return
            </Text>
            <Text>
              {totalDistribution !== null && totalContribution
                ? ((totalDistribution / totalContribution) * 100).toFixed() + '%'
                : 'N/A'}
            </Text>
          </Flex>
          <Divider />
        </Box>
        <Box w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>
              <Icon as={FiCalendar} mr={3} h={4} w={4} />
              Average time invested
            </Text>
            <Text>
              {withMonthsContribution.length > 0
                ? (
                    sum(
                      withMonthsContribution.map((p) => (p.months || 0) * (p.currentEquity || 0)),
                    ) / sum(withMonthsContribution.map((p) => p.currentEquity || 0))
                  ).toFixed() + ' months'
                : 'N/A'}
            </Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

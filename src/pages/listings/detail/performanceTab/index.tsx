import React, { Fragment } from 'react';
import { FiDollarSign, FiMapPin, FiTag } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { Card, IconBackground } from '../../../../components';
import { Caption1, Headline, Title2 } from '../../../../components/text';
import { formatFinancial } from '../../../../lib/financialFormatter';

type PerformanceTabPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
const PerformanceTab = ({ listingsDetail }: PerformanceTabPropsT) => {
  const history = useHistory();
  const grayBg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const descColor = useColorModeValue('dark.400', 'whiteAlpha.800');

  const [love1Header, love1Text] = listingsDetail.whyLove1.split('\n\n', 2);
  const [love2Header, love2Text] = listingsDetail.whyLove2.split('\n\n', 2);
  const [love3Header, love3Text] = listingsDetail.whyLove3.split('\n\n', 2);

  return (
    <Fragment>
      <Box px={6}>
        <Title2 mt={4} mb={2}>
          Hypothetical Investment
        </Title2>
        {listingsDetail.mdlEquity && (
          <Fragment>
            <Text>
              10 shares for ${formatFinancial(Math.round(listingsDetail.mdlEquity * 0.1))}
            </Text>
            <Caption1 color="gray" mt={4}>
              Targets assume a 10 yr hold
            </Caption1>
          </Fragment>
        )}
        <Box h={6} />
        <HStack overflow="auto" w="100%" spacing={3} alignItems="stretch">
          <Card
            title="TARGET CASH DIST."
            value={(listingsDetail.listingCashDist * 100).toFixed(1) + '%'}
            description={
              listingsDetail.mdlEquity
                ? '$' +
                  formatFinancial(listingsDetail.listingCashDist * listingsDetail.mdlEquity * 0.1) +
                  '/yr'
                : ''
            }
          />
          <Card
            title="TARGET IRR"
            value={(listingsDetail.listingIrr * 100).toFixed(1) + '%'}
            description=""
          />
          {/* TODO: chart */}
        </HStack>
        <Caption1 color="gray" my={4}>
          * See Disclosures Tab for important disclosures regarding target returns
        </Caption1>
        <Box
          p={4}
          mt={6}
          cursor="pointer"
          onClick={() => history.push('/academy/unit/cash-flow')}
          bg={grayBg}
          borderRadius="2xl"
        >
          <Headline mb={2}>Understanding investor cash flow</Headline>
          <Text textStyle="Body2">Understanding listings · 9 slides</Text>
        </Box>
        <Divider my={6} />
        <Title2 mb={6}>Why we love it</Title2>
        <VStack spacing={6} w="100%" align="baseline">
          <Flex>
            <Box mr={4} h={8} w={8}>
              <IconBackground>
                <Icon as={FiMapPin} verticalAlign="text-top" />
              </IconBackground>
            </Box>
            <Box>
              <Headline mb={2}>{love1Header}</Headline>
              <Text color={descColor} fontSize="13px" textStyle="Body1">
                {newlinesToBreaks(love1Text.trim())}
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box mr={4} h={8} w={8}>
              <IconBackground>
                <Icon as={FiDollarSign} verticalAlign="text-top" />
              </IconBackground>
            </Box>
            <Box>
              <Headline mb={2}>{love2Header}</Headline>
              <Text color={descColor} fontSize="13px" textStyle="Body1">
                {newlinesToBreaks(love2Text.trim())}
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box mr={4} h={8} w={8}>
              <IconBackground>
                <Icon as={FiTag} verticalAlign="text-top" />
              </IconBackground>
            </Box>
            <Box>
              <Headline mb={2}>{love3Header}</Headline>
              <Text color={descColor} fontSize="13px" textStyle="Body1">
                {newlinesToBreaks(love3Text.trim())}
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Fragment>
  );
};

/**
 * Turns newlines into <br /> elements in a string.
 */
const newlinesToBreaks = (s: string) => {
  const sParts = s.split('\n');
  return sParts.map((sPart, idx) => (
    <Fragment key={idx}>
      {sPart}
      {idx < sParts.length - 1 && <br />}
    </Fragment>
  ));
};

// eslint-disable-next-line import/no-default-export
export default PerformanceTab;

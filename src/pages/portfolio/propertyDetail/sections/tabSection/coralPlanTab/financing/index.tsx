/* eslint-disable complexity */
// TODO: refactor render function
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import type { IconProps } from '@chakra-ui/react';
import { Box, Circle, Divider, Flex, Icon, useColorModeValue, VStack } from '@chakra-ui/react';

import { Title2 } from '../../../../../../../components/text';
import { formatFinancial } from '../../../../../../../lib/financialFormatter';

type FinancingPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const Financing = ({ propertyDetail }: FinancingPropsT) => {
  // Equity percentage for graphing leverage
  const equityPct: number | null =
    propertyDetail.mdlEquity !== null && propertyDetail.mdlCurrentMortgage !== null
      ? propertyDetail.mdlEquity / (propertyDetail.mdlEquity + propertyDetail.mdlCurrentMortgage)
      : null;

  const eqColor = useColorModeValue('green.900', 'green.700');
  const debtColor = useColorModeValue('green.300', 'green.200');

  return (
    <Box>
      <Box>
        <Title2 my={6}>Financing</Title2>

        {propertyDetail.mdlEquity !== null &&
          propertyDetail.mdlCurrentMortgage !== null &&
          propertyDetail.mdlMortgage !== null &&
          equityPct && (
            <React.Fragment>
              <Flex
                my={4}
                borderRadius="full"
                overflow="hidden"
                h={3}
                justifyContent="space-between"
              >
                <Box bg={eqColor} w={equityPct} />
                <Box bg={debtColor} w={1 - equityPct} />
              </Flex>

              <VStack spacing={1} justifyContent="stretch">
                <Flex w="100%" align="center">
                  <Circle size={2} mr={2} bg={eqColor} />
                  <Box flexGrow={1}>Initial equity</Box>
                  <Box align="right" w="4rem">
                    {(equityPct * 100).toFixed(1)}%
                  </Box>
                  <Box align="right" minW={24} whiteSpace="nowrap">
                    ${formatFinancial(propertyDetail.mdlEquity)}
                  </Box>
                </Flex>

                <Flex w="100%" align="center">
                  <Circle size={2} mr={2} bg={debtColor} />
                  <Box flexGrow={1}>Initial loan</Box>
                  <Box align="right" w="4rem">
                    {((1 - equityPct) * 100).toFixed(1)}%
                  </Box>
                  <Box align="right" minW={24}>
                    ${formatFinancial(propertyDetail.mdlMortgage)}
                  </Box>
                </Flex>

                <Flex fontWeight={600} w="100%">
                  <Box w={3} mr={2} />
                  <Box flexGrow={1}>Total financing</Box>
                  <Box align="right" w="4rem">
                    100.0%
                  </Box>
                  <Box align="right" minW={24}>
                    ${formatFinancial(propertyDetail.mdlMortgage + propertyDetail.mdlEquity)}
                  </Box>
                </Flex>
              </VStack>
              <Divider my={2} />

              <Flex w="100%">
                <Box w={3} mr={2} />
                <Box flexGrow={1}>Outstanding loan balance</Box>

                <Box align="right" minW={24}>
                  ${formatFinancial(propertyDetail.mdlCurrentMortgage)}
                </Box>
              </Flex>
              {/* <Flex alignItems="center" cursor="pointer" mt={6}> */}
              {/*  <Icon as={FiChevronRight} mr={1} /> */}
              {/*  <Text>Learn more about financing</Text> */}
              {/* </Flex> */}
            </React.Fragment>
          )}
        {/* <FlexLightBorder */}
        {/*  justifyContent="space-between" */}
        {/*  alignItems="center" */}
        {/*  px={4} */}
        {/*  py={2} */}
        {/*  my={4} */}
        {/* > */}
        {/*  <Box> */}
        {/*    <Headline>Why Coral participates in equity?</Headline> */}
        {/*    <Text>Crash course</Text> */}
        {/*  </Box> */}
        {/*  <Box> */}
        {/*    <Icon w={6} h={6} as={BsQuestionCircle} /> */}
        {/*  </Box> */}
        {/* </FlexLightBorder> */}
        {/* <Box h={4} /> */}
        {/* <Button colorScheme="secondary" variant="outline" w="100%"> */}
        {/*  Learn more about financing */}
        {/* </Button> */}
      </Box>
    </Box>
  );
};

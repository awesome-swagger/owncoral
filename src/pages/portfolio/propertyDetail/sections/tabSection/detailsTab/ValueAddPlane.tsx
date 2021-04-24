import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';

import { H6, SubTitle1 } from '../../../../../../components/text';
import { DummyData } from '../../../../../../lib/portfolioData';

type ValueAddPlanePropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const ValueAddPlane = ({ propertyDetail }: ValueAddPlanePropsT) => {
  const dummyData = DummyData;
  return (
    <Box>
      <H6>Value-add plan</H6>
      {/* TODO: Table? */}
      <VStack w="100%" align="stretch">
        <Flex justifyContent="space-between">
          <Text>Renovations</Text>
          <Text>{dummyData.renovation}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Maintenance and Repair Reserve</Text>
          <Text>{dummyData.maintenance}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <SubTitle1>Total Capex</SubTitle1>
          <SubTitle1>{dummyData.totalCapex}</SubTitle1>
        </Flex>
      </VStack>
      <Flex my={6}>
        {[1, 2].map((idx) => (
          <Box mx={2} key={idx}>
            <Image src={dummyData.renovationImg} />
            <Text textStyle="caption" textAlign="center">
              {dummyData.updatePlan}
            </Text>
          </Box>
        ))}
      </Flex>
      <SubTitle1>Rental income</SubTitle1>
      <Box my={4}>
        <Flex justifyContent="space-between">
          <Text>Current</Text>
          <Text>{dummyData.currentIncome}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Target</Text>
          <Text>{dummyData.targetIncome}</Text>
        </Flex>
      </Box>

      <Button variant="outline" colorScheme="secondary" w="100%">
        Learn more about the rental income{' '}
      </Button>
    </Box>
  );
};

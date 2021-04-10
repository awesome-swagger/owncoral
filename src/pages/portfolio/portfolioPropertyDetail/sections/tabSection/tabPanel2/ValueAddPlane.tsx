import { Box, Heading, Flex, Image } from '@chakra-ui/react';

export const ValueAddPlane = ({ data }: { data: any }) => (
  <Box>
    <Heading fontSize="lg" fontWeight="bold">
      Value-add plane
    </Heading>
    <Box>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Renovations</Heading>
        <Heading fontSize="md">{data.renovation}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Maintenance and Repair Reserve</Heading>
        <Heading fontSize="md">{data.maintenance}</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md" fontWeight="bold">
          Total Capex
        </Heading>
        <Heading fontSize="md" fontWeight="bold">
          {data.totalCapex}
        </Heading>
      </Flex>
    </Box>
    <Flex className="custom_scroll" overflow="auto" my={6}>
      <Box mx={2}>
        <Image src={data.renovationImg} />
        <Heading fontSize="sm" textAlign="center">
          {data.updatePlan}
        </Heading>
      </Box>
      <Box mx={2}>
        <Image src={data.renovationImg} />
        <Heading fontSize="sm" textAlign="center">
          Update floor plan, including +1 new bathroom in each unit and opening up kitchen to
          living/dining area
        </Heading>
      </Box>
      <Box mx={2}>
        <Image src={data.renovationImg} />
        <Heading fontSize="sm" textAlign="center">
          Update floor plan, including +1 new bathroom in each unit and opening up kitchen to
          living/dining area
        </Heading>
      </Box>
    </Flex>
    <Heading fontSize="md" fontWeight="bold">
      Rental income
    </Heading>
    <Box my={4}>
      <Flex justifyContent="space-between">
        <Heading fontSize="md" mt="0">
          Current
        </Heading>
        <Heading fontSize="md" mt="0">
          {data.currentIncome}
        </Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md" mt="0">
          Target
        </Heading>
        <Heading fontSize="md" mt="0">
          {data.targetIncome}
        </Heading>
      </Flex>
    </Box>
    <Box border="1px" layerStyle="lightBorder" textAlign="center">
      <Heading fontSize="md">Learn more about the rental income </Heading>
    </Box>
  </Box>
);

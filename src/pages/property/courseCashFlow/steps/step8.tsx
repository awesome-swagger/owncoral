import { Box, Icon, Progress, Heading, Button, Flex, Center } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';

export const Step8 = ({
  nextStep,
  prevStep,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Progress value={100} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Takeaways</Heading>

      <Flex>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Heading fontSize="md">1</Heading>
          </Center>
        </Box>
        <Box pl={4}>
          <Heading fontSize="md">Investor cash flow is actual cash</Heading>
          <Heading fontSize="sm">
            It’s deposited into your bank account on a monthly basis and derived from rental
            revenue, realized appreciation, and any unused reserves.
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Heading fontSize="md">2</Heading>
          </Center>
        </Box>
        <Box pl={4}>
          <Heading fontSize="md">It is generally smooth and consistent</Heading>
          <Heading fontSize="sm">While it increase a bit each year</Heading>
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Heading fontSize="md">3</Heading>
          </Center>
        </Box>
        <Box pl={4}>
          <Heading fontSize="md">Cash flow from realized appreciation is generally spiky</Heading>
          <Heading fontSize="sm">
            Larger distributions about one time every 5 years. It comes from the sale of the
            property or through a refinancing/construction earn-out (our bank acknowledges the
            increased property value, and provides incremental debt).
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Heading fontSize="md">4</Heading>
          </Center>
        </Box>
        <Box pl={4}>
          <Heading fontSize="md">It’s extremely tax-efficient as a result of depreciation</Heading>
          <Heading fontSize="sm">
            Most isn't taxed at the income tax rate, but is instead deferred to capital gains (a
            much lower tax rate).
          </Heading>
        </Box>
      </Flex>

      <Button w="calc(100% - 2rem)" pos="absolute" bottom={6} onClick={nextStep}>
        Finish
      </Button>
    </Box>
  );
};

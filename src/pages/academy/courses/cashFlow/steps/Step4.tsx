import type { MouseEventHandler } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Box, Button, Center, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

import { ProgressBar } from '../../../../../components';
import { Title2 } from '../../../../../components/text';
import theme from '../../../../../theme';
import { RealizedAppreciationChart } from '../charts';

export const Step4 = ({
  nextStep,
  prevStep,
  handleClose,
}: {
  nextStep: MouseEventHandler;
  prevStep: MouseEventHandler;
  handleClose: MouseEventHandler;
}) => {
  const recognizedColor = useColorModeValue('#80ECD1', '#F1FAEE');

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Icon as={FiX} cursor="pointer" onClick={handleClose} />
        <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
          3/7
        </Box>
      </Flex>
      <ProgressBar total={7} value={3} />
      <Title2 my={4}>Realized Appreciation</Title2>
      <Text textStyle="Body1" fontWeight="500">
        The second source of cash flow is the appreciation of the property itself.
      </Text>
      <Center w="100%" h={250}>
        <RealizedAppreciationChart />
      </Center>
      <Flex justifyContent="center" mb={4} mt={-6}>
        <Flex alignItems="center">
          <Box mr={2} w={2} h={2} borderRadius="full" bg={recognizedColor} />
          <Text textStyle="Body2">Recognized appreciation</Text>
        </Flex>
      </Flex>
      <Text textStyle="Body2">
        Selling the property is one way to realize the gains from an increase in property value.
        Coral also realizes this appreciation by working with our lender to recognize the increased
        value of the property and increase our loan balance accordingly. This happens in the form of
        a construction earn-out (where we receive additional funds from our lender upon completion
        of construction) or refinancing (a new loan).
      </Text>
      <Button
        colorScheme="white"
        w={10}
        h={10}
        pos="fixed"
        bottom={{ base: '5rem', md: 16 }}
        left={{ base: 4, md: `calc(50vw - ${theme.breakpoints.sm} / 2 + 1rem)` }}
        onClick={prevStep}
      >
        <Icon as={FiChevronLeft} />
      </Button>
      <Button
        w={10}
        h={10}
        pos="fixed"
        bottom={{ base: '5rem', md: 16 }}
        right={{ base: 4, md: `calc(50vw - ${theme.breakpoints.sm} / 2 + 1rem)` }}
        onClick={nextStep}
      >
        <Icon as={FiChevronRight} />
      </Button>
    </Box>
  );
};

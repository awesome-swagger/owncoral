import type { MouseEventHandler } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Box, Button, Center, Flex, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';

import { ProgressBar } from '../../../../../components';
import { Title2 } from '../../../../../components/text';
import theme from '../../../../../theme';
import { OverAllCashChart } from '../charts';

export const Step5 = ({
  nextStep,
  prevStep,
  handleClose,
}: {
  nextStep: MouseEventHandler;
  prevStep: MouseEventHandler;
  handleClose: MouseEventHandler;
}) => {
  const operatingColor = useColorModeValue('#074851', '#48CAE4');
  const recognizedColor = useColorModeValue('#80ECD1', '#F1FAEE');

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Icon as={FiX} cursor="pointer" onClick={handleClose} />
        <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
          4/7
        </Box>
      </Flex>
      <ProgressBar total={7} value={4} />
      <Title2 my={4}>Overall Cash Flow</Title2>
      <Text textStyle="Body1" fontWeight="500">
        The overall cash flow includes distributions that come from both rental revenue and realized
        appreciation, as well as any remaining reserve.
      </Text>
      <Center w="100%" h={250}>
        <OverAllCashChart />
      </Center>
      <Flex justifyContent="space-between" px={2} mb={4} mt={-6}>
        <Flex alignItems="center">
          <Box mr={2} w={2} h={2} borderRadius="full" bg={operatingColor} />
          <Text textStyle="Body2">Operating Cash Flow</Text>
        </Flex>
        <Flex alignItems="center">
          <Box mr={2} w={2} h={2} borderRadius="full" bg={recognizedColor} />
          <Text textStyle="Body2">Recognized appreciation</Text>
        </Flex>
      </Flex>
      <Text textStyle="Body2">
        The overall cash flow includes distributions that come from both rental revenue and realized
        appreciation, as well as any remaining reserve.
      </Text>
      <Link>
        <Text textStyle="Body1" mt={4}>
          Learn more on depreciation
        </Text>
      </Link>

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

import type { MouseEventHandler } from 'react';
import {
  Box,
  Icon,
  Progress,
  Button,
  Center,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

import { Title2 } from '../../../../../components/text';
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
      <Progress value={45} my={6} colorScheme="primary" borderRadius="full" size="sm" />
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
      <Button w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
        <Icon as={BsChevronLeft} />
      </Button>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};

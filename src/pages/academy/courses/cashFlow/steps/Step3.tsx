import type { MouseEventHandler } from 'react';
import {
  Box,
  Icon,
  Progress,
  Button,
  Center,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

import { Title2 } from '../../../../../components/text';
import { RentalRevenueChart } from '../charts';

export const Step3 = ({
  nextStep,
  prevStep,
  handleClose,
}: {
  nextStep: MouseEventHandler;
  prevStep: MouseEventHandler;
  handleClose: MouseEventHandler;
}) => {
  const operatingColor = useColorModeValue('#074851', '#48CAE4');

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Icon as={FiX} cursor="pointer" onClick={handleClose} />
        <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
          2/7
        </Box>
      </Flex>
      <Progress value={30} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Title2 my={4}>Rental revenue</Title2>
      <Text textStyle="Body1" fontWeight="500">
        Rental revenue is the first way to make money with Coral properties. Rent is collected from
        tenants, and expenses are paid. What remains is the profit.
      </Text>

      <Center w="100%" h={250}>
        <RentalRevenueChart />
      </Center>
      <Flex justifyContent="center" mb={4} mt={-6}>
        <Flex alignItems="center">
          <Box mr={2} w={2} h={2} borderRadius="full" bg={operatingColor} />
          <Text textStyle="Body2">Operating Cash Flow</Text>
        </Flex>
      </Flex>

      <Text textStyle="Body2">
        Cash flow derived from rental revenue typically looks pretty smooth for Coral properties,
        growing year over year as a result of renovations or general market trends (annual
        increases), or improved operational efficiencies. Occasionally, we may plan for vacancies so
        that we can renovate units.
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

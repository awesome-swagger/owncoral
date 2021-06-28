import type { MouseEventHandler } from 'react';
import { Box, Icon, Button, Flex, Text } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft, BsGraphUp } from 'react-icons/bs';
import { Title2, Headline } from '../../../../../components/text';
import { ProgressBar } from '../../../../../components';
import { FiX } from 'react-icons/fi';
import { HiOutlineCash } from 'react-icons/hi';

export const Step2 = ({
  nextStep,
  prevStep,
  handleClose,
}: {
  nextStep: MouseEventHandler;
  prevStep: MouseEventHandler;
  handleClose: MouseEventHandler;
}) => (
  <Box>
    <Flex justifyContent="space-between" alignItems="center">
      <Icon as={FiX} cursor="pointer" onClick={handleClose} />
      <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
        1/7
      </Box>
    </Flex>
    <ProgressBar total={7} value={1} />
    <Title2 my={4}>Where does Investor Cash Flow comes from?</Title2>
    <Text textStyle="Body1" fontWeight="500">
      The cash flow is derived from these sources:
    </Text>
    <Box my={6}>
      <Flex mb={4}>
        <Box>
          <Icon
            p={2}
            h={10}
            w={10}
            borderRadius="xl"
            layerStyle="selectionBox"
            as={HiOutlineCash}
          />
        </Box>
        <Box ml={4}>
          <Headline>Rental Revenue</Headline>
          <Text textStyle="Body2">tenants pay rent</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Icon p={2} h={10} w={10} borderRadius="xl" layerStyle="selectionBox" as={BsGraphUp} />
        </Box>
        <Box ml={4}>
          <Headline>Realized Appreciation</Headline>
          <Text textStyle="Body2">
            The property increases in value, and we choose to return cash to investors through a
            higher loan balance.
          </Text>
        </Box>
      </Flex>
    </Box>
    <Box layerStyle="selectionBox" borderRadius="2xl" p={4} mt={8}>
      <Headline>Note</Headline>
      <Text textStyle="Body2">
        At the sale of the property, you&#39;ll also receive (as a part of your cash flow) any
        unused cash that had been reserved to cover specific cash outflows, such as maintenance and
        repair.
      </Text>
    </Box>
    <Button colorScheme="white" w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
      <Icon as={BsChevronLeft} />
    </Button>
    <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
      <Icon as={BsChevronRight} />
    </Button>
  </Box>
);

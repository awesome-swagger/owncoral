import type { MouseEventHandler } from 'react';
import { Box, Icon, Image, Button, Center, Text } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { Title2 } from '../../../../../components/text';
import Frame from '../../../../../assets/Frame614.png';

export const Step1 = ({
  handleClose,
  nextStep,
}: {
  handleClose: MouseEventHandler;
  nextStep: MouseEventHandler;
}) => (
  <Box h="100%">
    <Icon as={FiX} cursor="pointer" onClick={handleClose} />
    <Center flexDirection="column" textAlign="center" h="100%">
      <Image src={Frame} alt="frame" />
      <Title2 my={4}>What is investor cash flow?</Title2>
      <Text textStyle="Body1">
        Investor cash flow is the amount of profit you bring in each month from property operation,
        and occasionally appreciation realization. It is actual cash that goes straight to your bank
        account (distributed monthly).
      </Text>
    </Center>
    <Button pos="absolute" bottom={6} left={4} w="calc(100% - 2rem)" onClick={nextStep}>
      Let’s dig in
    </Button>
  </Box>
);

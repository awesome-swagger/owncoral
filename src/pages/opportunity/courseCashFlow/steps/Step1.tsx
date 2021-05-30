import type React from 'react';
import { Box, Icon, Image, Heading, Button, Center } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import Frame from '../../../../assets/Frame614.png';

export const Step1 = ({
  handleClose,
  nextStep,
}: {
  handleClose: React.MouseEventHandler;
  nextStep: React.MouseEventHandler;
}) => {
  return (
    <Box h="100%">
      <Icon as={IoMdClose} cursor="pointer" onClick={handleClose} />
      <Center flexDirection="column" textAlign="center" h="100%">
        <Image src={Frame} alt="frame" />
        <Heading fontSize="2xl">What is investor cash flow?</Heading>
        <Heading fontSize="md">
          Investor cash flow is the amount of profit you bring in each month from property
          operation, and occasionally appreciation realization. It is actual cash that goes straight
          to your bank account (distributed monthly).
        </Heading>
      </Center>
      <Button pos="absolute" bottom={6} left={4} w="calc(100% - 2rem)" onClick={nextStep}>
        Let’s dig in
      </Button>
    </Box>
  );
};

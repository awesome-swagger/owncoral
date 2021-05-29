import type React from 'react';
import { Box, Icon, Progress, Heading, Button, Center, Flex, Link } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { OverAllCashChart } from '../charts';
import { IoMdClose } from 'react-icons/io';

export const Step5 = ({
  nextStep,
  prevStep,
  handleClose,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
  handleClose: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Icon as={IoMdClose} cursor="pointer" onClick={handleClose} />
        <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
          4/7
        </Box>
      </Flex>
      <Progress value={60} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Overall Cash Flow</Heading>
      <Heading fontSize="md">
        The overall cash flow includes distributions that come from both rental revenue and realized
        appreciation, as well as any remaining reserve (unused cash that had been reserved).
      </Heading>
      <Center w="100%" h={200}>
        <OverAllCashChart />
      </Center>
      <Heading fontSize="sm">
        You’ll notice that the very little cash flow comes in the form of income — this is by
        design. Income tax is the highest tax rate, and thus the least desirable one.
      </Heading>
      <Link>Learn more on depreciation</Link>

      <Button w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
        <Icon as={BsChevronLeft} />
      </Button>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};

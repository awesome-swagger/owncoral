import type React from 'react';
import { Box, Icon, Progress, Heading, Button } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { BsChevronRight } from 'react-icons/bs';

export const Step1 = ({
  handleClose,
  nextStep,
}: {
  handleClose: React.MouseEventHandler;
  nextStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={IoMdClose} cursor="pointer" onClick={handleClose} />
      <Progress value={12} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">What is investor cash flow?</Heading>
      <Heading fontSize="md">
        Investor cash flow is the amount of profit you bring in each month from property operation,
        and occasionally appreciation realization.
      </Heading>
      <Heading fontSize="md">
        It is actual cash that goes straight to your bank account (distributed monthly). You can do
        what you want with it: supplement or replace your earned income, or accumulate so you can
        invest in another property (for optimal compounding).
      </Heading>
      <Heading fontSize="md">
        We&#39;ll walk through where the cash comes from, what the cash flow looks like from each
        source, and how it&#39;s taxed (tldr: it&#39;s extremely tax efficient!).
      </Heading>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};

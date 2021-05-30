import type React from 'react';
import { Box, Icon, Progress, Heading, Button, Flex } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft, BsGraphUp } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineCash } from 'react-icons/hi';

export const Step2 = ({
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
          1/7
        </Box>
      </Flex>
      <Progress value={15} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Where does the cash flow come from?</Heading>
      <Heading fontSize="md">The cash flow is derived from these sources:</Heading>
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
          <Heading fontSize="md">Rental Revenue</Heading>
          <Heading fontSize="sm">tenants pay rent</Heading>
        </Box>
      </Flex>
      <Flex mb={4}>
        <Box>
          <Icon p={2} h={10} w={10} borderRadius="xl" layerStyle="selectionBox" as={BsGraphUp} />
        </Box>
        <Box ml={4}>
          <Heading fontSize="md">Realized Appreciation</Heading>
          <Heading fontSize="sm">
            The property increases in value, and we choose to return cash to investors through a
            higher loan balance.
          </Heading>
        </Box>
      </Flex>
      <Box layerStyle="selectionBox" p={4}>
        <Heading fontSize="sm" m="0">
          Note: at the sale of the property, you&#39;ll also receive (as a part of your cash flow)
          any unused cash that had been reserved to cover specific cash outflows, such as
          maintenance and repair.
        </Heading>
      </Box>
      <Button w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
        <Icon as={BsChevronLeft} />
      </Button>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};

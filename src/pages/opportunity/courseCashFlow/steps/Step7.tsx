import type React from 'react';
import { Box, Icon, Progress, Heading, Button, Center, Flex } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { TotalReturnChart } from '../charts';
import { IoMdClose } from 'react-icons/io';

export const Step7 = ({
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
          6/7
        </Box>
      </Flex>
      <Progress value={87} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Total Return</Heading>
      <Heading fontSize="md">
        The total return shows you what’s taxable, and at what rate. Capital gains tax is a much
        lower rate than income tax -
      </Heading>
      <Heading fontSize="sm">
        The expenses and depreciation of the building are tax write-offs that offset the rental
        revenue of the property. This means that you&#39;ll likely pay very little (if any) income
        tax on your cash flow.
      </Heading>
      <Heading fontSize="sm">
        The expenses and depreciation of the building are tax write-offs that offset the rental
        revenue of the property. This means that you&#39;ll likely pay very little (if any) income
        tax on your cash flow.
      </Heading>
      <Flex
        p={4}
        w="fit-content"
        textAlign="left"
        boxShadow="base"
        borderRadius="2xl"
        background="inherit"
        position="relative"
        flexDirection="column"
        left="50%"
        top={6}
      >
        <Heading fontSize="xs" m="0">
          TAXABLE INCOME
        </Heading>
        <Heading fontSize="md" fontWeight="bold" m="0" pos="relative">
          $3k
        </Heading>
      </Flex>
      <Center w="100%" h="200px">
        <Heading pos="absolute" fontSize="2xl" fontWeight="bold">
          $181
        </Heading>
        <TotalReturnChart />
      </Center>
      <Flex justifyContent="space-between" pos="relative" top="-65px" px={4}>
        <Box
          top={-6}
          p={4}
          w="fit-content"
          textAlign="left"
          boxShadow="base"
          borderRadius="2xl"
          background="inherit"
          position="relative"
          flexDirection="column"
        >
          <Heading fontSize="xs" m="0">
            CAPITAL GAINS
          </Heading>
          <Heading fontSize="md" fontWeight="bold" m="0">
            $78k
          </Heading>
        </Box>
        <Box
          p={4}
          w="fit-content"
          textAlign="left"
          boxShadow="base"
          borderRadius="2xl"
          background="inherit"
          position="relative"
          flexDirection="column"
        >
          <Heading fontSize="xs" m="0">
            RETURN OF CAPITAL
          </Heading>
          <Heading fontSize="md" fontWeight="bold" m="0">
            $10k
          </Heading>
        </Box>
      </Flex>
      <Button w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
        <Icon as={BsChevronLeft} />
      </Button>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};

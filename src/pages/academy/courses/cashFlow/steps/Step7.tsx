import type { MouseEventHandler } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Box, Button, Center, Flex, Icon, Text } from '@chakra-ui/react';

import { ProgressBar } from '../../../../../components';
import { Subhead,Title2 } from '../../../../../components/text';
import theme from '../../../../../theme';
import { TotalReturnChart } from '../charts';

export const Step7 = ({
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
        6/7
      </Box>
    </Flex>
    <ProgressBar total={7} value={6} />
    <Title2 my={4}>Total Return</Title2>
    <Text textStyle="Body1" fontWeight="500">
      The total return shows you what’s taxable, and at what rate. Capital gains tax is a much lower
      rate than income tax.
    </Text>
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
      <Subhead>TAXABLE INCOME</Subhead>
      <Subhead fontWeight="bold">$3k</Subhead>
    </Flex>
    <Center w="100%" h="220px">
      <Title2 pos="absolute">$181</Title2>
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
        <Subhead>CAPITAL GAINS</Subhead>
        <Subhead fontWeight="bold">$78k</Subhead>
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
        <Subhead m="0">RETURN OF CAPITAL</Subhead>
        <Subhead fontWeight="bold">$100k</Subhead>
      </Box>
    </Flex>
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

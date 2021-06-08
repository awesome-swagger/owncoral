import type React from 'react';
import { Box, Icon, Progress, Button, Center, Flex, Text } from '@chakra-ui/react';
import { Title2, Subhead } from '../../../../components/text';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';
import { TotalReturnChart } from '../charts';

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
        <Icon as={FiX} cursor="pointer" onClick={handleClose} />
        <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
          6/7
        </Box>
      </Flex>
      <Progress value={87} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Title2 my={4}>Total Return</Title2>
      <Text textStyle="Body1" fontWeight="500">
        The total return shows you what’s taxable, and at what rate. Capital gains tax is a much
        lower rate than income tax.
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
          <Subhead fontWeight="bold">$10k</Subhead>
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

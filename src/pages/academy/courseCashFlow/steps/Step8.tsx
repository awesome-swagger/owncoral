import type React from 'react';
import { Box, Icon, Progress, Button, Flex, Center, Text } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

import { Title2 } from '../../../../components/text';

export const Step8 = ({
  nextStep,
  prevStep,
  handleClose,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
  handleClose: React.MouseEventHandler;
}) => (
  <Box>
    <Flex justifyContent="space-between" alignItems="center">
      <Icon as={FiX} cursor="pointer" onClick={handleClose} />
      <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
        7/7
      </Box>
    </Flex>
    <Progress value={100} my={6} colorScheme="primary" borderRadius="full" size="sm" />
    <Title2 my={4}>Takeaways</Title2>
    <Box my={4}>
      <Flex mt={4}>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Title2>1</Title2>
          </Center>
        </Box>
        <Box pl={4}>
          <Text textStyle="Body1" fontWeight="600">
            Investor cash flow is actual cash disbursed to investors
          </Text>
          <Text mt={2} textStyle="Body2">
            It’s deposited into your bank account on a monthly basis and derived from rental
            revenue, realized appreciation, and any unused reserves.
          </Text>
        </Box>
      </Flex>
      <Flex mt={4}>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Title2>2</Title2>
          </Center>
        </Box>
        <Box pl={4}>
          <Text textStyle="Body1" fontWeight="600">
            It comes from two main sources
          </Text>
          <Text mt={2} textStyle="Body2">
            <span style={{ fontWeight: 600 }}>Rental revenue:</span> which typically creates
            smooth and consistent cash flow (increasing a bit each year).
          </Text>
          <Text mt={2} textStyle="Body2">
            <span style={{ fontWeight: 600 }}>Realized appreciation:</span> which typically
            generally spiky cash flow (larger distributions about one time every 5 years from
            refinancing/construction earn-out or the sale of the property)
          </Text>
        </Box>
      </Flex>
      <Flex mt={4}>
        <Box>
          <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
            <Title2>3</Title2>
          </Center>
        </Box>
        <Box pl={4}>
          <Text textStyle="Body1" fontWeight="600">
            It is extremely tax-efficient
          </Text>
          <Text mt={2} textStyle="Body2">
            Thanks to depreciation; most isn’t taxed at the income tax rate, but is instead
            deferred to capital gains (a much lower tax rate).
          </Text>
        </Box>
      </Flex>
    </Box>
    <Button w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
      <Icon as={BsChevronLeft} />
    </Button>
    <Button h={10} pos="absolute" right={4} bottom={6} onClick={nextStep}>
      Finish
    </Button>
  </Box>
);

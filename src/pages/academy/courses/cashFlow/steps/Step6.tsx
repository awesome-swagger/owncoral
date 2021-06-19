import type { MouseEventHandler } from 'react';
import { Box, Icon, Progress, Button, Image, Flex, Text } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';

import { Title2 } from '../../../../../components/text';
import ChartImg from '../../../../../assets/Frame331.png';

export const Step6 = ({
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
        5/7
      </Box>
    </Flex>
    <Progress value={75} my={6} colorScheme="primary" borderRadius="full" size="sm" />

    <Title2 fontSize="2xl" my={4}>
      Tax efficiency
    </Title2>
    <Text textStyle="Body1" fontWeight="500">
      Real estate is extremely tax efficient, and Coral passes all these benefits to the investor.{' '}
    </Text>
    <Text textStyle="Body2" my={4}>
      The expenses and depreciation of the building are tax write-offs that offset the rental
      revenue of the property. This means that you&apos;ll likely pay very little (if any) income
      tax on your cash flow.
    </Text>
    <Image w="100%" src={ChartImg} alt="chart" />
    <Text textStyle="Body2">
      We do all this for you — so the tax flow chart shows non-taxable income as &ldquo;return of
      capital&rdquo; and other taxable income as &ldquo;income&rdquo;. The tax form (a K-1) we
      provide you with each year also reflects this reality.
    </Text>
    <Button w={10} h={10} pos="absolute" bottom={6} left={4} onClick={prevStep}>
      <Icon as={BsChevronLeft} />
    </Button>
    <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
      <Icon as={BsChevronRight} />
    </Button>
  </Box>
);

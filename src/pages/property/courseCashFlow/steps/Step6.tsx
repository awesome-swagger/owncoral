import type React from 'react';
import { Box, Icon, Progress, Heading, Button, Image } from '@chakra-ui/react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import ChartImg from '../../../../assets/Frame331.png';

export const Step6 = ({
  nextStep,
  prevStep,
}: {
  nextStep: React.MouseEventHandler;
  prevStep: React.MouseEventHandler;
}) => {
  return (
    <Box>
      <Icon as={BsChevronLeft} cursor="pointer" onClick={prevStep} />
      <Progress value={75} my={6} colorScheme="primary" borderRadius="full" size="sm" />
      <Heading fontSize="sm" m="0">
        Understanding investor Cash Flow
      </Heading>
      <Heading fontSize="2xl">Tax efficiency</Heading>
      <Heading fontSize="md">
        Real estate is extremely tax efficient, and Coral passes all these benefits to the investor.
      </Heading>
      <Heading fontSize="sm">
        The expenses and depreciation of the building are tax write-offs that offset the rental
        revenue of the property. This means that you&#39;ll likely pay very little (if any) income tax
        on your cash flow.
      </Heading>
      <Image w="100%" src={ChartImg} alt="chart" />
      <Heading fontSize="sm">
        The expenses and depreciation of the building are tax write-offs that offset the rental
        revenue of the property. This means that you&#39;ll likely pay very little (if any) income tax
        on your cash flow.
      </Heading>
      <Button w={10} h={10} pos="absolute" bottom={6} right={4} onClick={nextStep}>
        <Icon as={BsChevronRight} />
      </Button>
    </Box>
  );
};

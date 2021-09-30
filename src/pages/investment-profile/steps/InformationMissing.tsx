import { forwardRef } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import { BackBtn, FlexContainer } from '../../../components';
import type { DivRef } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const InformationMissing = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => (
    <FlexContainer ref={ref}>
      <BackBtn handleClick={prevStep} top={6} left={6} pos="absolute" />
      <Box h={40} w={40} borderRadius="50%" bg="gray.200" />
      <Heading size="md" mt={8} textAlign="center">
        Some personal information is missing
      </Heading>
      <Text fontSize="md" m="0" textAlign="center">
        Before making an investing, we need you to provide us some personal information.
      </Text>
      <Button
        pos="absolute"
        bottom={16}
        mb={2}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        cursor="pointer"
        onClick={nextStep}
      >
        Complete information
      </Button>
      <Button
        pos="absolute"
        bottom={4}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        bg="fff"
        colorScheme="gray"
        variant="outline"
        cursor="pointer"
      >
        Skip for now
      </Button>
    </FlexContainer>
  )
);

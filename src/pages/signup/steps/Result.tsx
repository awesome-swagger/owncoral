import { forwardRef } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { BackBtn, FlexContainer, HeadingTypography, TextTypography } from '../../../components';
import type { DivRef } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
export const Result = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  return (
    <Box ref={ref} layerStyle="noSelect">
      <FlexContainer>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
        <HeadingTypography as="h4" size="md" mt={8} color="primary.highlight">
          Thanks for joining Coral
        </HeadingTypography>
        <TextTypography fontSize="sm" color="gray.500" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TextTypography>
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          onClick={nextStep}
          w="calc(100% - 3rem)"
          h={12}
          colorScheme="primary"
        >
          Start
        </Button>
      </FlexContainer>
    </Box>
  );
});

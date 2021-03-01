import { forwardRef } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { BackBtn, FlexContainer, HeadingTypography, TextTypography } from '../../../components';
import type { DivRef } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const WelcomeCoral = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    return (
      <Box ref={ref} layerStyle="noSelect">
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
          <HeadingTypography size="md" as="h4" mt={8} textAlign="center">
            Welcome to Coral, John Doe!
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="center">
            On the following screens, we are going to ask you a few questions to get you better.
            There are no good/bad answers.
          </TextTypography>
          <Button
            pos="absolute"
            bottom={10}
            left={6}
            w="calc(100% - 3rem)"
            h={12}
            cursor="pointer"
            colorScheme="primary"
            onClick={nextStep}
          >
            Continue
          </Button>
        </FlexContainer>
      </Box>
    );
  },
);

import { forwardRef, useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { BackBtn, FlexContainer, HeadingTypography, TextTypography } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const InformationMissing = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
          <HeadingTypography size="md" mt={8} textAlign="center">
            Some personal information is missing
          </HeadingTypography>
          <TextTypography fontSize="md" m="0" textAlign="center">
            Before making an investing, we need you to provide us some personal information.
          </TextTypography>
          <Button
            pos="absolute"
            bottom={16}
            mb={2}
            left={6}
            w="calc(100% - 3rem)"
            h={12}
            bg="#4E504F"
            color="#fff"
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
            color="#4E504F"
            cursor="pointer"
          >
            Skip for now
          </Button>
        </FlexContainer>
      </div>
    );
  },
);

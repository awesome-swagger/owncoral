import { forwardRef, useContext } from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import { BackBtn, FlexContainer } from '../../../components';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

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
          <Box h="10rem" w="10rem" borderRadius="50%" bg="#d2d2d1" />
          <Heading size="md" mt="2rem" letterSpacing="normal" textAlign="center">
            Some personal information is missing
          </Heading>
          <Text fontSize="1rem" m="0 !important" textAlign="center">
            Before making an investing, we need you to provide us some personal information.
          </Text>
          <Button
            pos="absolute"
            bottom="6.25rem"
            left="1.5rem"
            w="calc(100% - 3rem)"
            h="3rem"
            bg="#4E504F"
            color="#fff"
            cursor="pointer"
            onClick={nextStep}
          >
            Complete information
          </Button>
          <Button
            pos="absolute"
            bottom="2.5rem"
            left="1.5rem"
            w="calc(100% - 3rem)"
            h="3rem"
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

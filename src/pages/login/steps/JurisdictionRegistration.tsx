import { forwardRef, useContext } from 'react';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Button, Text } from '@chakra-ui/react';
import type { DivRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const JurisdictionRegistration = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Which is the jurisdiction of registration
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            onClick={nextStep}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  },
);

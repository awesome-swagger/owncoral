import { forwardRef, useContext } from 'react';
import { StepFormContext } from '../steps';
import { Heading, Input, Text, Button } from '@chakra-ui/react';
import { Container } from '../../../components/container';
import { BackBtn } from '../../../components/backBtn';
import type { DivRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityAddress = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" letterSpacing="normal">
            What’s your Entity address?
          </Heading>
          <Text fontSize="1rem" m="0 !important">
            Lorem ipsum dolor sir amet
          </Text>
          <Input placeholder="Residental Address" h="48px" bg="#F3F3F3" mt="32px" />
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            cursor="pointer"
            onClick={nextStep}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  },
);

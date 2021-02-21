import { Box, Button, Heading,Text } from '@chakra-ui/react';
import { forwardRef } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { FlexContainer } from '../../../components/container';
import type { DivRef } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const WelcomeCoral = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    return (
      <div ref={ref}>
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
          <Heading size="md" mt="32px" letterSpacing="normal">
            Welcome to Coral, John Doe!
          </Heading>
          <Text fontSize="1rem" m="0 !important" textAlign="center">
            On the following screens, we are going to ask you a few questions to get you better.
            There are no good/bad answers.
          </Text>
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
        </FlexContainer>
      </div>
    );
  },
);

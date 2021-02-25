import { forwardRef } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../components/backBtn';
import { FlexContainer } from '../../../components/container';
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
          <Box h="10rem" w="10rem" borderRadius="50%" bg="#d2d2d1" />
          <Heading size="md" as="h4" mt="2rem">
            Welcome to Coral, John Doe!
          </Heading>
          <Text fontSize="1rem" textAlign="center">
            On the following screens, we are going to ask you a few questions to get you better.
            There are no good/bad answers.
          </Text>
          <Button
            pos="absolute"
            bottom="2.5rem"
            left="1.5rem"
            w="calc(100% - 3rem)"
            h="3rem"
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

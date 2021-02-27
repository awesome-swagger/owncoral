import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { forwardRef } from 'react';

import { BackBtn, FlexContainer } from '../../../components';
import type { DivRef } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const VerifyEmail = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    return (
      <Box ref={ref} layerStyle="noSelect">
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />

          <Box h="10rem" w="10rem" borderRadius="50%" bg="#d2d2d1" />
          <Heading size="md" as="h4" mt="2rem">
            Please verify your email address
          </Heading>
          <Text fontSize="1rem" textAlign="center">
            An email has been sent to <b>johndoe@gmail.com</b>. Please follow the instructions in
            the verification email to finish creating your Coral account.
          </Text>

          <Text
            pos="absolute"
            bottom="6.25rem"
            left="1.5rem"
            w="calc(100% - 3rem)"
            fontSize="0.85rem"
            textAlign="center"
          >
            Didn’t receive an email?
          </Text>
          <Button
            pos="absolute"
            bottom="2.5rem"
            left="1.5rem"
            w="calc(100% - 3rem)"
            h="3rem"
            variant="outline"
            onClick={nextStep}
          >
            Resend verification email
          </Button>
        </FlexContainer>
      </Box>
    );
  },
);

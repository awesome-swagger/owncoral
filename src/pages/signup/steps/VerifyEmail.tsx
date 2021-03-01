import { Box, Button } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { BackBtn, FlexContainer, HeadingTypography, TextTypography } from '../../../components';
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
          <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
          <HeadingTypography size="md" as="h4" mt={8} textAlign="center">
            Please verify your email address
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="center">
            An email has been sent to <b>johndoe@gmail.com</b>. Please follow the instructions in
            the verification email to finish creating your Coral account.
          </TextTypography>

          <TextTypography
            pos="absolute"
            bottom={24}
            left={6}
            w="calc(100% - 3rem)"
            fontSize="sm"
            textAlign="center"
          >
            Didn’t receive an email?
          </TextTypography>
          <Button
            pos="absolute"
            bottom={10}
            left={6}
            w="calc(100% - 3rem)"
            h={12}
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

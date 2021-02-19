import { forwardRef } from "react";
import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";
import { FlexContainer } from "../../../components/container";
import type { DivRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const VerifyEmail = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    return (
      <div ref={ref}>
        <FlexContainer>
          <Box
            pos="absolute"
            top="24px"
            left="24px"
            h="16px"
            w="16px"
            cursor="pointer"
            onClick={() => prevStep()}
          >
            <Image src={Chevron} />
          </Box>
          <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
          <Heading as="h1" size="md" mt="32px" letterSpacing="normal">
            Please verify your email address
          </Heading>
          <Text fontSize="15px" m="0 !important" textAlign="center">
            An email has been sent to <b>johndoe@gmail.com</b>. Please follow
            the instructions in the verification email to finish creating your
            Coral account.
          </Text>

          <Text
            pos="absolute"
            bottom="106px"
            left="24px"
            w="calc(100% - 48px)"
            fontSize="13px"
            m="0 !important"
            textAlign="center"
          >
            Didn’t receive an email?
          </Text>
          <Button
            border="1px solid #4E504F"
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="transparent"
            color="#4E504F"
            onClick={nextStep}
          >
            Resend verification email
          </Button>
        </FlexContainer>
      </div>
    );
  }
);

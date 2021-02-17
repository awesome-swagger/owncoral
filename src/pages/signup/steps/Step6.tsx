/** @jsxRuntime classic */
import React from "react";
import { Box, Button, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step6: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Flex
      pos="relative"
      p="24px"
      m="0"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
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
      <Heading as="h1" size="md" mt="32px">
        Please verify your email address
      </Heading>
      <Text fontSize="15px" m="0 !important">
        An email has been sent to <b>johndoe@gmail.com</b>. Please follow the
        instructions in the verification email to finish creating your Coral
        account.
      </Text>

      <Text
        pos="absolute"
        bottom="106px"
        left="24px"
        w="calc(100% - 48px)"
        fontSize="13px"
        m="0 !important"
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
    </Flex>
  );
};

export default Step6;

/** @jsxRuntime classic */
import React from "react";
import { Box, Flex, Text, Button, Heading, Image } from "@chakra-ui/react";
import Chevron from "../../../../assets/chevron.png";
type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step7: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
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
        Welcome to Coral, John Doe!
      </Heading>
      <Text fontSize="15px" m="0 !important">
        On the following screens, we are going to ask you a few questions to get
        you better. There are no good/bad answers.
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
    </Flex>
  );
};

export default Step7;

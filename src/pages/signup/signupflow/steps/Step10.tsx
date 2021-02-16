/** @jsxRuntime classic */
import React from "react";
import { Box, Progress, Heading } from "@chakra-ui/react";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step10: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Box p="24px" m="0" w="100%" h="100vh">
      <Progress colorScheme="gray" size="sm" value={66} />

      <Heading as="h1" size="md" mt="32px" mb="8px" textAlign="left">
        How much investment experience do you have?
      </Heading>
      <Box
        px="24px"
        py="12px"
        mt="8px"
        bg="#F3F3F3"
        color="4E504F"
        textAlign="left"
        cursor="pointer"
        onClick={nextStep}
      >
        Lorem ipsum
      </Box>
      <Box
        px="24px"
        py="12px"
        mt="8px"
        bg="#F3F3F3"
        color="4E504F"
        textAlign="left"
        cursor="pointer"
        onClick={nextStep}
      >
        Lorem ipsum
      </Box>
      <Box
        px="24px"
        py="12px"
        mt="8px"
        bg="#F3F3F3"
        color="4E504F"
        textAlign="left"
        cursor="pointer"
        onClick={nextStep}
      >
        Lorem ipsum
      </Box>
      <Box
        px="24px"
        py="12px"
        mt="8px"
        bg="#F3F3F3"
        color="4E504F"
        textAlign="left"
        cursor="pointer"
        onClick={nextStep}
      >
        Lorem ipsum
      </Box>
    </Box>
  );
};
export default Step10;

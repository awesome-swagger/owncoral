/** @jsxRuntime classic */
import React, { useState } from "react";
import { Box, Button, Heading, Text, Input, Image } from "@chakra-ui/react";

import Chevron from "../../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step2: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Box p="24px" m="0" w="100%" h="100vh">
      <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
        <Image src={Chevron} />
      </Box>
      <Heading as="h1" size="md" mt="32px" mb="8px" textAlign="left">
        What’s your full name?
      </Heading>
      <Text fontSize="15px" textAlign="left" m="0 !important">
        Lorem ipsum dolor sir
      </Text>
      <Input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        h="48px"
        bg="#F3F3F3"
        mt="32px"
      />
      <Input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        h="48px"
        bg="#F3F3F3"
        mt="32px"
      />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        onClick={nextStep}
        disabled={firstName === "" || lastName === ""}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Step2;

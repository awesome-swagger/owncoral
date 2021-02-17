/** @jsxRuntime classic */
import React from "react";
import { Box, Heading, Button, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";
import DayPicker from "../../../components/daypicker";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step3: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Box p="24px" m="0" w="100%" h="100vh">
      <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
        <Image src={Chevron} />
      </Box>
      <Heading as="h1" size="md" mt="32px" mb="8px" textAlign="left">
        When is your Birthday?
      </Heading>
      <DayPicker />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        onClick={nextStep}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Step3;

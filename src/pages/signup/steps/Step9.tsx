// import React from "react";
import { Progress, Heading, Box, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step9: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Box p="24px" m="0" w="100%" h="100vh">
      <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
        <Image src={Chevron} />
      </Box>
      <Progress mt="32px" colorScheme="gray" size="sm" value={33} />

      <Heading as="h1" size="md" mt="32px" mb="8px" textAlign="left">
        How much is your net worth
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
        $500k or less
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
        $500k - $1m
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
        $1m - $3m
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
        $3m - $5m
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
        $10m or more
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
        I prefer not to say
      </Box>
    </Box>
  );
};

export default Step9;

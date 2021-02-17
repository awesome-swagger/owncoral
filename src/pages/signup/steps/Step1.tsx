import React, { useState } from "react";
import {
  Heading,
  Box,
  Text,
  Input,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";
type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step1: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const [available, setAvailable] = useState<string>("Available");

  return (
    <div>
      {available === "Available" ? (
        <Box p="24px" m="0" w="100%" h="100vh">
          <Box h="16px" w="16px" cursor="pointer" onClick={prevStep}>
            <Image src={Chevron} />
          </Box>
          <Heading
            letterSpacing="normal"
            as="h1"
            size="md"
            mt="32px"
            mb="24px"
            textAlign="left"
          >
            Are you a U.S resident?
          </Heading>
          <Box
            px="24px"
            py="12px"
            mt="8px"
            bg="#F3F3F3"
            color="4E504F"
            textAlign="left"
            cursor="pointer"
            onClick={() => nextStep()}
          >
            Yes
          </Box>
          <Box
            px="24px"
            py="12px"
            mt="8px"
            bg="#F3F3F3"
            color="4E504F"
            textAlign="left"
            cursor="pointer"
            onClick={() => setAvailable("taxID")}
          >
            I have tax ID
          </Box>
          <Box
            px="24px"
            py="12px"
            mt="8px"
            bg="#F3F3F3"
            color="4E504F"
            textAlign="left"
            cursor="pointer"
            onClick={() => setAvailable("notAvailable")}
          >
            No
          </Box>
        </Box>
      ) : available === "taxID" ? (
        <TaxID nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <NotAvailable nextStep={nextStep} prevStep={prevStep} />
      )}
    </div>
  );
};

const TaxID = ({ nextStep, prevStep }: stepProps) => {
  const [taxID, setTaxID] = useState<string>("");
  return (
    <Box p="24px" m="0" w="100%" h="100vh" pos="relative">
      <Box h="16px" w="16px" cursor="pointer">
        <Image src={Chevron} />
      </Box>
      <Heading
        as="h1"
        size="md"
        mt="32px"
        mb="8px"
        textAlign="left"
        letterSpacing="normal"
      >
        Please enter your Tax ID
      </Heading>
      <Text fontSize="15px" textAlign="left">
        Lorem ipsum dolor sir
      </Text>
      <Input
        placeholder="XX-XXXXXXX"
        h="48px"
        bg="#F3F3F3"
        mt="32px"
        value={taxID}
        onChange={(e) => setTaxID(e.target.value)}
      />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        disabled={!taxID.length}
        onClick={() => nextStep()}
      >
        Continue
      </Button>
    </Box>
  );
};

const NotAvailable = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Flex
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
        left="24px"
        top="24px"
        h="16px"
        w="16px"
        cursor="pointer"
        onClick={() => prevStep}
      >
        <Image src={Chevron} />
      </Box>
      <Heading as="h1" size="md" letterSpacing="normal">
        Sorry, Coral is only available for U.S. residents
      </Heading>
      <Text fontSize="15px" m="0 !important">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Text>
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
      >
        Dismiss
      </Button>
    </Flex>
  );
};

export default Step1;

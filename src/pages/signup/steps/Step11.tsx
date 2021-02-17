/** @jsxRuntime classic */
import React from "react";
import { Box, Flex, Button, Heading, Text, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";
import { Link } from "react-router-dom";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const Step11: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Flex
      p="24px"
      m="0"
      w="100%"
      h="100vh"
      pos="relative"
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
        Thanks for joining Coral
      </Heading>
      <Text fontSize="13px" color="#888" m="0 !important">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Link to="/">
        <Button
          pos="absolute"
          bottom="42px"
          left="24px"
          w="calc(100% - 48px)"
          h="48px"
          bg="#4E504F"
          color="#fff"
        >
          Start
        </Button>
      </Link>
    </Flex>
  );
};
export default Step11;

import { forwardRef, useContext } from "react";
import { StepFormContext } from "../steps";
import { Heading, Box, Text, Button, Flex, Image } from "@chakra-ui/react";
import { FlexContainer } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";
import type { DivRef } from "../steps";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Step1 = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
          <Heading
            size="md"
            mt="32px"
            letterSpacing="normal"
            textAlign="center"
          >
            Some personal information is missing
          </Heading>
          <Text fontSize="1rem" m="0 !important" textAlign="center">
            Before making an investing, we need you to provide us some personal
            information.
          </Text>
          <Button
            pos="absolute"
            bottom="106px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            cursor="pointer"
            onClick={nextStep}
          >
            Complete information
          </Button>
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="fff"
            color="#4E504F"
            cursor="pointer"
          >
            Skip for now
          </Button>
        </FlexContainer>
      </div>
    );
  }
);

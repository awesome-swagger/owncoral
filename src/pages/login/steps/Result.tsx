import { forwardRef } from "react";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import { FlexContainer } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";
import type { DivRef } from "../steps";

type stepProps = {
  prevStep: () => void;
};

export const Result = forwardRef<DivRef, stepProps>(
  ({ prevStep }: stepProps, ref) => {
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
            Congratulations! Your profile is now complete{" "}
          </Heading>
          <Text fontSize="1rem" m="0 !important" textAlign="center">
            You are ready to start investing in Coral.
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
          >
            Continue watching properties
          </Button>
        </FlexContainer>
      </div>
    );
  }
);

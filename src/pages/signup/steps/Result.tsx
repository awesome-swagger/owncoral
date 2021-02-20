import { forwardRef } from "react";
import { Box, Flex, Button, Heading, Text, Image } from "@chakra-ui/react";
import { BackBtn } from "../../../components/backBtn";
import { Link } from "react-router-dom";
import { FlexContainer } from "../../../components/container";
import type { DivRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
export const Result = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    return (
      <div ref={ref}>
        <FlexContainer>
          <BackBtn pos="absolute" handleClick={prevStep} />

          <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
          <Heading size="md" mt="32px" letterSpacing="normal">
            Thanks for joining Coral
          </Heading>
          <Text
            fontSize="0.85rem"
            color="#888"
            m="0 !important"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        </FlexContainer>
      </div>
    );
  }
);

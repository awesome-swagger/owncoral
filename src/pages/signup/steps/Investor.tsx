import { Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { useCallback, useContext, forwardRef } from "react";
import Chevron from "../../../assets/chevron.png";
import { StepFormContext } from "../../signup";
import { Container } from "../../../components/container";
import type { DivRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Investor = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleSubmit = useCallback(() => {
      form.dispatch({ type: "update-form", payload: { step4: "yes" } });
      nextStep();
    }, []);
    return (
      <div ref={ref}>
        <Container>
          <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
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
            Are you an accredited investor?
          </Heading>
          <Text fontSize="15px" textAlign="left" m="0 !important">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
          <Text fontSize="13px" color="#888" textAlign="left" m="0 !important">
            Amet minim mollit non deserunt ullamco est.
          </Text>
          <Button
            pos="absolute"
            bottom="106px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#FFF"
            onClick={handleSubmit}
          >
            Yes
          </Button>
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#FFF"
            color="#4E504F"
          >
            No
          </Button>
        </Container>
      </div>
    );
  }
);

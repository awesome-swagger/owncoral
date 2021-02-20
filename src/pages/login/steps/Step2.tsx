import { forwardRef, useContext, useCallback, useState } from "react";
import { StepFormContext } from "../steps";
import { Heading, Input, Text, Button } from "@chakra-ui/react";
import { Container } from "../../../components/container";
import { BackBtn } from "../../../components/backBtn";
import type { DivRef } from "../steps";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Step2 = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const [residentalAddress, setRessidentalAddress] = useState("");
    const form = useContext(StepFormContext);

    const onSubmit = useCallback(() => {
      form.dispatch({
        type: "update-form",
        payload: { step2: residentalAddress },
      });
      nextStep();
    }, [residentalAddress]);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" letterSpacing="normal">
            What’s your residential address?
          </Heading>
          <Text fontSize="1rem" m="0 !important">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            placeholder="Residental Address"
            h="48px"
            bg="#F3F3F3"
            mt="32px"
            value={residentalAddress}
            onChange={(e) => setRessidentalAddress(e.target.value)}
          />
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            cursor="pointer"
            onClick={onSubmit}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  }
);

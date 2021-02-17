import React, { useContext, useCallback, useEffect } from "react";
import { StepFormContext } from "../";
import { Box, Button, Heading, Text, Input, Image } from "@chakra-ui/react";

import Chevron from "../../../assets/chevron.png";
import { useForm } from "react-hook-form";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step2: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const form = useContext(StepFormContext);

  const firstName = watch("firstName");
  const lastName = watch("lastName");

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: "update-form", payload: { step2: data } });
      nextStep();
    },
    [handleSubmit]
  );

  useEffect(() => {
    const formState = form.formState;

    setValue("firstName", formState?.step2?.firstName);
    setValue("lastName", formState?.step2?.lastName);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box p="24px" m="0" w="100%" h="100vh">
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
          What’s your full name?
        </Heading>
        <Text fontSize="15px" textAlign="left" m="0 !important">
          Lorem ipsum dolor sir
        </Text>
        <Input
          placeholder="First Name"
          name="firstName"
          ref={register}
          h="48px"
          bg="#F3F3F3"
          mt="32px"
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          ref={register}
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
          type="submit"
          disabled={!firstName || !lastName}
        >
          Continue
        </Button>
      </Box>
    </form>
  );
};

export default Step2;

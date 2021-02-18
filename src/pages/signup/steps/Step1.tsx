import React, { useState, useCallback, useContext } from "react";
import { Heading, Box, Text, Input, Button, Image } from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";
import { FlexContainer, Container } from "../../../components/container";
import { StepFormContext, ContextType } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

type availableType = "Available" | "taxID" | "notAvailable";

const initialQuestions = [
  { value: "yes", label: "Yes" },
  { value: "taxID", label: "I Have a Tax ID" },
  { value: "notAvailable", label: "No" },
];

export const Step1: React.FC<stepProps> = ({
  nextStep,
  prevStep,
}: stepProps) => {
  const [available, setAvailable] = useState<availableType>("Available");
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback(
    (value) => {
      if (value === "yes") {
        form.dispatch({ type: "update-form", payload: { step1: value } });
        nextStep();
      } else {
        setAvailable(value);
      }
    },
    [available]
  );

  return (
    <div>
      {available === "Available" ? (
        <Container>
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
          {initialQuestions.map(({ value, label }) => (
            <Box
              key={value}
              px="24px"
              py="12px"
              mt="8px"
              bg="#F3F3F3"
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              onClick={() => handleSubmit(value)}
            >
              {label}
            </Box>
          ))}
        </Container>
      ) : available === "taxID" ? (
        <TaxID form={form} nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <NotAvailable nextStep={nextStep} prevStep={prevStep} />
      )}
    </div>
  );
};

const TaxID = ({ nextStep, form }: stepProps & { form: ContextType }) => {
  const [taxID, setTaxID] = useState<string>("");
  console.log("tax id", form);

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: "update-form", payload: { step1: { taxID } } });
    nextStep();
  }, [taxID]);

  return (
    <Container>
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
        onClick={() => handleSubmit()}
      >
        Continue
      </Button>
    </Container>
  );
};

const NotAvailable = ({ nextStep, prevStep }: stepProps) => {
  return (
    <FlexContainer>
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
      <Heading as="h1" size="md" letterSpacing="normal" textAlign="center">
        Sorry, Coral is only available for U.S. residents
      </Heading>
      <Text fontSize="15px" m="0 !important" textAlign="center">
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
    </FlexContainer>
  );
};

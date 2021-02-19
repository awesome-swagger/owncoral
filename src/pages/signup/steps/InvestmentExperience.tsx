import { useContext, useCallback, forwardRef } from "react";
import { Box, Progress, Heading, Image } from "@chakra-ui/react";
import { StepFormContext } from "../../signup";
import Chevron from "../../../assets/chevron.png";
import { Container } from "../../../components/container";
import type { DivRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type experience = {
  value: number;
  label: string;
};
const experience: experience[] = [
  { value: 0, label: "Lorem Ipsum" },
  { value: 1, label: "Lorem Ipsum" },
  { value: 2, label: "Lorem Ipsum" },
  { value: 3, label: "Lorem Ipsum" },
];

export const InvestmentExperience = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleSubmit = useCallback((value) => {
      nextStep();
      form.dispatch({ type: "update-form", payload: { step10: value } });
    }, []);
    return (
      <div ref={ref}>
        <Container>
          <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
            <Image src={Chevron} />
          </Box>
          <Progress mt="32px" colorScheme="gray" size="sm" value={66} />

          <Heading
            as="h1"
            size="md"
            mt="32px"
            mb="8px"
            textAlign="left"
            letterSpacing="normal"
          >
            How much investment experience do you have?
          </Heading>
          {experience.map(({ value, label }) => (
            <Box
              px="24px"
              py="12px"
              mt="8px"
              bg="#F3F3F3"
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              key={value}
              onClick={() => handleSubmit(value)}
            >
              {label}
            </Box>
          ))}
        </Container>
      </div>
    );
  }
);

import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  forwardRef,
} from "react";
import { Box, Button, Heading, Progress, Image } from "@chakra-ui/react";
import { BackBtn } from "../../../components/backBtn";
import { StepFormContext } from "../../signup";
import { Container } from "../../../components/container";
import type { DivRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type investementGoal = {
  value: number;
  label: string;
  selected: boolean;
};

const investmentGoalList: investementGoal[] = [
  { value: 0, label: "Lorem Ipsum", selected: false },
  { value: 1, label: "Lorem Ipsum", selected: false },
  { value: 2, label: "Lorem Ipsum", selected: false },
  { value: 3, label: "Lorem Ipsum", selected: false },
];

export const InvestmentGoal = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);
    const [investmentGoal, setInvestementGoal] = useState<investementGoal[]>(
      investmentGoalList
    );

    const handleChangeSelection = useCallback(
      (selectedValue: number) => {
        const newState = investmentGoal.map((goal) => {
          if (goal.value === selectedValue) {
            return {
              ...goal,
              selected: !goal.selected,
            };
          } else {
            return {
              ...goal,
            };
          }
        });

        setInvestementGoal(newState);
      },
      [investmentGoal]
    );

    const handleSubmit = useCallback(() => {
      nextStep();
      form.dispatch({
        type: "update-form",
        payload: { step8: investmentGoal },
      });
    }, [investmentGoal]);

    useEffect(() => {
      const formState = form.formState;

      if (formState?.step8) {
        setInvestementGoal(formState?.step8);
      }
    }, []);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Progress mt="32px" colorScheme="gray" size="sm" value={3} />
          <Heading
            size="md"
            mt="32px"
            mb="8px"
            textAlign="left"
            letterSpacing="normal"
          >
            Which is your investment goal?
          </Heading>
          {investmentGoal.map(({ value, label, selected }) => (
            <Box
              px="24px"
              py="12px"
              mt="8px"
              bg={selected ? "#cacaca" : "#F3F3F3"}
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              key={value}
              onClick={() => handleChangeSelection(value)}
            >
              {label}
            </Box>
          ))}
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  }
);

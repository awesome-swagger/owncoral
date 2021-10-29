import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import {
  BackBtn,
  Container,
  ProgressBar,
  SlideContainer,
  SubmitBtn,
  SelectBox,
} from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type InvestmentGoalT = {
  value: string;
};

const investmentGoals: InvestmentGoalT[] = [
  { value: 'Diversification' },
  { value: 'Steady cash flow (income)' },
  { value: 'Overall returns' },
  { value: 'Tax-efficiency / benefits' },
  { value: "I'm not sure" },
];

export const InvestmentGoal = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step6;

    const handleSubmit = useCallback(
      (value) => {
        const selectedVal = formStep ? formStep : [];
        const filterVal = selectedVal.filter((item: Number) => item !== value);
        const checkVal = selectedVal.includes(value);

        form.dispatch({
          type: 'update-form',
          payload: { step6: checkVal ? filterVal : [...selectedVal, value] },
        });
      },
      [form, formStep],
    );

    return (
      <Container
        d="flex"
        flexDir="column"
        justifyContent="space-between"
        ref={ref}
        layerStyle="noSelect"
      >
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <ProgressBar total={7} value={2} />
            <Title1 mt={8} mb={2} textAlign="left">
              What goals do you want to achieve through investment property ownership?
            </Title1>
            <Text fontSize="md">Select all that apply</Text>
            <Box my={8}>
              {investmentGoals.map(({ value }, idx) => (
                <SelectBox
                  key={idx}
                  state={formStep}
                  icon="checkbox"
                  value={value}
                  handleClick={() => handleSubmit(value)}
                />
              ))}
            </Box>
          </Box>
          <SubmitBtn label="Continue" disabled={!formStep?.length} onClick={nextStep} />
        </SlideContainer>
      </Container>
    );
  },
);

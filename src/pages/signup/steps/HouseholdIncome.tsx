import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type IncomeT = {
  value: string;
};

const householdIncomes: IncomeT[] = [
  { value: 'Less than $200,000' },
  { value: 'Between $200,000 and $300,000' },
  { value: 'Between $1M and $5M' },
  { value: 'Between $5M and $10 million' },
  { value: 'Greater than $10 million' },
];

export const HouseholdIncome = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step9;

    const handleSubmit = useCallback(
      (value) => {
        form.dispatch({
          type: 'update-form',
          payload: { step9: value },
        });
        nextStep();
      },
      [form, nextStep],
    );

    return (
      <Container ref={ref} layerStyle="noSelect">
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={5} />
        <Title1 mt={8} mb={2} textAlign="left">
          What is your current household income?
        </Title1>
        <Text fontSize="md">
          We need to know you better in order to comply with SEC regulations.
        </Text>
        <Box my={8}>
          {householdIncomes.map(({ value }, idx) => (
            <SelectBox
              key={idx}
              value={value}
              state={formStep}
              handleClick={() => handleSubmit(value)}
              icon="chevron"
            />
          ))}
        </Box>
      </Container>
    );
  },
);

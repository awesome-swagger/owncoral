import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar } from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type IncomeT = {
  value: number;
  label: string;
};

const householdIncomes: IncomeT[] = [
  { value: 0, label: 'Less than $200,000' },
  { value: 1, label: 'Between $200,000 and $300,000' },
  { value: 2, label: 'Between $1M and $5M' },
  { value: 3, label: 'Between $5M and $10 million' },
  { value: 4, label: 'Greater than $10 million' },
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
        <Heading size="md" mt={8} mb={2} textAlign="left">
          What is your current household income?
        </Heading>
        <Text fontSize="md">
          We need to know you better in order to comply with SEC regulations.
        </Text>
        <Box mt={8}>
          {householdIncomes.map(({ value, label }) => (
            <Box
              px={6}
              py={3}
              mt={2}
              layerStyle={value === formStep ? 'selectionBox.selected' : 'selectionBox'}
              borderRadius="full"
              textAlign="left"
              cursor="pointer"
              key={value}
              textStyle="Body1"
              onClick={() => handleSubmit(value)}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Container>
    );
  },
);

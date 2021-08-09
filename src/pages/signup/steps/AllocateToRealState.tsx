import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar } from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type InvestmentT = {
  value: number;
  label: string;
};

const investment: InvestmentT[] = [
  { value: 0, label: '$1,000 - $10,000' },
  { value: 1, label: 'Between $10,000 and $100,000' },
  { value: 2, label: 'Between $100,000 and $250,000' },
  { value: 3, label: 'Between $250,000 and $500,000' },
  { value: 4, label: 'Greater than $500,000' },
];

export const AllocateToRealState = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step10;

    const handleSubmit = useCallback(
      (value) => {
        form.dispatch({
          type: 'update-form',
          payload: { step10: value },
        });
        nextStep();
      },
      [form, nextStep],
    );

    return (
      <Container ref={ref} layerStyle="noSelect">
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={7} />
        <Heading size="md" mt={8} mb={2} textAlign="left">
          How much do you intend to allocate to real estate through Coral in the next 12 months?
        </Heading>
        <Text fontSize="md">This helps us gauge demand, which helps us serve you better.</Text>
        <Box my={8}>
          {investment.map(({ value, label }) => (
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

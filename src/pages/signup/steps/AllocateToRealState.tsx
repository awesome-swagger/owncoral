import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type InvestmentT = {
  value: string;
};

const investment: InvestmentT[] = [
  { value: '$1,000 - $10,000' },
  { value: 'Between $10,000 and $100,000' },
  { value: 'Between $100,000 and $250,000' },
  { value: 'Between $250,000 and $500,000' },
  { value: 'Greater than $500,000' },
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
        <Title1 mt={8} mb={2} textAlign="left">
          How much do you intend to allocate to real estate through Coral in the next 12 months?
        </Title1>
        <Text fontSize="md">This helps us gauge demand, which helps us serve you better.</Text>
        <Box my={8}>
          {investment.map(({ value }, idx) => (
            <SelectBox
              key={idx}
              state={formStep}
              value={value}
              icon="chevron"
              handleClick={() => handleSubmit(value)}
            />
          ))}
        </Box>
      </Container>
    );
  },
);

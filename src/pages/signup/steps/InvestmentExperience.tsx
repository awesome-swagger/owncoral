import React, { forwardRef, useCallback, useContext, useState } from 'react';
import { Box, Heading, Progress, useColorModeValue } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type experience = {
  value: number;
  label: string;
};
const experience: experience[] = [
  { value: 0, label: 'Lorem Ipsum' },
  { value: 1, label: 'Lorem Ipsum' },
  { value: 2, label: 'Lorem Ipsum' },
  { value: 3, label: 'Lorem Ipsum' },
];

export const InvestmentExperience = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleSubmit = useCallback((value) => {
      form.dispatch({ type: 'update-form', payload: { step10: value } });
      nextStep();
    }, []);

    return (
      <Box ref={ref} layerStyle="noSelect">
        <Container>
          <BackBtn handleClick={prevStep} />

          <Progress mt={8} colorScheme="primary" borderRadius="full" size="sm" value={80} />

          <Heading size="md" as="h4" mt={8} mb={2} textAlign="left">
            How much investing experience do you have?
          </Heading>
          {experience.map(({ value, label }) => (
            <Box
              px={6}
              py={3}
              mt={2}
              layerStyle={
                value === form?.formState?.step10 ? 'selectionBox.selected' : 'selectionBox'
              }
              borderRadius="full"
              textAlign="left"
              cursor="pointer"
              key={value}
              onClick={() => handleSubmit(value)}
            >
              {label}
            </Box>
          ))}
        </Container>
      </Box>
    );
  },
);

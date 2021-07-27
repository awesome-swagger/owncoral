import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type investmentType = {
  value: number;
  label: string;
};

const investmentTypes: investmentType[] = [
  { value: 0, label: 'Publicly traded stocks' },
  { value: 1, label: 'Bonds' },
  { value: 2, label: 'Real estate (for investment purposes)' },
  { value: 3, label: 'Private companies/startups' },
  { value: 4, label: 'Hedge funds' },
  { value: 5, label: 'Private equity funds' },
  { value: 6, label: 'Other alternative assets' },
];

export const InvestmentTypes = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleSubmit = useCallback(
      (value) => {
        form.dispatch({
          type: 'update-form',
          payload: { step7: value },
        });
      },
      [form, nextStep],
    );

    return (
      <Container ref={ref} layerStyle="noSelect" pb={32}>
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={3} />
        <Heading size="md" mt={8} mb={2} textAlign="left">
          Have you invested in any of the following types of investments in the past?
        </Heading>
        <Text fontSize="md">Select all that apply</Text>
        <Box mt={8}>
          {investmentTypes.map(({ value, label }) => (
            <Box
              px={6}
              py={3}
              mt={2}
              layerStyle={
                value === form?.formState?.step7 ? 'selectionBox.selected' : 'selectionBox'
              }
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
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          cursor="pointer"
          disabled={!form?.formState?.step7}
          onClick={nextStep}
        >
          Continue
        </Button>
      </Container>
    );
  },
);

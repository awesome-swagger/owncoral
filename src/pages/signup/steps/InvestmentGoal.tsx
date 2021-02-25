import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Progress, useColorModeValue } from '@chakra-ui/react';

import { BackBtn } from '../../../components/backBtn';
import { SubmitBtn } from '../../../components/submitBtn';
import { Container } from '../../../components/container';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type investmentGoal = {
  value: number;
  label: string;
};

const investmentGoals: investmentGoal[] = [
  { value: 0, label: 'Preserving my wealth' },
  { value: 1, label: 'Generating high income' },
  { value: 2, label: 'Generating some income while increasing my wealth' },
  { value: 3, label: 'Increasing my wealth substantially over the long term' },
];

export const InvestmentGoal = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    const handleSubmit = useCallback((value) => {
      nextStep();
      form.dispatch({
        type: 'update-form',
        payload: { step8: value },
      });
    }, []);

    const selectionColors = useColorModeValue(
      { bg: 'gray.100', color: 'black', _hover: { bg: 'primary.100' } },
      { bg: 'whiteAlpha.100', color: 'white', _hover: { bg: 'secondary.800' } },
    );

    return (
      <Box ref={ref} layerStyle="noSelect">
        <Container>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Progress mt="2rem" colorScheme="primary" borderRadius="full" size="sm" value={3} />
          <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left">
            What are your investment goals?
          </Heading>
          {investmentGoals.map(({ value, label }) => (
            <Box
              px="1.5rem"
              py="0.75rem"
              mt="0.5rem"
              {...selectionColors}
              borderRadius="full"
              textAlign="left"
              cursor="pointer"
              key={value}
              onClick={() => handleSubmit(value)}
            >
              {label}
            </Box>
          ))}
          <SubmitBtn label="Continue" onClick={handleSubmit} />
        </Container>
      </Box>
    );
  },
);

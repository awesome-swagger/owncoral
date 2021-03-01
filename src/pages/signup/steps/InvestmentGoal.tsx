import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Progress, useColorModeValue } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, HeadingTypography } from '../../../components';
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
          <Progress mt={8} colorScheme="primary" borderRadius="full" size="sm" value={3} />
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            What are your investment goals?
          </HeadingTypography>
          {investmentGoals.map(({ value, label }) => (
            <Box
              px={6}
              py={3}
              mt={2}
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

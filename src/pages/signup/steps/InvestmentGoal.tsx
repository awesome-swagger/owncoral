import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Progress, useColorModeValue } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn } from '../../../components';
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
      form.dispatch({
        type: 'update-form',
        payload: { step8: value },
      });
      nextStep();
    }, []);

    const selectionColors = useColorModeValue(
      { bg: 'gray.100', color: 'black', _hover: { bg: 'primary.100' }, selected: 'gray.300' },
      {
        bg: 'whiteAlpha.100',
        color: 'white',
        _hover: { bg: 'secondary.800' },
        selected: 'whiteAlpha.400',
      },
    );

    return (
      <Container ref={ref} layerStyle="noSelect">
        <BackBtn handleClick={prevStep} />
        <Progress mt={8} colorScheme="primary" borderRadius="full" size="sm" value={3} />
        <Heading size="md" mt={8} mb={2} textAlign="left">
          What are your investment goals?
        </Heading>
        {investmentGoals.map(({ value, label }) => (
          <Box
            px={6}
            py={3}
            mt={2}
            {...selectionColors}
            bg={value === form?.formState?.step10 ? selectionColors.selected : selectionColors.bg}
            borderRadius="full"
            textAlign="left"
            cursor="pointer"
            key={value}
            textStyle="bodyText1"
            onClick={() => handleSubmit(value)}
          >
            {label}
          </Box>
        ))}
        <SubmitBtn label="Continue" onClick={handleSubmit} />
      </Container>
    );
  },
);

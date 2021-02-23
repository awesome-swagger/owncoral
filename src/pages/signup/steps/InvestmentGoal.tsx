import { Box, Button, Flex, Heading, Image, Progress, useColorModeValue } from '@chakra-ui/react';
import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { SubmitBtn } from '../../../components/submitBtn';
import { Container } from '../../../components/container';
import type { DivRef } from '../../signup';
import { StepFormContext } from '../../signup';

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
          <Progress mt="32px" colorScheme="primary" borderRadius="full" size="sm" value={3} />
          <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
            What are your investment goals?
          </Heading>
          {investmentGoals.map(({ value, label }) => (
            <Box
              px="24px"
              py="12px"
              mt="8px"
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

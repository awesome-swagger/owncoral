import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Progress, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, Container, HeadingTypography } from '../../../components';
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

    const selectionColors = useColorModeValue(
      { bg: 'gray.100', color: 'black', _hover: { bg: 'primary.100' } },
      { bg: 'whiteAlpha.100', color: 'white', _hover: { bg: 'secondary.800' } },
    );

    const handleSubmit = useCallback((value) => {
      nextStep();
      form.dispatch({ type: 'update-form', payload: { step10: value } });
    }, []);
    return (
      <Box ref={ref} layerStyle="noSelect">
        <Container>
          <BackBtn pos="absolute" handleClick={prevStep} />

          <Progress mt={8} colorScheme="primary" borderRadius="full" size="sm" value={80} />

          <HeadingTypography size="md" as="h4" mt={8} mb={2} textAlign="left">
            How much investing experience do you have?
          </HeadingTypography>
          {experience.map(({ value, label }) => (
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
        </Container>
      </Box>
    );
  },
);
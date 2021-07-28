import React, { forwardRef, useCallback, useContext } from 'react';
import { Flex, Box, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { BackBtn, Container, ProgressBar } from '../../../components';
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
  { value: 0, label: 'Diversification' },
  { value: 1, label: 'Steady cash flow (income)' },
  { value: 2, label: 'Overall returns' },
  { value: 3, label: 'Tax-efficiency / benefits' },
  { value: 4, label: "I'm not sure" },
];

export const InvestmentGoal = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step6;

    const handleSubmit = useCallback(
      (value) => {
        const selectedVal = formStep ? formStep : [];
        const filterVal = selectedVal.filter((item: Number) => item !== value);
        const checkVal = selectedVal.includes(value);

        form.dispatch({
          type: 'update-form',
          payload: { step6: checkVal ? filterVal : [...selectedVal, value] },
        });
      },
      [form, nextStep],
    );

    return (
      <Container ref={ref} layerStyle="noSelect" pb={32}>
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={2} />
        <Heading size="md" mt={8} mb={2} textAlign="left">
          What goals do you want to achieve through investment property ownership?
        </Heading>
        <Text fontSize="md">Select all that apply</Text>
        <Box mt={8}>
          {investmentGoals.map(({ value, label }) => (
            <Flex
              px={6}
              py={3}
              mt={2}
              key={value}
              textAlign="left"
              alignItems="center"
              borderRadius="full"
              cursor="pointer"
              textStyle="Body1"
              onClick={() => handleSubmit(value)}
              layerStyle={formStep?.includes(value) ? 'selectionBox.selected' : 'selectionBox'}
            >
              <Icon
                as={formStep?.includes(value) ? FaCheckCircle : FiCircle}
                layerStyle="iconColor"
                bg="transparent !important"
                h={5}
                w={5}
                mr={2}
              />
              {label}
            </Flex>
          ))}
        </Box>
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          cursor="pointer"
          disabled={!formStep?.length}
          onClick={nextStep}
        >
          Continue
        </Button>
      </Container>
    );
  },
);

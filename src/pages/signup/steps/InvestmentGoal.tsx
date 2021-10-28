import React, { forwardRef, useCallback, useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type InvestmentGoalT = {
  value: number;
  label: string;
};

const investmentGoals: InvestmentGoalT[] = [
  { value: 0, label: 'Diversification' },
  { value: 1, label: 'Steady cash flow (income)' },
  { value: 2, label: 'Overall returns' },
  { value: 3, label: 'Tax-efficiency / benefits' },
  { value: 4, label: "I'm not sure" },
];

export const InvestmentGoal = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
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
      [form, formStep],
    );

    return (
      <Container
        d="flex"
        flexDir="column"
        justifyContent="space-between"
        ref={ref}
        layerStyle="noSelect"
      >
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <ProgressBar total={7} value={2} />
            <Title1 mt={8} mb={2} textAlign="left">
              What goals do you want to achieve through investment property ownership?
            </Title1>
            <Text fontSize="md">Select all that apply</Text>
            <Box my={8}>
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
          </Box>
          <SubmitBtn label="Continue" disabled={!formStep?.length} onClick={nextStep} />
        </SlideContainer>
      </Container>
    );
  },
);

import React, { forwardRef, useCallback, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Title1 } from '../../../components/text';
import {
  BackBtn,
  Container,
  ProgressBar,
  SlideContainer,
  SubmitBtn,
  SelectBox,
} from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type InvestmentT = {
  value: string;
};

const investmentTypes: InvestmentT[] = [
  { value: 'Publicly traded stocks' },
  { value: 'Bonds' },
  { value: 'Real estate (for investment purposes)' },
  { value: 'Private companies/startups' },
  { value: 'Hedge funds' },
  { value: 'Private equity funds' },
  { value: 'Other alternative assets' },
];

export const InvestmentTypes = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step7;

    const handleSubmit = useCallback(
      (value) => {
        const selectedVal = formStep ? formStep : [];
        const filterVal = selectedVal.filter((item: Number) => item !== value);
        const checkVal = selectedVal.includes(value);

        form.dispatch({
          type: 'update-form',
          payload: { step7: checkVal ? filterVal : [...selectedVal, value] },
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
            <ProgressBar total={7} value={3} />
            <Title1 mt={8} mb={2} textAlign="left">
              Have you invested in any of the following types of investments in the past?
            </Title1>
            <Text fontSize="md">Select all that apply</Text>
            <Box my={8}>
              {investmentTypes.map(({ value }, idx) => (
                <SelectBox
                  key={idx}
                  state={formStep}
                  icon="checkbox"
                  value={value}
                  handleClick={() => handleSubmit(value)}
                />
              ))}
            </Box>
          </Box>
        </SlideContainer>
        <SubmitBtn label="Continue" disabled={!formStep?.length} onClick={nextStep} />
      </Container>
    );
  },
);

import React, { forwardRef, useCallback, useContext } from 'react';
import { ChevronRight } from 'react-feather';
import { Box, Icon } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type ExperienceT = {
  value: string;
};
const experience: ExperienceT[] = [
  { value: '0-2 years ' },
  { value: '2-5 years ' },
  { value: '5-10 years ' },
  { value: '10-20 years ' },
  { value: 'More than 20 years ' },
];

export const InvestmentExperience = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step5;

    const handleSubmit = useCallback(
      (value) => {
        form.dispatch({ type: 'update-form', payload: { step5: value } });
        nextStep();
      },
      [form, nextStep],
    );

    return (
      <Box ref={ref} layerStyle="noSelect">
        <Container>
          <BackBtn handleClick={prevStep} />
          <ProgressBar total={7} value={1} />
          <Title1 mt={8} textAlign="left">
            How long have you been investing?
          </Title1>
          <Box my={8}>
            {experience.map(({ value }, idx) => (
              <SelectBox
                key={idx}
                icon="chevron"
                value={value}
                state={formStep}
                handleClick={() => handleSubmit(value)}
              />
            ))}
          </Box>
        </Container>
      </Box>
    );
  },
);

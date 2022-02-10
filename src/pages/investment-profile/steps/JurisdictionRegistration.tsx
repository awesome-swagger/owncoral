import React, { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Select, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import { States } from '../../../lib/states';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const JurisdictionRegistration:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, register, setValue } = useForm();
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback((data) => {
    form.dispatch?.({ step13: data });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('jurisdiction_registration', formState?.step13?.jurisdiction_registration || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title1 mt={8} mb={2} textAlign="left">
              Which is the jurisdiction of registration
            </Title1>
            <Text fontSize="md" textAlign="left">
              Lorem ipsum dolor sir amet
            </Text>
            <Select
              placeholder="Select option"
              {...register('jurisdiction_registration')}
              mt={2}
            >
              {States.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </Box>
          <SubmitBtn label="Continue" />
        </SlideContainer>
      </Container>
    </form>
  );
}

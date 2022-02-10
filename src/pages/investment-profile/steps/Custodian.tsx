import React, { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const Custodian:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, setValue, register } = useForm();
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback((data) => {
    form.dispatch?.({
      step7: {
        ...form?.formState?.step7,
        ira_company_name: data
      }
    });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('company_name', formState?.step7?.ira_company_name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title2 mt={8} mb={2} textAlign="left">
              What’s your IRA Custodian?
            </Title2>
            <Text textStyle="Body1">
              Lorem ipsum dolor sir amet
            </Text>
            <Input
              type="text"
              {...register('company_name', { required: true })}
              placeholder="Your company name"
              h={12}
              mt={8}
            />
          </Box>
          <SubmitBtn label="Continue" />
        </SlideContainer>
      </Container>
    </form>
  );
}

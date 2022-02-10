import React, { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const Industry:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, setValue, register } = useForm();
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback((data) => {
    form.dispatch?.({ step10: data });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('industry', formState?.step10?.industry || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title1 mt={8} mb={2} textAlign="left">
              What’s your Industry?
            </Title1>
            <Text fontSize="md" textAlign="left">
              Lorem ipsum dolor sir amet
            </Text>
            <Input
              {...register('industry', { required: true })}
              type="text"
              placeholder="Industry"
              h={12}
              mt={8} />
          </Box>
          <SubmitBtn label="Continue" />
        </SlideContainer>
      </Container>
    </form>
  );
}

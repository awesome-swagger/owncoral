import React, { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const EntityPhoneNumber:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, register, setValue } = useForm();
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback((data) => {
    form.dispatch?.({ step16: data });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('entity_phone_number', formState?.step16?.entity_phone_number || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title1 mt={8} mb={2} textAlign="left">
              What’s your Entity phone number?
            </Title1>
            <Text fontSize="md" textAlign="left">
              Enter your US phone number
            </Text>
            <Input
              as={InputMask}
              placeholder="(XXX) XXX-XXXX"
              className="mask_input"
              {...register('entity_phone_number', {
                required: true,
                minLength: 9,
              })}
              mask="(999) 999-9999" />
          </Box>
          <SubmitBtn label="Continue" />
        </SlideContainer>
      </Container>
    </form>
  );
}

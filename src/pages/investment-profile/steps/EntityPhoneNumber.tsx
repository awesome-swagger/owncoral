import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityPhoneNumber = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback(
      (data) => {
        form.dispatch({
          type: 'update-form',
          payload: { step16: data },
        });
        nextStep();
      },
      [form, nextStep],
    );

    useEffect(() => {
      const formState = form.formState;

      setValue('entity_phone_number', formState?.step16?.entity_phone_number || '');
    }, [form.formState, setValue]);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            What’s your Entity phone number?
          </Heading>
          <Text fontSize="md" textAlign="left">
            Enter your US phone number
          </Text>
          <Input
            as={InputMask}
            placeholder="(XXX) XXX-XXXX"
            className="mask_input"
            name="entity_phone_number"
            mask="(999) 999-9999"
            ref={register({
              required: true,
              minLength: 9,
            })}
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

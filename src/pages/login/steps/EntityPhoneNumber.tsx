import { forwardRef, useContext, useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Button, Input, Text } from '@chakra-ui/react';
import type { FormRef } from '../steps';
import { SubmitBtn } from '../../../components/submitBtn';
import InputMask from 'react-input-mask';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityPhoneNumber = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue, control } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step16: data },
      });
      nextStep();
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('entity_phone_number', formState?.step16?.entity_phone_number || '');
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            What’s your Entity phone number?
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Enter your US phone number
          </Text>
          <Controller
            placeholder="XXX XXX XXXX"
            className="mask_input"
            as={InputMask}
            name="entity_phone_number"
            control={control}
            rules={{ required: true, minLength: 9 }}
            mask="999 999 999"
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

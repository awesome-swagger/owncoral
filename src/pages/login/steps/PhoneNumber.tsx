import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { Heading, Input, Text } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
import type { FormRef } from '../steps';
import { StepFormContext } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const PhoneNumber = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue, control } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step3: data },
      });
      nextStep();
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('phone_number', formState?.step3?.phone_number || '');
    }, []);
    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            What’s your phone number?
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Enter your US phone number
          </Text>
          <Controller
            placeholder="XXX XXX XXX"
            className="mask_input"
            as={InputMask}
            name="phone_number"
            control={control}
            rules={{ required: true, minLength: 10 }}
            mask="(999) 999-9999"
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

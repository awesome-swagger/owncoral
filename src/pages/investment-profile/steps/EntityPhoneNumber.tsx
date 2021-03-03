import { forwardRef, useContext, useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import {
  BackBtn,
  Container,
  SubmitBtn,
  HeadingTypography,
  TextTypography,
} from '../../../components';
import type { FormRef } from './index';
import { StepFormContext } from './index';

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
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            What’s your Entity phone number?
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="left">
            Enter your US phone number
          </TextTypography>
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

import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  BackBtn,
  Container,
  HeadingTypography,
  TextTypography,
  InputField,
} from '../../../components';
import type { FormRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Name = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const form = useContext(StepFormContext);

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step2: data } });
      nextStep();
    },
    [handleSubmit],
  );

  useEffect(() => {
    const formState = form.formState;

    setValue('firstName', formState?.step2?.firstName);
    setValue('lastName', formState?.step2?.lastName);
  }, []);

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container layerStyle="noSelect">
        <BackBtn handleClick={prevStep} />
        <HeadingTypography as="h4" size="md" mt={8} mb={2} textAlign="left">
          What’s your full name?
        </HeadingTypography>
        <TextTypography fontSize="md" textAlign="left">
          Lorem ipsum dolor sir
        </TextTypography>
        <InputField
          placeholder="First Name"
          name="firstName"
          ref={register}
          h={12}
          mt={8}
          variant="filled"
        />
        <InputField
          placeholder="Last Name"
          name="lastName"
          ref={register}
          h={12}
          mt={8}
          variant="filled"
        />
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          type="submit"
          disabled={!firstName || !lastName}
        >
          Continue
        </Button>
      </Container>
    </form>
  );
});

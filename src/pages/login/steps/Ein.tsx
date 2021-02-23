import { forwardRef, useContext, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Text } from '@chakra-ui/react';
import type { FormRef } from '../steps';
import { SubmitBtn } from '../../../components/submitBtn';
import InputMask from 'react-input-mask';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Ein = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, register, setValue, control } = useForm();
  const form = useContext(StepFormContext);

  const onSubmit = useCallback((data) => {
    form.dispatch({
      type: 'update-form',
      payload: { step9: data },
    });
    nextStep();
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('phone_number', formState?.step9?.phone_number || '');
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
          What’s your EIN?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir amet
        </Text>
        <Controller
          placeholder="XX-XXXXXXX"
          className="mask_input"
          as={InputMask}
          name="phone_number"
          control={control}
          rules={{ required: true, minLength: 9 }}
          mask="99-9999999"
        />
        <SubmitBtn label="Continue" />
      </Container>
    </form>
  );
});

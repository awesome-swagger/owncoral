import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
import { Heading, Input, Text } from '@chakra-ui/react';
import type { FormRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const SsnOrEin = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, register, setValue } = useForm();
  const form = useContext(StepFormContext);

  const onSubmit = useCallback((data) => {
    form.dispatch({
      type: 'update-form',
      payload: { step4: data },
    });
    nextStep();
  }, []);

  useEffect(() => {
    const formState = form.formState;
    setValue('Ssn_Or_Ein', formState?.step4?.Ssn_Or_Ein || '');
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
          What’s your SSN or EIN?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir amet
        </Text>
        <Input
          ref={register({ required: true, minLength: 9, maxLength: 9 })}
          name="Ssn_Or_Ein"
          type="password"
          placeholder="XXX-XX-XXXX"
          h="48px"
          bg="#F3F3F3"
          mt="32px"
        />
        <SubmitBtn label="Continue" />
      </Container>
    </form>
  );
});

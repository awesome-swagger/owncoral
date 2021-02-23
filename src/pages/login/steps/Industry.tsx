import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Input, Text } from '@chakra-ui/react';
import type { FormRef } from '../steps';
import { SubmitBtn } from '../../../components/submitBtn';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Industry = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, setValue, register } = useForm();
  const form = useContext(StepFormContext);

  const onSubmit = useCallback((data) => {
    form.dispatch({
      type: 'update-form',
      payload: { step10: data },
    });
    nextStep();
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('industry', formState?.step10?.industry || '');
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
          What’s your Industry?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir amet
        </Text>
        <Input
          name="industry"
          ref={register({ required: true })}
          type="text"
          placeholder="Industry"
          h="48px"
          bg="#F3F3F3"
          mt="32px"
        />

        <SubmitBtn label="Continue" />
      </Container>
    </form>
  );
});

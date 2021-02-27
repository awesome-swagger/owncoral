import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { FormRef } from '../steps';
import { StepFormContext } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityName = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, setValue, register } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step6: data },
      });
      nextStep();
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('entity_name', formState?.step6?.entity_name || '');
    }, []);
    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
            What is your Entity Name
          </Heading>
          <Input
            type="text"
            name="entity_name"
            placeholder="Entity Name"
            ref={register({ required: true })}
            h="3rem"
            bg="#F3F3F3"
            mt="2rem"
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
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
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            What is your Entity Name
          </Heading>
          <Input
            type="text"
            name="entity_name"
            placeholder="Entity Name"
            ref={register({ required: true })}
            h="48px"
            bg="#F3F3F3"
            mt="32px"
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

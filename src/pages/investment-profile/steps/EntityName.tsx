import { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Heading, Input } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityName = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, setValue, register } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback(
      (data) => {
        form.dispatch({
          type: 'update-form',
          payload: { step6: data },
        });
        nextStep();
      },
      [form.dispatch, nextStep],
    );

    useEffect(() => {
      const formState = form.formState;
      setValue('entity_name', formState?.step6?.entity_name || '');
      // eslint-disable-next-line
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            What is your Entity Name
          </Heading>
          <Input
            type="text"
            name="entity_name"
            placeholder="Entity Name"
            ref={register({ required: true })}
            h={12}
            mt={8}
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BackBtn, Container, SubmitBtn, HeadingTypography, InputField } from '../../../components';
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
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            What is your Entity Name
          </HeadingTypography>
          <InputField
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

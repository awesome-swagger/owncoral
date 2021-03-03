import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { States } from '../../../lib/states';
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

export const JurisdictionRegistration = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue, control } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step13: data },
      });
      nextStep();
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('jurisdiction_registration', formState?.step13?.jurisdiction_registration || '');
    }, []);
    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            Which is the jurisdiction of registration
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="left">
            Lorem ipsum dolor sir amet
          </TextTypography>
          <Select
            ref={register}
            placeholder="Select option"
            name="jurisdiction_registration"
            mt={2}
          >
            {States.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

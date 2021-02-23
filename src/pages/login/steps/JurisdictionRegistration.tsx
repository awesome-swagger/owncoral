import { forwardRef, useContext, useCallback, useEffect } from 'react';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Text, Select } from '@chakra-ui/react';
import { States } from '../../../lib/states';
import { SubmitBtn } from '../../../components/submitBtn';
import type { FormRef } from '../steps';
import { useForm } from 'react-hook-form';

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
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Which is the jurisdiction of registration
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <Select
            ref={register}
            placeholder="Select option"
            name="jurisdiction_registration"
            mt="0.5rem"
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

import { forwardRef, useContext, useCallback, useState, useEffect } from 'react';
import { StepFormContext } from '../steps';
import { useForm } from 'react-hook-form';
import { Heading, Input, Text, Button } from '@chakra-ui/react';
import { Container } from '../../../components/container';
import { BackBtn } from '../../../components/backBtn';
import { SubmitBtn } from '../../../components/submitBtn';
import type { FormRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const ResidentialAddress = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step2: data },
      });
      nextStep();
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('residential_address', formState?.step2?.residential_address || '');
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" letterSpacing="normal">
            What’s your residential address?
          </Heading>
          <Text fontSize="1rem" m="0 !important">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            name="residential_address"
            placeholder="Residental Address"
            h="48px"
            bg="#F3F3F3"
            mt="32px"
            ref={register({ required: true })}
          />
          <SubmitBtn label="Continue" />
        </Container>
      </form>
    );
  },
);

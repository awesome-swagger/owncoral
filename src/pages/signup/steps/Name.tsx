import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Heading, Input, Text, FormLabel } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { FormRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Name = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const form = useContext(StepFormContext);
  const formStep = form.formState?.step1;

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step1: data } });
      nextStep();
    },
    [handleSubmit],
  );

  const handleChange = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step1: data } });
    },
    [handleSubmit],
  );

  useEffect(() => {
    setValue('firstName', formStep?.firstName);
    setValue('lastName', formStep?.lastName);
  }, []);

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container layerStyle="noSelect">
        <BackBtn handleClick={prevStep} />
        <Heading as="h4" size="md" mt={8} mb={2} textAlign="left">
          Tell us about yourself
        </Heading>
        <Text fontSize="md" textAlign="left">
          Please enter your full legal name. Your legal name should match any form of government ID.
        </Text>
        <FormLabel mt={8}>
          <Text layerStyle="labelColor" fontSize="md">
            FIRST NAME
          </Text>
          <Input
            placeholder="First Name"
            name="firstName"
            ref={register}
            h={12}
            mt={1}
            variant="filled"
            onChange={handleSubmit(handleChange)}
          />
        </FormLabel>
        <FormLabel mt={8}>
          <Text layerStyle="labelColor" fontSize="md">
            LAST NAME
          </Text>
          <Input
            placeholder="Last Name"
            name="lastName"
            ref={register}
            h={12}
            mt={1}
            variant="filled"
            onChange={handleSubmit(handleChange)}
          />
        </FormLabel>
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          type="submit"
          disabled={!firstName || !lastName}
        >
          Continue
        </Button>
      </Container>
    </form>
  );
});

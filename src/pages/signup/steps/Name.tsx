import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormLabel, Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { FormRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

export const Name = forwardRef<FormRef, StepPropsT>(({ nextStep, prevStep }: StepPropsT, ref) => {
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
    [form, nextStep],
  );

  const handleChange = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step1: data } });
    },
    [form],
  );

  useEffect(() => {
    setValue('firstName', formStep?.firstName);
    setValue('lastName', formStep?.lastName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container pb={28} layerStyle="noSelect">
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

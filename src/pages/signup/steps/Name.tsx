import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { Button, Heading, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

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

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step2: data } });
      nextStep();
    },
    [handleSubmit],
  );

  useEffect(() => {
    const formState = form.formState;

    setValue('firstName', formState?.step2?.firstName);
    setValue('lastName', formState?.step2?.lastName);
  }, []);

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container layerStyle="noSelect">
        <BackBtn handleClick={prevStep} />
        <Heading as="h4" size="md" mt="2rem" mb="0.5rem" textAlign="left">
          What’s your full name?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir
        </Text>
        <Input
          placeholder="First Name"
          name="firstName"
          ref={register}
          h="3rem"
          mt="2rem"
          variant="filled"
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          ref={register}
          h="3rem"
          mt="2rem"
          variant="filled"
        />
        <Button
          pos="absolute"
          bottom="2.5rem"
          left="1.5rem"
          w="calc(100% - 3rem)"
          h="3rem"
          type="submit"
          disabled={!firstName || !lastName}
        >
          Continue
        </Button>
      </Container>
    </form>
  );
});

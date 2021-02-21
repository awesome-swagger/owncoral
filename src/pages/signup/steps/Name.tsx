import { Button, Heading, Input, Text, useColorModeValue } from '@chakra-ui/react';
import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import type { FormRef } from '../../signup';
import { StepFormContext } from '../../signup';

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
        <Heading as="h4" size="md" mt="32px" mb="8px" textAlign="left">
          What’s your full name?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir
        </Text>
        <Input
          placeholder="First Name"
          name="firstName"
          ref={register}
          h="48px"
          mt="32px"
          variant="filled"
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          ref={register}
          h="48px"
          mt="32px"
          variant="filled"
        />
        <Button
          pos="absolute"
          bottom="42px"
          left="24px"
          w="calc(100% - 48px)"
          h="48px"
          type="submit"
          disabled={!firstName || !lastName}
        >
          Continue
        </Button>
      </Container>
    </form>
  );
});

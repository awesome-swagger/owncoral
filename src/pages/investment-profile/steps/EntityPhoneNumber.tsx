import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Heading, Input, Text, Box } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, SlideContainer } from '../../../components';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityPhoneNumber = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step16: data },
      });
      nextStep();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('entity_phone_number', formState?.step16?.entity_phone_number || '');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <SlideContainer>
            <Box w="100%">
              <BackBtn handleClick={prevStep} />
              <Heading size="md" mt={8} mb={2} textAlign="left">
                What’s your Entity phone number?
              </Heading>
              <Text fontSize="md" textAlign="left">
                Enter your US phone number
              </Text>
              <Input
                as={InputMask}
                placeholder="(XXX) XXX-XXXX"
                className="mask_input"
                name="entity_phone_number"
                mask="(999) 999-9999"
                ref={register({
                  required: true,
                  minLength: 9,
                })}
              />
            </Box>
            <SubmitBtn label="Continue" />
          </SlideContainer>
        </Container>
      </form>
    );
  },
);

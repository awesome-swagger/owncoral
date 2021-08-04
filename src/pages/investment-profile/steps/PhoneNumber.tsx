import { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const PhoneNumber = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);
    const form = useContext(StepFormContext);

    const onSubmit = useCallback(() => {
      if (!phoneNumber.includes('_') && phoneNumber.length !== 0) {
        form.dispatch({
          type: 'update-form',
          payload: { step3: { phoneNumber } },
        });
        nextStep();
      } else {
        setError(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phoneNumber]);

    useEffect(() => {
      const formState = form.formState;
      setPhoneNumber(formState?.step3?.phoneNumber || '');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(
      () =>
        form.dispatch({
          type: 'update-form',
          payload: { step3: { phoneNumber } },
        }),
      [phoneNumber], // eslint-disable-line react-hooks/exhaustive-deps
    );

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            What’s your phone number?
          </Heading>
          <Text fontSize="md" textAlign="left">
            Enter your US phone number
          </Text>
          <Input
            as={InputMask}
            mask="(999) 999-9999"
            name="phone_number"
            placeholder="(XXX) XXX-XXX"
            className={error ? 'mask_input shake_animation' : 'mask_input'}
            value={phoneNumber}
            onChange={(e: any) => {
              setPhoneNumber(e.target.value);
              setError(false);
            }}
          />
          <Text mt={2} colorScheme="red" variant="colored">
            {error ? 'Please enter a valid phone number' : ''}
          </Text>
          <SubmitBtn onClick={onSubmit} label="Continue" />
        </Container>
      </div>
    );
  },
);

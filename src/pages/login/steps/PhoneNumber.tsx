import { forwardRef, useContext, useCallback, useEffect, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { BackBtn, Container, SubmitBtn } from '../../../components';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

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
    }, [phoneNumber]);

    useEffect(() => {
      const formState = form.formState;
      setPhoneNumber(formState?.step3?.phoneNumber || '');
    }, []);
    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
            What’s your phone number?
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Enter your US phone number
          </Text>
          <InputMask
            mask="999 999 9999"
            name="phone_number"
            placeholder="XXX XXX XXX"
            className={error ? 'mask_input shake_animation' : 'mask_input'}
            value={phoneNumber}
            onChange={(e: any) => {
              setPhoneNumber(e.target.value);
              setError(false);
            }}
          />
          <Text mt="0.5rem" color="red">
            {error ? 'Please enter a valid phone number' : ''}
          </Text>
          <SubmitBtn onClick={onSubmit} label="Continue" />
        </Container>
      </div>
    );
  },
);

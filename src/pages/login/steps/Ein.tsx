import { forwardRef, useContext, useEffect, useCallback, useState } from 'react';
import { Heading, Text, Input } from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Ein = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const [einNumber, setEinNumber] = useState('');
  const [error, setError] = useState(false);
  const form = useContext(StepFormContext);

  const onSubmit = useCallback(() => {
    if (!einNumber.includes('_') && einNumber.length !== 0) {
      form.dispatch({
        type: 'update-form',
        payload: { step9: { einNumber } },
      });
      nextStep();
    } else {
      setError(true);
    }
  }, [einNumber]);

  useEffect(() => {
    const formState = form.formState;

    setEinNumber(formState?.step9?.einNumber || '');
  }, []);
  return (
    <div ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
          What’s your EIN?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir amet
        </Text>
        <InputMask
          placeholder="XX-XXXXXXX"
          className={error ? 'mask_input shake_animation' : 'mask_input'}
          name="ein"
          mask="99-9999999"
          value={einNumber}
          onChange={(e: any) => {
            setEinNumber(e.target.value);
            setError(false);
          }}
        />
        <Text mt="0.5rem" color="red">
          {error ? 'Please enter a valid EIN number' : ''}
        </Text>

        <SubmitBtn onClick={onSubmit} label="Continue" />
      </Container>
    </div>
  );
});

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
  useEffect(
    () =>
      form.dispatch({
        type: 'update-form',
        payload: { step9: { einNumber } },
      }),
    [einNumber],
  );

  return (
    <div ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt={8} mb={2} textAlign="left">
          What’s your EIN?
        </Heading>
        <Text fontSize="md" textAlign="left">
          Lorem ipsum dolor sir amet
        </Text>
        <Input
          as={InputMask}
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
        <Text mt={2} color="red">
          {error ? 'Please enter a valid EIN number' : ''}
        </Text>

        <SubmitBtn onClick={onSubmit} label="Continue" />
      </Container>
    </div>
  );
});

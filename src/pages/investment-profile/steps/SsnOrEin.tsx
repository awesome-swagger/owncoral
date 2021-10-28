import { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Input, Text, Box } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, SlideContainer } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const SsnOrEin = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const [ssnNumber, setSsnNumber] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = useCallback(() => {
    if (!ssnNumber.includes('_') && ssnNumber.length !== 0) {
      form.dispatch({
        type: 'update-form',
        payload: { step4: { ssnNumber } },
      });
      nextStep();
    } else {
      setError(true);
    }
  }, [ssnNumber]);

  useEffect(() => {
    const formState = form.formState;

    setSsnNumber(formState?.step4?.ssnNumber || '');
  }, []);

  useEffect(
    () =>
      form.dispatch({
        type: 'update-form',
        payload: { step4: { ssnNumber } },
      }),
    [ssnNumber],
  );

  return (
    <div ref={ref}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title1 mt={8} mb={2} textAlign="left">
              What’s your SSN or EIN?
            </Title1>
            <Text fontSize="md" textAlign="left">
              Lorem ipsum dolor sir amet
            </Text>
            <Input
              as={InputMask}
              className={error ? 'mask_input shake_animation' : 'mask_input'}
              name="Ssn_Or_Ein"
              mask="999-99-9999"
              value={ssnNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSsnNumber(e.target.value);
                setError(false);
              }}
            />
            <Text mt={2} variant="colored" colorScheme="red">
              {error ? 'Please enter a valid SSN number' : ''}
            </Text>
          </Box>
          <SubmitBtn onClick={onSubmit} label="Continue" />
        </SlideContainer>
      </Container>
    </div>
  );
});

import React, { useCallback, useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const PhoneNumber:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback(() => {
    if (!phoneNumber.includes('_') && phoneNumber.length !== 0) {
      form.dispatch?.({ step3: { phoneNumber } });
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
    () => form.dispatch?.({ step3: { phoneNumber } }),
    [phoneNumber], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title1 mt={8} mb={2} textAlign="left">
            What’s your phone number?
          </Title1>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPhoneNumber(e.target.value);
              setError(false);
            }}
          />
          <Text mt={2} colorScheme="red" variant="colored">
            {error ? 'Please enter a valid phone number' : ''}
          </Text>
        </Box>
        <SubmitBtn onClick={onSubmit} label="Continue" />
      </SlideContainer>
    </Container>
  );
}

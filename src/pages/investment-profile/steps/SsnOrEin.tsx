import React, { useCallback, useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';

import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const SsnOrEin:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const form = useContext(InvestmentProfileContext);
  const [ssnNumber, setSsnNumber] = useState('');

  const onSubmit = useCallback(() => {
    form?.dispatch?.({ step9: { ssnNumber } });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, ssnNumber]);

  useEffect(() => {
    const formState = form.formState;

    setSsnNumber(formState?.step9?.ssnNumber || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={2} textAlign="left">
            What’s your SSN or EIN?
          </Title2>
          <Text textStyle="Body1">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            as={InputMask}
            className='mask_input'
            name="Ssn_Or_Ein"
            mask="999999999"
            placeholder='XXXXXXXXX'
            value={ssnNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSsnNumber(e.target.value);
            }}
          />
        </Box>
        <SubmitBtn
          onClick={onSubmit}
          label="Continue"
          disabled={ssnNumber.includes('_') || ssnNumber.length < 9}
        />
      </SlideContainer>
    </Container>
  );
}

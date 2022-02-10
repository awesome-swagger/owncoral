import React, { useCallback, useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';

import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const AccountNumber:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const form = useContext(InvestmentProfileContext);
  const [accountNumber, setAccountNumber] = useState('');

  const onSubmit = useCallback(() => {
    form.dispatch?.({
      step7: {
        ...form?.formState?.step7,
        ira_account_number: accountNumber
      }
    });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, accountNumber]);

  useEffect(() => {
    const formState = form.formState;

    setAccountNumber(formState?.step7?.ira_account_number || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={2} textAlign="left">
            What’s your IRA Account Number?
          </Title2>
          <Text textStyle="Body1">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            as={InputMask}
            className='mask_input'
            name="accountNumber"
            mask="999999999999"
            placeholder="XXXXXXXXXXXX"
            value={accountNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAccountNumber(e.target.value);
            }}
          />
        </Box>
        <SubmitBtn
          onClick={onSubmit}
          label="Continue"
          disabled={accountNumber.includes('_') || accountNumber.length < 12}
        />
      </SlideContainer>
    </Container>
  );
}

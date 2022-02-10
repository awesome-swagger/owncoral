import React, { useCallback, useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const Ein:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const [einNumber, setEinNumber] = useState('');
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback(() => {
    form.dispatch?.({ step4: { einNumber } });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [einNumber]);

  useEffect(() => {
    const formState = form.formState;

    setEinNumber(formState?.step4?.einNumber || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={2} textAlign="left">
            What’s your EIN?
          </Title2>
          <Text fontSize="md" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <Input
            as={InputMask}
            className='mask_input'
            name="ein"
            mask="99-9999999"
            placeholder="XX-XXXXXXX"
            value={einNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEinNumber(e.target.value);
            }}
          />
        </Box>
        <SubmitBtn
          onClick={onSubmit}
          label="Continue"
          disabled={einNumber.includes('_') || einNumber.length < 9}
        />
      </SlideContainer>
    </Container>
  );
}

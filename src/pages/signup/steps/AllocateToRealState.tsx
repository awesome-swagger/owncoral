import React, { useCallback, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

const investment: { invSize: number; label: string }[] = [
  { invSize: 3e3, label: '$1k - $10k' },
  { invSize: 30e3, label: '$10k - $100k' },
  { invSize: 150e3, label: '$100k - $250k' },
  { invSize: 350e3, label: '$250k - $500k' },
  { invSize: 750e3, label: 'More than $500k' },
];

export const AllocateToRealState:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);

  const handleSubmit = async (invSize: number) => {
    dispatch?.({ intendedInvestmentSize: invSize });
    nextStep(); // optimistically updates, ignoring failures
    await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    });
  };

  return (
    <Container layerStyle="noSelect">
      <BackBtn handleClick={prevStep} />
      <ProgressBar total={7} value={7} />
      <Title2 mt={8} mb={6} textAlign="left">
        How much would you invest with Coral?
      </Title2>
      <Text textStyle="Body1">
        How much would you intend to invest with Coral over the next year? This will help us serve
        you better.
      </Text>
      <Box mt={8}>
        {investment.map(({ invSize, label }) => (
          <SelectBox
            key={invSize}
            state={signupInfo?.intendedInvestmentSize}
            value={invSize}
            icon="chevron"
            handleClick={() => handleSubmit(invSize)}
          >
            {label}
          </SelectBox>
        ))}
      </Box>
    </Container>
  );
}

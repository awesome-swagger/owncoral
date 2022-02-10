import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

const netWorth: { nw: number; label: string }[] = [
  { nw: 200e3, label: 'Less than $500,000' },
  { nw: 700e3, label: 'Between $500,000 and $1M' },
  { nw: 2e6, label: 'Between $1M and $5M' },
  { nw: 7e6, label: 'Between $5M and $10 million' },
  { nw: 15e6, label: 'Greater than $10 million' },
];

export const NetWorth:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);

  const handleSubmit = async (netWorth: number) => {
    dispatch?.({ netWorth });
    nextStep(); // optimistically updates, ignoring failures
    await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    });
  };

  return (
    <Box layerStyle="noSelect">
      <Container isFooter={false}>
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={4} />
        <Title2 mt={8} mb={6} textAlign="left">
          What is your net worth?
        </Title2>
        <Text textStyle="Body1">
          We need to know you better in order to comply with SEC regulations. If you are married,
          please use your joint net worth.
        </Text>
        <Box mt={8}>
          {netWorth.map(({ nw, label }, idx) => (
            <SelectBox
              key={idx}
              icon="chevron"
              value={nw}
              state={signupInfo?.netWorth}
              handleClick={() => handleSubmit(nw)}
            >
              {label}
            </SelectBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

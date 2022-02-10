import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

const householdIncomes: { income: number; label: string }[] = [
  { income: 70e3, label: 'Less than $200,000' },
  { income: 230e3, label: 'Between $200,000 and $300,000' },
  { income: 400e3, label: 'Between $300,000 and $500,000' },
  { income: 700e3, label: 'Over $500,000' },
];

export const HouseholdIncome:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);

  const handleSubmit = async (income: number) => {
    dispatch?.({
      incomeAnnual: income,
    });

    nextStep(); // optimistically updates, ignoring failures
    await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    });
  };

  return (
    <Container layerStyle="noSelect">
      <BackBtn handleClick={prevStep} />
      <ProgressBar total={7} value={5} />
      <Title2 mt={8} mb={6} textAlign="left">
        What is your household income?
      </Title2>
      <Text textStyle="Body1">
        We need to know you better in order to comply with SEC regulations.
      </Text>
      <Box mt={8}>
        {householdIncomes.map(({ income, label }, idx) => (
          <SelectBox
            key={idx}
            value={income}
            state={signupInfo?.incomeAnnual}
            icon="chevron"
            handleClick={() => handleSubmit(income)}
          >
            {label}
          </SelectBox>
        ))}
      </Box>
    </Container>
  );
}

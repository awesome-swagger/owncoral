import React, { useContext } from 'react';
import type { InvestmentGoalT } from '../../../shared-fullstack/types';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SelectBox, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

const investmentGoals: { goal: InvestmentGoalT; label: string }[] = [
  { goal: 'DIVERSIFICATION', label: 'Diversification' },
  { goal: 'INCOME', label: 'Steady cash flow (income)' },
  { goal: 'RETURNS', label: 'Overall returns' },
  { goal: 'TAX_EFFICIENCY', label: 'Tax-efficiency / benefits' },
  { goal: 'NOT_SURE', label: "I'm not sure" },
];

export const InvestmentGoal:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);

  const handleClick = (goal: InvestmentGoalT) => {
    let goals: InvestmentGoalT[] = signupInfo?.investmentGoals || [];
    if (goals.includes(goal)) {
      goals = goals.filter((g) => g !== goal);
    } else {
      goals.push(goal);
    }
    goals.sort();

    dispatch?.({
      investmentGoals: goals,
    });
  };

  const handleSubmit = async () => {
    nextStep(); // optimistically updates, ignoring failures
    await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    });
  };

  return (
    <Container
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      layerStyle="noSelect"
    >
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <ProgressBar total={7} value={2} />
          <Title2 mt={8} mb={6} textAlign="left">
            What are your goals?
          </Title2>
          <Text textStyle="Body1">
            What do you want to achieve through investment property ownership? Select all that apply
          </Text>
          <Box my={8}>
            {investmentGoals.map(({ goal, label }, idx) => (
              <SelectBox
                key={idx}
                state={signupInfo?.investmentGoals}
                icon="checkbox"
                value={goal}
                handleClick={() => handleClick(goal)}
              >
                {label}
              </SelectBox>
            ))}
          </Box>
        </Box>
        <SubmitBtn
          label="Continue"
          disabled={!(signupInfo?.investmentGoals || []).length}
          onClick={handleSubmit}
        />
      </SlideContainer>
    </Container>
  );
}

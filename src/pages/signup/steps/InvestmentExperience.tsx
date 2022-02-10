import React, { useContext, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SelectBox } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

type ExperienceT = {
  yrs: number;
  label: string;
};
const experience: ExperienceT[] = [
  { yrs: 1, label: '0-2 years ' },
  { yrs: 3, label: '2-5 years ' },
  { yrs: 7, label: '5-10 years ' },
  { yrs: 14, label: '10-20 years ' },
  { yrs: 30, label: 'More than 20 years ' },
];

export const InvestmentExperience:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (value: number) => {
    dispatch?.({ investmentExperienceYrs: value });
    nextStep(); // optimistically updates, ignoring failures
    await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    });
  };

  return (
    <Box layerStyle="noSelect">
      <Container>
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={1} />
        <Title2 mt={8} mb={6} textAlign="left">
          How long have you been investing?
        </Title2>
        <Box mt={8}>
          {experience.map(({ yrs, label }) => (
            <SelectBox
              key={yrs}
              icon="chevron"
              value={yrs}
              state={signupInfo?.investmentExperienceYrs}
              handleClick={() => handleSubmit(yrs)}
            >
              {label}
            </SelectBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

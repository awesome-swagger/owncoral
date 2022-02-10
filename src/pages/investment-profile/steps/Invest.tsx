import React, { useCallback, useContext } from 'react';
import { Text } from '@chakra-ui/react';

import { BackBtn, Container, SelectBox } from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

type InvestT = {
  title: string;
  content: string;
  value: string;
};
const invests: InvestT[] = [
  { title: 'Individual account', content: 'Invest in a property individually', value: 'Individual' },
  { title: 'Entity account', content: 'Invest through an entity like an IRA or LLC', value: 'Entity' }
]

export const Invest: React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const form = useContext(InvestmentProfileContext);

  const handleClick = useCallback((value: string) => {
    form.dispatch?.({ step5: value });

    if (value === 'Entity')
      nextStep(0);
    else
      nextStep(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIndividualAccount = () => {
    form.dispatch({
      type: 'update-form',
      payload: {
        step5: 'Individual',
      },
    });
    setTimeout(() => {
      history.push('/investment-profile/result');
    }, 200);
  };

  const handleEntityAccount = () => {
    form.dispatch({
      type: 'update-form',
      payload: {
        step5: 'Entity',
      },
    });
    setTimeout(() => {
      nextStep();
    }, 200);
  };

  return (
    <Container>
      <BackBtn handleClick={prevStep} />
      <Title2 mt={8} mb={2} textAlign="left">
        Do you want to invest as an individual or through an entity?
      </Title2>
      {invests.map(({ title, content, value }, idx) => (
        <SelectBox
          key={idx}
          icon="chevron"
          value={value}
          state={form?.formState?.step5}
          handleClick={() => handleClick(value)}
        >
          <Text fontSize="md" colorScheme="gray" variant="colored">
            {title}
          </Text>
          <Text fontSize="sm" colorScheme="gray" variant="colored">
            {content}
          </Text>
        </SelectBox>
      ))}
    </Container>
  );
}

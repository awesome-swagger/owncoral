import { Box, Button, Heading, Image,Progress } from '@chakra-ui/react';
import React, { forwardRef,useCallback, useContext, useEffect, useState } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import type { DivRef } from '../../signup';
import { StepFormContext } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
type investmentGoal = {
  value: number;
  label: string;
  selected: boolean;
};

const investmentGoalList: investmentGoal[] = [
  { value: 0, label: 'Lorem Ipsum', selected: false },
  { value: 1, label: 'Lorem Ipsum', selected: false },
  { value: 2, label: 'Lorem Ipsum', selected: false },
  { value: 3, label: 'Lorem Ipsum', selected: false },
];

export const InvestmentGoal = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);
    const [investmentGoals, setInvestementGoals] = useState<investmentGoal[]>(investmentGoalList);

    const handleChangeSelection = useCallback(
      (selectedIndex: number) => {
        investmentGoals[selectedIndex].selected = !investmentGoals[selectedIndex].selected;

        setInvestementGoals([...investmentGoals]);
      },
      [investmentGoals],
    );

    const handleSubmit = useCallback(() => {
      nextStep();
      form.dispatch({
        type: 'update-form',
        payload: { step8: investmentGoals },
      });
    }, [investmentGoals]);

    useEffect(() => {
      const formState = form.formState;

      if (formState?.step8) {
        setInvestementGoals(formState?.step8);
      }
    }, []);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn pos="absolute" handleClick={prevStep} />
          <Progress mt="32px" colorScheme="gray" size="sm" value={3} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Which is your investment goal?
          </Heading>
          {investmentGoals.map(({ value, label, selected }, index) => (
            <Box
              px="24px"
              py="12px"
              mt="8px"
              bg={selected ? '#cacaca' : '#F3F3F3'}
              color="4E504F"
              textAlign="left"
              cursor="pointer"
              key={value}
              onClick={() => handleChangeSelection(index)}
            >
              {label}
            </Box>
          ))}
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  },
);

import { useState, useCallback, forwardRef, useContext, useEffect } from 'react';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Button, Input, Text } from '@chakra-ui/react';
import { DayPicker } from '../../../components/daypicker';
import type { DivRef } from '../steps';
import { SubmitBtn } from '../../../components/submitBtn';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const DateOfFormation = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const [date, setDate] = useState(new Date());
    const form = useContext(StepFormContext);
    const handleDateChange = useCallback(
      (newDate) => {
        setDate(newDate);
      },
      [date],
    );

    const onSubmit = useCallback(() => {
      form.dispatch({ type: 'update-form', payload: { step12: date } });
      nextStep();
    }, [date]);

    useEffect(() => {
      const formState = form.formState;
      setDate(typeof formState?.step12 === 'object' ? new Date(formState?.step12) : new Date());
    }, []);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Which is the date of formation?
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <DayPicker onChange={handleDateChange} date={date} />
          <SubmitBtn onClick={onSubmit} label="Continue" />
        </Container>
      </div>
    );
  },
);

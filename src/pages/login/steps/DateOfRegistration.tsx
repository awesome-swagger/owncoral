import { useState, useCallback, forwardRef, useContext, useEffect } from 'react';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Button, Text } from '@chakra-ui/react';
import { DayPicker } from '../../../components/daypicker';
import { SubmitBtn } from '../../../components/submitBtn';
import type { DivRef } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const DateOfRegistration = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const [date, setDate] = useState(new Date());
    const form = useContext(StepFormContext);

    const onSubmit = useCallback(() => {
      form.dispatch({ type: 'update-form', payload: { step14: date } });
      nextStep();
    }, [date]);

    useEffect(() => {
      const formState = form.formState;
      setDate(typeof formState?.step14 === 'object' ? new Date(formState?.step14) : new Date());
    }, []);

    const handleDateChange = useCallback(
      (newDate) => {
        setDate(newDate);
      },
      [date],
    );
    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Which is the date of registration?
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

import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';

import { BackBtn, Container, DayPicker, SubmitBtn } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const initialDate = {
  year: '2000',
  month: 'Jan',
  day: '30',
};

export const BirthDate = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const [date, setDate] = useState(initialDate);
  const currentYear = new Date().getFullYear();
  const age = currentYear - Number(date.year);

  const form = useContext(StepFormContext);

  const handleDateChange = useCallback(
    (newDate) => {
      setDate((prevState) => ({
        ...prevState,
        ...newDate,
      }));
    },
    [setDate],
  );

  useEffect(() => {
    if (Number(date.year) <= currentYear && date.month && Number(date.day) <= 31 && age >= 18)
      form.dispatch({ type: 'update-form', payload: { step3: date } });
  }, [date]);

  const onSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step3: date } });
    nextStep();
  }, [date]);

  useEffect(() => {
    const formState = form.formState;

    setDate(formState?.step3 || initialDate);
  }, []);

  return (
    <Container ref={ref} layerStyle="noSelect">
      <BackBtn handleClick={prevStep} />
      <Heading size="md" mt={8} mb={2} textAlign="left">
        When is your Birthday?
      </Heading>
      <DayPicker date={date} onChange={handleDateChange} />
      <Heading size="xs" color="red">
        {age < 18 ? 'You are under 18!' : ''}
      </Heading>
      <SubmitBtn
        onClick={onSubmit}
        label="Continue"
        disabled={
          Number(date.year) <= currentYear && date.month && Number(date.day) <= 31 && age >= 18
            ? false
            : true
        }
      />
    </Container>
  );
});

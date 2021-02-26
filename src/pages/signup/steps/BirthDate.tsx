import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { DayPicker } from '../../../components/daypicker';
import { SubmitBtn } from '../../../components/submitBtn';
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

  const onSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step3: date } });
    nextStep();
  }, [date]);

  useEffect(() => {
    const formState = form.formState;

    setDate(formState?.step3 || initialDate);
  }, []);

  return (
    <Box ref={ref} layerStyle="noSelect">
      <Container>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left">
          When is your Birthday?
        </Heading>
        <DayPicker date={date} onChange={handleDateChange} />
        <SubmitBtn
          onClick={onSubmit}
          label="Continue"
          disabled={date.year && date.month && date.day ? false : true}
        />
      </Container>
    </Box>
  );
});

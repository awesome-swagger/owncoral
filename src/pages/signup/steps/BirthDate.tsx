import { Box, Button, Heading } from '@chakra-ui/react';
import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { DayPicker } from '../../../components/daypicker';
import { SubmitBtn } from '../../../components/submitBtn';
import type { DivRef } from '../../signup';
import { StepFormContext } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const BirthDate = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const [date, setDate] = useState(new Date());
  const form = useContext(StepFormContext);

  const handleDateChange = useCallback(
    (newDate) => {
      setDate(newDate);
    },
    [date],
  );
  const onSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step3: date } });
    nextStep();
  }, [date]);

  useEffect(() => {
    const formState = form.formState;

    setDate(typeof formState?.step3 !== 'undefined' ? new Date(formState?.step3) : new Date());
  }, []);

  return (
    <Box ref={ref} layerStyle="noSelect">
      <Container>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
          When is your Birthday?
        </Heading>
        <DayPicker onChange={handleDateChange} date={date} />
        <SubmitBtn onClick={onSubmit} label="Continue" />
      </Container>
    </Box>
  );
});

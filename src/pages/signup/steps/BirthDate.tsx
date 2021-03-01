import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { BackBtn, Container, SubmitBtn, DayPicker, HeadingTypography } from '../../../components';
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

        <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
          When is your Birthday?
        </HeadingTypography>
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

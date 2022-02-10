import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { BackBtn, Container, DayPicker, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

const initialDate = {
  year: '2000',
  month: '1',
  day: '30',
};

export const DateOfBirth:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const [date, setDate] = useState(initialDate);

  // TODO: extract into own function
  const checkValid = useMemo<boolean>(() => {
    const now = Date.now();

    const currentDate = new Date(
      Number(date.year),
      Number(date.month),
      Number(date.day),
    ).getTime();

    return date.month &&
      date.day &&
      Number(date.day) < 31 &&
      date.year &&
      !(date.day || '').includes('_') &&
      (date.day || '').length !== 0 &&
      !isNaN(currentDate) &&
      currentDate < now
      ? false
      : true;
    }, [date]);

  const form = useContext(InvestmentProfileContext);
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
    form.dispatch?.({ step1: date });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  useEffect(() => {
    const formState = form.formState;

    setDate(formState?.step1 || initialDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    form.dispatch?.({ step1: date });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title1 mt={8} mb={2} textAlign="left">
            Which&#39;s your date of birth?
          </Title1>
          <Box mt={16}>
            <DayPicker date={date} onChange={handleDateChange} />
          </Box>
        </Box>
        <SubmitBtn onClick={onSubmit} label="Continue" disabled={checkValid} />
      </SlideContainer>
    </Container>
  );
}

import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn, Container, DayPicker, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

const initialDate = {
  year: '',
  month: '',
  day: '',
};

export const DateOfFormation:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
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
      date.day.length !== 0 &&
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
    form.dispatch?.({ step11: date });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => form.dispatch?.({ step11: date }), [date]);

  useEffect(() => {
    const formState = form.formState;

    setDate(formState?.step11 || initialDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title1 mt={8} mb={2} textAlign="left">
            Which is the date of formation?
          </Title1>
          <Text fontSize="md" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <DayPicker date={date} onChange={handleDateChange} />
        </Box>
        <SubmitBtn onClick={onSubmit} label="Continue" disabled={checkValid} />
      </SlideContainer>
    </Container>
  );
}

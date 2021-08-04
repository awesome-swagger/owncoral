import { forwardRef, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';

import { BackBtn, Container, DayPicker, SubmitBtn } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const initialDate = {
  year: '2000',
  month: '1',
  day: '30',
};

export const DateOfRegistration = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
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
      form.dispatch({ type: 'update-form', payload: { step13: date } });
      nextStep();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    useEffect(() => {
      const formState = form.formState;

      setDate(formState?.step13 || initialDate);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      form.dispatch({ type: 'update-form', payload: { step13: date } });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            Which is the date of registration?
          </Heading>
          <Text fontSize="md" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <DayPicker date={date} onChange={handleDateChange} />
          <SubmitBtn onClick={onSubmit} label="Continue" disabled={checkValid} />
        </Container>
      </div>
    );
  },
);

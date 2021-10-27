import { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { Heading, Box } from '@chakra-ui/react';

import { BackBtn, Container, DayPicker, SubmitBtn, SlideContainer } from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

const initialDate = {
  year: '2000',
  month: 'Jan',
  day: '30',
};

export const BirthDate = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const [date, setDate] = useState(initialDate);
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(date.year);

    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step3;

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    const onSubmit = useCallback(() => {
      form.dispatch({ type: 'update-form', payload: { step3: date } });
      nextStep();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    useEffect(() => {
      setDate(formStep || initialDate);
      // eslint-disable-next-line
    }, []);

    return (
      <Container ref={ref} layerStyle="noSelect">
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Heading size="md" mt={8} mb={2} textAlign="left">
              When is your Birthday?
            </Heading>
            <DayPicker date={date} onChange={handleDateChange} />
            {age < 18 && (
              <Heading size="xs" color="red">
                You are under 18!
              </Heading>
            )}
          </Box>
          <SubmitBtn
            onClick={onSubmit}
            label="Continue"
            disabled={
              Number(date.year) > currentYear || !date.month || Number(date.day) > 31 || age < 18
            }
          />
        </SlideContainer>
      </Container>
    );
  },
);

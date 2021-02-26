import { useState, useCallback, forwardRef, useContext, useEffect } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { DayPicker } from '../../../components/daypicker';
import { SubmitBtn } from '../../../components/submitBtn';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const initialDate = {
  year: '',
  month: '',
  day: '',
};

export const DateOfFormation = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
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
      form.dispatch({ type: 'update-form', payload: { step11: date } });
      nextStep();
    }, [date]);

    useEffect(() => {
      const formState = form.formState;

      setDate(formState?.step11 || initialDate);
    }, []);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
            Which is the date of formation?
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <DayPicker date={date} onChange={handleDateChange} />
          <SubmitBtn
            onClick={onSubmit}
            label="Continue"
            disabled={date.year && date.month && date.day ? false : true}
          />
        </Container>
      </div>
    );
  },
);

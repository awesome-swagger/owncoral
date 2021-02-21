import { Button,Heading } from '@chakra-ui/react';
import { forwardRef,useCallback, useContext, useEffect, useState } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { DayPicker } from '../../../components/daypicker';
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
    <div ref={ref}>
      <Container>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
          When is your Birthday?
        </Heading>
        <DayPicker onChange={handleDateChange} date={date} />
        <Button
          pos="absolute"
          bottom="42px"
          left="24px"
          w="calc(100% - 48px)"
          h="48px"
          bg="#4E504F"
          color="#fff"
          onClick={onSubmit}
        >
          Continue
        </Button>
      </Container>
    </div>
  );
});

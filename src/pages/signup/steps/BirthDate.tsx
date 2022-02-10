import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { parseISO } from 'date-fns';

import { BackBtn, Container, DayPicker, SlideContainer, SubmitBtn } from '../../../components';
import { Headline, Title2 } from '../../../components/text';
import { splitDate } from '../../../lib/splitDate';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

const initialDate = {
  year: '2000',
  month: 'Jan',
  day: '30',
};

export const BirthDate:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const [date, setDate] = useState(initialDate);
  const currentYear = new Date().getFullYear();
  const age = currentYear - Number(date.year);

  const { signupInfo, dispatch } = useContext(SignupContext);

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
    if (Number(date.year) <= currentYear && date.month && Number(date.day) <= 31 && age >= 18) {
      const bdAsDate = new Date(Number(date.year), Number(date.month), Number(date.day));
      dispatch?.({ birthDate: bdAsDate.toISOString() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const onSubmit = useCallback(() => {
    const bdAsDate = new Date(Number(date.year), Number(date.month), Number(date.day));
    dispatch?.({ birthDate: bdAsDate.toISOString() });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  useEffect(() => {
    const splitBirthDate = signupInfo?.birthDate
      ? splitDate(parseISO(signupInfo.birthDate))
      : initialDate;
    setDate(splitBirthDate);
    // eslint-disable-next-line
  }, []);

  return (
    <Container layerStyle="noSelect" isFooter={false}>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={6} textAlign="left">
            When is your Birthday?
          </Title2>
          <DayPicker date={date} onChange={handleDateChange} />
          {age < 18 && (
            <Headline color="red">
              You are under 18!
            </Headline>
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
}

import { Box,Heading, Progress } from '@chakra-ui/react';
import { forwardRef, useCallback, useContext } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import type { DivRef } from '../../signup';
import { StepFormContext } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const netWorth = [
  { value: '$500k or less' },
  { value: '$500k - $1m' },
  { value: '$1m - $3m' },
  { value: '$3m - $5m' },
  { value: '$10m or more' },
  { value: 'I prefer not to say' },
];
export const NetWorth = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback((value) => {
    nextStep();
    form.dispatch({ type: 'update-form', payload: { step9: value } });
  }, []);

  return (
    <div ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />

        <Progress mt="32px" colorScheme="gray" size="sm" value={33} />

        <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
          How much is your net worth
        </Heading>
        {netWorth.map(({ value }) => (
          <Box
            px="24px"
            py="12px"
            mt="8px"
            bg="#F3F3F3"
            color="4E504F"
            textAlign="left"
            cursor="pointer"
            key={value}
            onClick={() => handleSubmit(value)}
          >
            {value}
          </Box>
        ))}
      </Container>
    </div>
  );
});

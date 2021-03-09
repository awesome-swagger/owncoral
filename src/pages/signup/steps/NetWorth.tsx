import { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Progress } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

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
  { value: 'I would prefer not to say' },
];

export const NetWorth = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback((value) => {
    form.dispatch({ type: 'update-form', payload: { step9: value } });
    nextStep();
  }, []);

  return (
    <Box ref={ref} layerStyle="noSelect">
      <Container>
        <BackBtn handleClick={prevStep} />

        <Progress mt={8} borderRadius="full" colorScheme="primary" size="sm" value={40} />

        <Heading size="md" as="h4" mt={8} mb={2} textAlign="left">
          What is your net worth?
        </Heading>
        {netWorth.map(({ value }) => (
          <Box
            px={6}
            py={3}
            mt={2}
            layerStyle={value === form?.formState?.step9 ? 'selectionBox.selected' : 'selectionBox'}
            borderRadius="full"
            textAlign="left"
            cursor="pointer"
            key={value}
            onClick={() => handleSubmit(value)}
          >
            {value}
          </Box>
        ))}
      </Container>
    </Box>
  );
});

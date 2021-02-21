import { Box, Heading, Progress, useColorModeValue } from '@chakra-ui/react';
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
  { value: 'I would prefer not to say' },
];
export const NetWorth = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback((value) => {
    nextStep();
    form.dispatch({ type: 'update-form', payload: { step9: value } });
  }, []);

  const selectionColors = useColorModeValue(
    { bg: 'gray.100', color: 'black', _hover: { bg: 'primary.100' } },
    { bg: 'whiteAlpha.100', color: 'white', _hover: { bg: 'secondary.800' } },
  );

  return (
    <Box ref={ref} layerStyle="noSelect">
      <Container>
        <BackBtn handleClick={prevStep} />

        <Progress mt="32px" borderRadius="full" colorScheme="primary" size="sm" value={40} />

        <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
          What is your net worth?
        </Heading>
        {netWorth.map(({ value }) => (
          <Box
            px="24px"
            py="12px"
            mt="8px"
            {...selectionColors}
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

import { forwardRef, useCallback, useContext } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar } from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

const netWorth = [
  { value: 'Less than $500,000' },
  { value: 'Between $500,000 and $1M' },
  { value: 'Between $1M and $5M' },
  { value: 'Between $5M and $10 million' },
  { value: 'Greater than $10 million' },
];

export const NetWorth = forwardRef<DivRef, StepPropsT>(({ nextStep, prevStep }: StepPropsT, ref) => {
  const form = useContext(StepFormContext);
  const formStep = form?.formState?.step8;

    const handleSubmit = useCallback(
      (value) => {
        form.dispatch({ type: 'update-form', payload: { step8: value } });
        nextStep();
      },
      [form, nextStep],
    );

    return (
      <Box ref={ref} layerStyle="noSelect">
        <Container>
          <BackBtn handleClick={prevStep} />
          <ProgressBar total={7} value={4} />
          <Heading size="md" as="h4" mt={8} mb={2} textAlign="left">
            What is your approximate net worth (jointly with your spouse, if married)?
          </Heading>
          <Text fontSize="md">
            We need to know you better in order to comply with SEC regulations.
          </Text>
          <Box my={8}>
            {netWorth.map(({ value }) => (
              <Box
                px={6}
                py={3}
                mt={2}
                layerStyle={value === formStep ? 'selectionBox.selected' : 'selectionBox'}
                borderRadius="full"
                textAlign="left"
                cursor="pointer"
                key={value}
                onClick={() => handleSubmit(value)}
              >
                {value}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    );
  },
);

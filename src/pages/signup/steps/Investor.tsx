import { Box,Button, Heading, Text  } from '@chakra-ui/react';
import { forwardRef, useCallback, useContext } from 'react';

import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import type { DivRef } from '../../signup';
import { StepFormContext } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Investor = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step4: 'yes' } });
    nextStep();
  }, []);
  return (
    <Box ref={ref} layerStyle="noSelect">
      <Container>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
          Are you an accredited investor?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </Text>
        <Text fontSize="0.85rem" color="gray.500" textAlign="left">
          Amet minim mollit non deserunt ullamco est.
        </Text>
        <Button
          pos="absolute"
          bottom="106px"
          left="24px"
          w="calc(100% - 48px)"
          h="48px"
          variant="outline"
          onClick={handleSubmit}
        >
          Yes
        </Button>
        <Button pos="absolute" bottom="42px" left="24px" w="calc(100% - 48px)" h="48px">
          No
        </Button>
      </Container>
    </Box>
  );
});

import { Dispatch, forwardRef, useCallback, useContext, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import { BackBtn, Container, FlexContainer } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Investor = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const [available, setAvailable] = useState('Available');

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step4: 'yes' } });
    nextStep();
  }, []);

  return (
    <div>
      {available === 'Available' ? (
        <Box ref={ref} layerStyle="noSelect">
          <Container>
            <BackBtn handleClick={prevStep} />
            <Heading size="md" mt={8} mb={2} textAlign="left">
              Are you an accredited investor?
            </Heading>
            <Text fontSize="md" textAlign="left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </Text>
            <Text fontSize="sm" color="gray.500" textAlign="left">
              Amet minim mollit non deserunt ullamco est.
            </Text>
            <Button
              pos="absolute"
              bottom={28}
              left={6}
              w="calc(100% - 3rem)"
              h={12}
              variant="outline"
              onClick={handleSubmit}
              children="Yes"
            />
            <Button
              onClick={() => setAvailable('Not Available')}
              pos="absolute"
              bottom={10}
              left={6}
              w="calc(100% - 3rem)"
              h={12}
              variant="outline"
              children="No"
            />
          </Container>
        </Box>
      ) : (
        <NotAvailable goBack={() => setAvailable('Available')} />
      )}
    </div>
  );
});

const NotAvailable = ({ goBack }: { goBack: Dispatch<any> }) => (
  <FlexContainer layerStyle="noSelect">
    <Box pos="absolute" left={6} top={6} h={4} w={4} cursor="pointer" onClick={goBack}>
      <FiChevronLeft style={{ width: '1rem', height: '1rem' }} />
    </Box>
    <Heading size="md" as="h4" textAlign="center">
      Coral is currently available to accredited investors only
    </Heading>
    <Text fontSize="md" textAlign="center">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </Text>
    <Button pos="absolute" bottom={10} left={6} w="calc(100% - 3rem)" h={12}>
      Dismiss
    </Button>
  </FlexContainer>
);

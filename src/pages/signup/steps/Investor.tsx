import { forwardRef, useCallback, useContext, useState } from 'react';
import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';
import { BackBtn } from '../../../components/backBtn';
import { Container, FlexContainer } from '../../../components/container';
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
            <BackBtn pos="absolute" handleClick={prevStep} />

            <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left">
              Are you an accredited investor?
            </Heading>
            <Text fontSize="1rem" textAlign="left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </Text>
            <Text fontSize="0.85rem" color="gray.500" textAlign="left">
              Amet minim mollit non deserunt ullamco est.
            </Text>
            <Button
              pos="absolute"
              bottom="6.25rem"
              left="1.5rem"
              w="calc(100% - 3rem)"
              h="3rem"
              variant="outline"
              onClick={handleSubmit}
            >
              Yes
            </Button>
            <Button
              onClick={() => setAvailable('Not Available')}
              pos="absolute"
              bottom="2.5rem"
              left="1.5rem"
              w="calc(100% - 3rem)"
              h="3rem"
            >
              No
            </Button>
          </Container>
        </Box>
      ) : (
        <NotAvailable goBack={() => setAvailable('Available')} />
      )}
    </div>
  );
});

const NotAvailable = ({ goBack }: { goBack: React.Dispatch<any> }) => {
  const colorScheme = useColorModeValue('primary', 'secondary');

  return (
    <FlexContainer layerStyle="noSelect">
      <Box
        pos="absolute"
        left="1.5rem"
        top="1.5rem"
        h="1rem"
        w="1rem"
        cursor="pointer"
        onClick={goBack}
      >
        <BsChevronLeft style={{ width: '1rem', height: '1rem' }} />
      </Box>
      <Heading size="md" as="h4" textAlign="center">
        Coral is currently available to accredited investors only
      </Heading>
      <Text fontSize="1rem" textAlign="center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </Text>
      <Button
        pos="absolute"
        bottom="2.5rem"
        left="1.5rem"
        w="calc(100% - 3rem)"
        h="3rem"
        colorScheme={colorScheme}
      >
        Dismiss
      </Button>
    </FlexContainer>
  );
};

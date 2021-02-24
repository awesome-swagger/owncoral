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

            <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
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
              bottom="106px"
              left="24px"
              w="calc(100% - 48px)"
              h="48px"
              variant="outline"
              onClick={handleSubmit}
            >
              Yes
            </Button>
            <Button
              onClick={() => setAvailable('Not Available')}
              pos="absolute"
              bottom="42px"
              left="24px"
              w="calc(100% - 48px)"
              h="48px"
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
        left="24px"
        top="24px"
        h="16px"
        w="16px"
        cursor="pointer"
        onClick={goBack}
      >
        <BsChevronLeft style={{ width: '16px', height: '16px' }} />
      </Box>
      <Heading size="md" as="h4" textAlign="center">
        Coral is currently available to accredited investors only
      </Heading>
      <Text fontSize="1rem" textAlign="center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </Text>
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        colorScheme={colorScheme}
      >
        Dismiss
      </Button>
    </FlexContainer>
  );
};

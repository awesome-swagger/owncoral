import { Dispatch, forwardRef, useCallback, useContext, useState } from 'react';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';
import {
  BackBtn,
  Container,
  FlexContainer,
  HeadingTypography,
  TextTypography,
} from '../../../components';
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

            <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
              Are you an accredited investor?
            </HeadingTypography>
            <TextTypography fontSize="md" textAlign="left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </TextTypography>
            <TextTypography fontSize="sm" color="gray.500" textAlign="left">
              Amet minim mollit non deserunt ullamco est.
            </TextTypography>
            <Button
              pos="absolute"
              bottom={24}
              left={6}
              w="calc(100% - 3rem)"
              h={12}
              variant="outline"
              onClick={handleSubmit}
            >
              Yes
            </Button>
            <Button
              onClick={() => setAvailable('Not Available')}
              pos="absolute"
              bottom={10}
              left={6}
              w="calc(100% - 3rem)"
              h={12}
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

const NotAvailable = ({ goBack }: { goBack: Dispatch<any> }) => {
  const colorScheme = useColorModeValue('primary', 'secondary');

  return (
    <FlexContainer layerStyle="noSelect">
      <Box pos="absolute" left={6} top={6} h={4} w={4} cursor="pointer" onClick={goBack}>
        <BsChevronLeft style={{ width: '1rem', height: '1rem' }} />
      </Box>
      <HeadingTypography size="md" as="h4" textAlign="center">
        Coral is currently available to accredited investors only
      </HeadingTypography>
      <TextTypography fontSize="md" textAlign="center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </TextTypography>
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        colorScheme={colorScheme}
      >
        Dismiss
      </Button>
    </FlexContainer>
  );
};
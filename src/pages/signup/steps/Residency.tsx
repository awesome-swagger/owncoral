import React, { forwardRef, useCallback, useContext, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, FlexContainer } from '../../../components';
import type { DivRef } from '../index';
import { ContextT, StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

type availableT = 'Available' | 'taxID' | 'notAvailable';

const initialQuestions: { value: availableT; label: string }[] = [
  { value: 'Available', label: 'Yes' },
  { value: 'taxID', label: 'I Have a Tax ID' },
  { value: 'notAvailable', label: 'No' },
];

export const Residency = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const [available, setAvailable] = useState<availableT>('Available');
  const form = useContext(StepFormContext);

  const handleSubmit = useCallback(
    (value) => {
      if (value === 'Available') {
        form.dispatch({ type: 'update-form', payload: { step1: value } });
        nextStep();
      } else {
        setAvailable(value);
      }
    },
    [available],
  );

  return (
    <Box ref={ref} layerStyle="noSelect">
      {available === 'Available' ? (
        <Container>
          <BackBtn handleClick={prevStep} />
          <Heading as="h4" size="md" mt={8} mb={6} textAlign="left">
            Are you a U.S resident?
          </Heading>
          {initialQuestions.map(({ value, label }) => (
            <Box
              key={value}
              px={6}
              py={3}
              mt={2}
              borderRadius="full"
              textAlign="left"
              cursor="pointer"
              onClick={() => handleSubmit(value)}
              layerStyle="selectionBox"
            >
              {label}
            </Box>
          ))}
        </Container>
      ) : available === 'taxID' ? (
        <TaxID
          goBack={() => setAvailable('Available')}
          form={form}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : (
        <NotAvailable goBack={() => setAvailable('Available')} />
      )}
    </Box>
  );
});

const TaxID = ({
  nextStep,
  form,
  goBack,
}: stepProps & { form: ContextT } & { goBack: React.Dispatch<any> }) => {
  const [taxID, setTaxID] = useState<string>('');

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step1: { taxID } } });
    nextStep();
  }, [taxID]);

  return (
    <Container layerStyle="noSelect">
      <Box h={4} w={4} cursor="pointer" onClick={goBack}>
        <FiChevronLeft style={{ width: '1rem', height: '1rem' }} />
      </Box>
      <Heading size="md" as="h4" mt={8} mb={2} textAlign="left">
        Please enter your Tax ID
      </Heading>
      <Text fontSize="md" textAlign="left">
        Lorem ipsum dolor sir
      </Text>
      <Input
        as={InputMask}
        mask="999-99-9999"
        type="tel"
        maskPlaceholder="0"
        placeholder="XXX-XX-XXXX"
        fontFamily="monospace"
        className="mask_input"
        h={12}
        mt={8}
        value={taxID}
        variant="filled"
        onChange={(e: any) => setTaxID(e.target.value)}
      />
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        disabled={!taxID.length}
        onClick={() => handleSubmit()}
      >
        Continue
      </Button>
    </Container>
  );
};

const NotAvailable = ({ goBack }: { goBack: React.Dispatch<any> }) => {
  return (
    <FlexContainer layerStyle="noSelect">
      <Box pos="absolute" left={6} top={6} h={4} w={4} cursor="pointer" onClick={goBack}>
        <FiChevronLeft style={{ width: '1rem', height: '1rem' }} />
      </Box>
      <Heading size="md" as="h4" textAlign="center">
        Sorry, Coral is only available for U.S. residents
      </Heading>
      <Text fontSize="md" textAlign="center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </Text>
      <Button pos="absolute" bottom={10} left={6} w="calc(100% - 3rem)" h={12}>
        Dismiss
      </Button>
    </FlexContainer>
  );
};

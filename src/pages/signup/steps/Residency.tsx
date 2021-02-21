import { Box, Button, Heading, Input, Text, useColorModeValue } from '@chakra-ui/react';
import React, { forwardRef, useCallback, useContext, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

import { BackBtn } from '../../../components/backBtn';
import { Container, FlexContainer } from '../../../components/container';
import type { DivRef } from '../../signup';
import { ContextType, StepFormContext } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

type availableType = 'Available' | 'taxID' | 'notAvailable';

const initialQuestions: { value: availableType; label: string }[] = [
  { value: 'Available', label: 'Yes' },
  { value: 'taxID', label: 'I Have a Tax ID' },
  { value: 'notAvailable', label: 'No' },
];

export const Residency = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const [available, setAvailable] = useState<availableType>('Available');
  const form = useContext(StepFormContext);

  const selectionColors = useColorModeValue(
    { bg: 'gray.100', color: 'black', _hover: { bg: 'primary.100' } },
    { bg: 'whiteAlpha.100', color: 'white', _hover: { bg: 'secondary.800' } },
  );

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
          <Heading as="h4" size="md" mt="32px" mb="24px" textAlign="left">
            Are you a U.S resident?
          </Heading>
          {initialQuestions.map(({ value, label }) => (
            <Box
              key={value}
              px="24px"
              py="12px"
              mt="8px"
              // bg={gray}
              borderRadius="full"
              // color={color}
              textAlign="left"
              cursor="pointer"
              // _hover={{ backgroundColor: highlight }}
              onClick={() => handleSubmit(value)}
              {...selectionColors}
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
}: stepProps & { form: ContextType } & { goBack: React.Dispatch<any> }) => {
  const [taxID, setTaxID] = useState<string>('');

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step1: { taxID } } });
    nextStep();
  }, [taxID]);

  return (
    <Container layerStyle="noSelect">
      <Box h="16px" w="16px" cursor="pointer" onClick={goBack}>
        <BsChevronLeft style={{ width: '16px', height: '16px' }} />
      </Box>
      <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
        Please enter your Tax ID
      </Heading>
      <Text fontSize="1rem" textAlign="left">
        Lorem ipsum dolor sir
      </Text>
      <Input
        placeholder="XX-XX-XXXX"
        h="48px"
        mt="32px"
        value={taxID}
        variant="filled"
        onChange={(e) => setTaxID(e.target.value)}
      />
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        disabled={!taxID.length}
        onClick={() => handleSubmit()}
      >
        Continue
      </Button>
    </Container>
  );
};

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
        Sorry, Coral is only available for U.S. residents
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

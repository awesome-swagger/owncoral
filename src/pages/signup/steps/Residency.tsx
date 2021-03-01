import React, { forwardRef, useCallback, useContext, useState } from 'react';
import { Box, Button, Input, useColorModeValue } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';
import {
  Container,
  FlexContainer,
  BackBtn,
  HeadingTypography,
  TextTypography,
} from '../../../components';
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
          <HeadingTypography as="h4" size="md" mt={8} mb={6} textAlign="left">
            Are you a U.S resident?
          </HeadingTypography>
          {initialQuestions.map(({ value, label }) => (
            <Box
              key={value}
              px={6}
              py={3}
              mt={2}
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
}: stepProps & { form: ContextT } & { goBack: React.Dispatch<any> }) => {
  const [taxID, setTaxID] = useState<string>('');

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step1: { taxID } } });
    nextStep();
  }, [taxID]);

  return (
    <Container layerStyle="noSelect">
      <Box h={4} w={4} cursor="pointer" onClick={goBack}>
        <BsChevronLeft style={{ width: '1rem', height: '1rem' }} />
      </Box>
      <HeadingTypography size="md" as="h4" mt={8} mb={2} textAlign="left">
        Please enter your Tax ID
      </HeadingTypography>
      <TextTypography fontSize="md" textAlign="left">
        Lorem ipsum dolor sir
      </TextTypography>
      <Input
        placeholder="XX-XX-XXXX"
        h={12}
        mt={8}
        value={taxID}
        variant="filled"
        onChange={(e) => setTaxID(e.target.value)}
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
  const colorScheme = useColorModeValue('primary', 'secondary');

  return (
    <FlexContainer layerStyle="noSelect">
      <Box pos="absolute" left={6} top={6} h={4} w={4} cursor="pointer" onClick={goBack}>
        <BsChevronLeft style={{ width: '1rem', height: '1rem' }} />
      </Box>
      <HeadingTypography size="md" as="h4" textAlign="center">
        Sorry, Coral is only available for U.S. residents
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

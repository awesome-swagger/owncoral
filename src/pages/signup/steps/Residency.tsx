import React, { forwardRef, useCallback, useContext, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, FlexContainer } from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { ContextT, StepFormContext } from '../index';

type AvailableT = 'Available' | 'taxID' | 'notAvailable';

const initialQuestions: { value: AvailableT; label: string }[] = [
  { value: 'Available', label: 'Yes' },
  { value: 'taxID', label: 'I Have a Tax ID' },
  { value: 'notAvailable', label: 'No' },
];

export const Residency = forwardRef<DivRef, StepPropsT>(({ nextStep, prevStep }: StepPropsT, ref) => {
  const [available, setAvailable] = useState<AvailableT>('Available');
  const form = useContext(StepFormContext);

    const handleSubmit = useCallback(
      (value) => {
        if (value === 'Available') {
          form.dispatch({ type: 'update-form', payload: { step2: value } });
          nextStep();
        } else {
          setAvailable(value);
        }
      },
      [form, nextStep],
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
  },
);

const TaxID = ({
  nextStep,
  form,
  goBack,
}: StepPropsT & { form: ContextT } & { goBack: React.Dispatch<any> }) => {
  const [taxID, setTaxID] = useState<string>('');

  const handleSubmit = useCallback(() => {
    form.dispatch({ type: 'update-form', payload: { step2: { taxID } } });
    nextStep();
  }, [taxID, form, nextStep]);

  return (
    <Container d="flex" flexDir="column" justifyContent="space-between" layerStyle="noSelect">
      <Box>
        <BackBtn handleClick={goBack} />
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
      </Box>
      <Button h={12} disabled={!taxID.length} onClick={() => handleSubmit()}>
        Continue
      </Button>
    </Container>
  );
};

const NotAvailable = ({ goBack }: { goBack: React.Dispatch<any> }) => (
  <FlexContainer layerStyle="noSelect">
    <BackBtn handleClick={goBack} pos="absolute" top={6} left={6} />
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

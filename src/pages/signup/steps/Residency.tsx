import React, { forwardRef, useCallback, useContext, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Input, Text } from '@chakra-ui/react';

import {
  BackBtn,
  Container,
  FlexContainer,
  SlideContainer,
  SubmitBtn,
  SelectBox,
} from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { ContextT, StepFormContext } from '../index';

type AvailableT = 'Available' | 'taxID' | 'notAvailable';

const initialQuestions: { value: AvailableT; label: string }[] = [
  { value: 'Available', label: 'Yes' },
  { value: 'taxID', label: 'I Have a Tax ID' },
  { value: 'notAvailable', label: 'No' },
];

export const Residency = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
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
            <Title1 mt={8} mb={6} textAlign="left">
              Are you a U.S resident?
            </Title1>
            {initialQuestions.map(({ value, label }, idx) => (
              <SelectBox
                key={idx}
                value={label}
                state={value}
                icon={false}
                handleClick={() => handleSubmit(value)}
              />
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
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={goBack} />
          <Title1 mt={8} mb={2} textAlign="left">
            Please enter your Tax ID
          </Title1>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaxID(e.target.value)}
          />
        </Box>
        <SubmitBtn label="Continue" disabled={!taxID.length} onClick={() => handleSubmit()} />
      </SlideContainer>
    </Container>
  );
};

const NotAvailable = ({ goBack }: { goBack: React.Dispatch<any> }) => (
  <FlexContainer layerStyle="noSelect">
    <SlideContainer>
      <Box w="100%">
        <BackBtn handleClick={goBack} />
      </Box>
      <Box w="100%" my={6}>
        <Title1 textAlign="center">Sorry, Coral is only available for U.S. residents</Title1>
        <Text fontSize="md" textAlign="center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </Text>
      </Box>
      <SubmitBtn label="Dismiss" />
    </SlideContainer>
  </FlexContainer>
);

import React, { forwardRef, useCallback, useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { BackBtn, Container, ProgressBar } from '../../../components';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type InvestmentT = {
  value: number;
  label: string;
};

const investmentTypes: InvestmentT[] = [
  { value: 0, label: 'Publicly traded stocks' },
  { value: 1, label: 'Bonds' },
  { value: 2, label: 'Real estate (for investment purposes)' },
  { value: 3, label: 'Private companies/startups' },
  { value: 4, label: 'Hedge funds' },
  { value: 5, label: 'Private equity funds' },
  { value: 6, label: 'Other alternative assets' },
];

export const InvestmentTypes = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step7;

    const handleSubmit = useCallback(
      (value) => {
        const selectedVal = formStep ? formStep : [];
        const filterVal = selectedVal.filter((item: Number) => item !== value);
        const checkVal = selectedVal.includes(value);

        form.dispatch({
          type: 'update-form',
          payload: { step7: checkVal ? filterVal : [...selectedVal, value] },
        });
      },
      [form, formStep],
    );

    return (
      <Container
        d="flex"
        flexDir="column"
        justifyContent="space-between"
        ref={ref}
        layerStyle="noSelect"
      >
        <Box>
          <BackBtn handleClick={prevStep} />
          <ProgressBar total={7} value={3} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            Have you invested in any of the following types of investments in the past?
          </Heading>
          <Text fontSize="md">Select all that apply</Text>
          <Box my={8}>
            {investmentTypes.map(({ value, label }) => (
              <Flex
                alignItems="center"
                px={6}
                py={3}
                mt={2}
                layerStyle={formStep?.includes(value) ? 'selectionBox.selected' : 'selectionBox'}
                borderRadius="full"
                textAlign="left"
                cursor="pointer"
                key={value}
                textStyle="Body1"
                onClick={() => handleSubmit(value)}
              >
                <Icon
                  as={formStep?.includes(value) ? FaCheckCircle : FiCircle}
                  layerStyle="iconColor"
                  bg="transparent !important"
                  h={5}
                  w={5}
                  mr={2}
                />
                {label}
              </Flex>
            ))}
          </Box>
        </Box>
        <Button h={12} cursor="pointer" disabled={!formStep?.length} onClick={nextStep}>
          Continue
        </Button>
      </Container>
    );
  },
);

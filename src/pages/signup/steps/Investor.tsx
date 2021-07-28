import React, { Dispatch, forwardRef, useCallback, useContext, useState } from 'react';
import { Box, Button, Heading, Text, Flex, Icon, Input, Center, Divider } from '@chakra-ui/react';
import { AiOutlineWarning } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { BackBtn, Container, FlexContainer } from '../../../components';
import type { DivRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

type accreditedInvestorType = {
  value: number;
  label: string;
  desc?: string;
};

const accreditedInvestor: accreditedInvestorType[] = [
  {
    value: 0,
    label: 'Yes, I have had $200k in income (or $300k jointly with my spouse)',
    desc: 'For the past two years and expect the same this year',
  },
  { value: 1, label: 'Yes, I hold a Series 7, Series 65 or Series 82 license' },
  { value: 2, label: 'Yes, I have over $1M in net assets, excluding my primary residence' },
  { value: 3, label: 'No, none of the above are true' },
];

export const Investor = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const [available, setAvailable] = useState('Available');
  const formStep = form?.formState?.step3;

  const handleSubmit = useCallback(
    (value) => {
      const selectedVal = formStep ? formStep : [];
      const filterVal = selectedVal.filter((item: Number) => item !== value);
      const checkVal = selectedVal.includes(value);

      form.dispatch({
        type: 'update-form',
        payload: { step3: checkVal ? filterVal : [...selectedVal, value] },
      });
    },
    [form, nextStep],
  );

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
              You are an accredited investor if any of the first three statements below are true.
              Select all that apply.
            </Text>
            <Box mt={8}>
              {accreditedInvestor.map(({ value, label, desc }, ind) => (
                <>
                  {ind === 0 ? '' : <Divider />}
                  <Flex
                    px={2}
                    py={3}
                    mt={2}
                    key={value}
                    textAlign="left"
                    cursor="pointer"
                    textStyle="Body1"
                    fontWeight="600"
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
                    <Box>
                      {label}
                      {desc ? (
                        <Text textStyle="Subhead" mt={2}>
                          {desc}
                        </Text>
                      ) : (
                        ''
                      )}
                    </Box>
                  </Flex>
                </>
              ))}
            </Box>
            <Button
              pos="absolute"
              bottom={10}
              left={6}
              w="calc(100% - 3rem)"
              h={12}
              cursor="pointer"
              disabled={!formStep?.length}
              onClick={formStep?.includes(3) ? () => setAvailable('Not Available') : nextStep}
            >
              Continue
            </Button>
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
    <BackBtn handleClick={goBack} top={6} left={6} pos="absolute" />
    <Center h={16} w={16} borderRadius="50%" layerStyle="card">
      <Icon as={AiOutlineWarning} color="green.500" h={6} w={6} />
    </Center>
    <Heading size="md" as="h4" textAlign="center">
      Coral is currently available to accredited investors only
    </Heading>
    <Text my={4} fontSize="md" textAlign="center">
      But we're working on that! Please input your email address below if you'd like to be added to
      the waitlist.
    </Text>
    <Input h={12} mt={2} placeholder="Email" name="email" type="email" variant="filled" />
    <Button pos="absolute" bottom={10} left={6} w="calc(100% - 3rem)" h={12}>
      Join the waitlist
    </Button>
  </FlexContainer>
);

import React, { Dispatch, forwardRef, Fragment, useCallback, useContext, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiAlertTriangle, FiCircle } from 'react-icons/fi';
import { Box, Center, Divider, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { BackBtn, Container, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

type AccreditedInvestorT = {
  value: number;
  label: string;
  desc?: string;
};

const accreditedInvestor: AccreditedInvestorT[] = [
  {
    value: 0,
    label: 'Yes, I have had $200k in income (or $300k jointly with my spouse)',
    desc: 'For the past two years and expect the same this year',
  },
  { value: 1, label: 'Yes, I hold a Series 7, Series 65 or Series 82 license' },
  { value: 2, label: 'Yes, I have over $1M in net assets, excluding my primary residence' },
  { value: 3, label: 'No, none of the above are true' },
];

export const Investor = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
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
      [form, formStep],
    );

    return (
      <div>
        {available === 'Available' ? (
          <Box ref={ref} layerStyle="noSelect">
            <Container d="flex" flexDir="column" justifyContent="space-between">
              <SlideContainer>
                <Box w="100%">
                  <BackBtn handleClick={prevStep} />
                  <Title1 mt={8} mb={2} textAlign="left">
                    Are you an accredited investor?
                  </Title1>
                  <Text fontSize="md" textAlign="left">
                    You are an accredited investor if any of the first three statements below are
                    true. Select all that apply.
                  </Text>
                  <Box my={8}>
                    {accreditedInvestor.map(({ value, label, desc }, ind) => (
                      <Fragment key={value}>
                        {ind === 0 && <Divider />}
                        <Flex
                          px={2}
                          py={3}
                          mt={2}
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
                      </Fragment>
                    ))}
                  </Box>
                </Box>
                <SubmitBtn
                  disabled={!formStep?.length}
                  onClick={formStep?.includes(3) ? () => setAvailable('Not Available') : nextStep}
                  label="Continue"
                />
              </SlideContainer>
            </Container>
          </Box>
        ) : (
          <NotAvailable goBack={() => setAvailable('Available')} />
        )}
      </div>
    );
  },
);

const NotAvailable = ({ goBack }: { goBack: Dispatch<any> }) => (
  <FlexContainer layerStyle="noSelect">
    <SlideContainer>
      <Box w="100%">
        <BackBtn handleClick={goBack} />
      </Box>
      <Box my={6}>
        <Center mx="auto" h={16} w={16} borderRadius="50%" layerStyle="card">
          <Icon as={FiAlertTriangle} color="green.500" h={6} w={6} />
        </Center>
        <Title1 textAlign="center">
          Coral is currently available to accredited investors only
        </Title1>
        <Text my={4} fontSize="md" textAlign="center">
          But we&#39;re working on that! Please input your email address below if you&#39;d like to
          be added to the waitlist.
        </Text>
        <Input h={12} mt={2} placeholder="Email" name="email" type="email" variant="filled" />
      </Box>
      <SubmitBtn label="Join the waitlist" />
    </SlideContainer>
  </FlexContainer>
);

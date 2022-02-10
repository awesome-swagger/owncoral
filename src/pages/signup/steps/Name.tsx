import React, { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, FormLabel, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import { fbqWrap } from '../../../lib/fbqWrap';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

export const Name:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const { signupInfo, dispatch } = useContext(SignupContext);

  const legalFirst = watch('legalFirst');
  const legalLast = watch('legalLast');

  const onSubmit = useCallback(
    (data) => {
      dispatch?.(data);
      nextStep();
    },
    [dispatch, nextStep],
  );

  // Run only once initially to populate form from state, if e.g. we go back from
  // future step
  useEffect(() => {
    setValue('legalFirst', signupInfo?.legalFirst);
    setValue('legalLast', signupInfo?.legalLast);

    fbqWrap('trackCustom', 'SignupStart');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container d="flex" flexDir="column" justifyContent="space-between" layerStyle="noSelect" isFooter={false}>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title2 mt={8} mb={2} textAlign="left">
              Tell us about yourself
            </Title2>
            <Text textStyle="Body1" textAlign="left">
              Please enter your full legal name. Your legal name should match any form of government
              ID.
            </Text>
            <FormLabel mt={8}>
              <Text layerStyle="labelColor" fontSize="md">
                FIRST NAME
              </Text>
              <Input
                placeholder="First Name"
                {...register('legalFirst')}
                h={12}
                mt={1}
                variant="filled"
              />
            </FormLabel>
            <FormLabel mt={8}>
              <Text layerStyle="labelColor" fontSize="md">
                LAST NAME
              </Text>
              <Input
                placeholder="Last Name"
                {...register('legalLast')}
                h={12}
                mt={1}
                variant="filled"
              />
            </FormLabel>
          </Box>
          <SubmitBtn label="Continue" disabled={!legalFirst || !legalLast} />
        </SlideContainer>
      </Container>
    </form>
  );
}

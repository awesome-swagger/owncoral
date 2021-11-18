import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, FormLabel, Input, Text, useColorModeValue } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
import theme from '../../../theme';

import { BackBtn, Container, ProgressBar, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { FormRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

export const Work = forwardRef<FormRef, StepPropsT>(({ nextStep, prevStep }: StepPropsT, ref) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const form = useContext(StepFormContext);
  const formStep = form.formState?.step9;

  const currentRole = watch('currentRole');
  const currentEmployer = watch('currentEmployer');
  const linkedInProfile = watch('linkedInProfile');

  const placeholderColor = useColorModeValue('dark.50', transparentize('#000000', 0.24)(theme));

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step9: data } });
      nextStep();
    },
    [form, nextStep],
  );

  const handleChange = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step9: data } });
    },
    [form],
  );

  useEffect(() => {
    setValue('currentRole', formStep?.currentRole);
    setValue('currentEmployer', formStep?.currentEmployer);
    setValue('linkedInProfile', formStep?.linkedInProfile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (linkedInProfile?.includes('linkedin.com/in/')) {
      let startIndex = linkedInProfile.indexOf('linkedin.com/in/') + 16;
      let endIndex = linkedInProfile.length;
      let linkedInUserName = linkedInProfile.slice(startIndex, endIndex).replaceAll('/', '');
      setValue('linkedInProfile', linkedInUserName);
    }
  }, [linkedInProfile]);

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container d="flex" flexDir="column" justifyContent="space-between" layerStyle="noSelect">
        <SlideContainer>
          <Box w="100%" mb={8}>
            <BackBtn handleClick={prevStep} />
            <ProgressBar total={7} value={6} />
            <Title1 mt={8} mb={2} textAlign="left">
              What do you do for work?
            </Title1>

            <FormLabel mt={8}>
              <Text layerStyle="labelColor">CURRENT ROLE OR TITLE</Text>
              <Input
                placeholder="Your current Role or Title"
                name="currentRole"
                ref={register}
                h={12}
                mt={1}
                variant="filled"
                onChange={handleSubmit(handleChange)}
                disabled={linkedInProfile}
              />
            </FormLabel>
            <FormLabel mt={8}>
              <Text layerStyle="labelColor">CURRENT EMPLOYER</Text>
              <Input
                placeholder="Your current employer"
                name="currentEmployer"
                ref={register}
                h={12}
                mt={1}
                variant="filled"
                onChange={handleSubmit(handleChange)}
                disabled={linkedInProfile}
              />
            </FormLabel>
            <Text textAlign="center" layerStyle="labelColor" my={8}>
              Or share
            </Text>
            <FormLabel mt={8}>
              <Text layerStyle="labelColor">YOUR LINKEDIN PROFILE</Text>
              <Box pos="relative">
                <Input
                  // placeholder="linkedIn.com/in/yourprofilename"
                  name="linkedInProfile"
                  ref={register}
                  h={12}
                  mt={1}
                  pl="8.3rem"
                  variant="filled"
                  onChange={handleSubmit(handleChange)}
                  disabled={currentRole || currentEmployer}
                />
                <Text fontWeight={400} top={0} left={4} lineHeight="3.5rem" pos="absolute">
                  linkedIn.com/in/
                </Text>
                {!linkedInProfile && (
                  <Text
                    color={placeholderColor}
                    fontWeight={400}
                    top={0}
                    right={4}
                    lineHeight="3.5rem"
                    pos="absolute"
                  >
                    yourprofilename
                  </Text>
                )}
              </Box>
            </FormLabel>
          </Box>
          <SubmitBtn
            label="Continue"
            disabled={(!currentRole || !currentEmployer) && !linkedInProfile}
          />
        </SlideContainer>
      </Container>
    </form>
  );
});

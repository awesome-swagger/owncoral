import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, FormLabel, Input, Text, useColorModeValue } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
import { BackBtn, Container, ProgressBar, SlideContainer, SubmitBtn } from '../../../components';
import { Overline, Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import theme from '../../../theme';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

type WorkFormUpdateT = { jobTitle: string; employerName: string; linkedinProfile: string };

export const Work: React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const { signupInfo, dispatch } = useContext(SignupContext);

  const jobTitle = watch('jobTitle');
  const employerName = watch('employerName');
  const linkedinProfile = watch('linkedinProfile');

  const placeholderColor = useColorModeValue('dark.50', transparentize('white', 0.24)(theme));

  const onSubmit = () => {

  };

  // Run only once, to populate form from context
  useEffect(() => {
    setValue('jobTitle', signupInfo?.jobTitle);
    setValue('employerName', signupInfo?.employerName);
    setValue('linkedinProfile', signupInfo?.linkedinProfile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (linkedinProfile?.includes('linkedin.com/in/')) {
      let startIndex = linkedinProfile.indexOf('linkedin.com/in/') + 16;
      let endIndex = linkedinProfile.length;
      let linkedInUserName = linkedinProfile.slice(startIndex, endIndex).replaceAll('/', '');
      setValue('linkedinProfile', linkedInUserName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkedinProfile]);

  return (
    <form onSubmit={onSubmit}>
      <Container d="flex" flexDir="column" justifyContent="space-between" layerStyle="noSelect" isFooter={false}>
        <SlideContainer>
          <Box w="100%" mb={8}>
            <BackBtn handleClick={prevStep} />
            <ProgressBar total={7} value={6} />
            <Title2 mt={8} mb={6} textAlign="left">
              What do you do for work?
            </Title2>

            <FormLabel mt={8}>
              <Overline mb={1}>CURRENT ROLE OR TITLE</Overline>
              <Input
                placeholder="Your current role or title"
                {...register('jobTitle')}
                h={12}
                mt={1}
                variant="filled"
              />
            </FormLabel>
            <FormLabel mt={8}>
              <Overline mb={1}>CURRENT EMPLOYER</Overline>
              <Input
                placeholder="Your current employer"
                {...register('employerName')}
                h={12}
                mt={1}
                variant="filled"
              />
            </FormLabel>
            <Text textAlign="center" layerStyle="labelColor" my={8}>
              Or share
            </Text>
            <FormLabel mt={8}>
              <Overline mb={1}>YOUR LINKEDIN PROFILE</Overline>
              <Box pos="relative">
                <Input
                  {...register('linkedinProfile')}
                  h={12}
                  mt={1}
                  variant="filled"
                  pl="8.3rem"
                />
                <Text fontWeight={400} top={0} left={4} lineHeight="3.5rem" pos="absolute">
                  linkedIn.com/in/
                </Text>
                {!linkedinProfile && (
                  <Text
                    color={placeholderColor}
                    fontWeight={400}
                    top={0}
                    right={4}
                    lineHeight="3.5rem"
                    pos="absolute"
                    userSelect="none"
                  >
                    yourprofilename
                  </Text>
                )
                }
              </Box >
            </FormLabel >
          </Box >
          <SubmitBtn
            label="Continue"
            disabled={!linkedinProfile && (!jobTitle || !employerName)}
          />
        </SlideContainer >
      </Container >
    </form >
  );
}

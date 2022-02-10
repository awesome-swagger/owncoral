import React, { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Box, Center, Icon, Text, useToast } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

import { BackBtn, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';
import { fbqWrap } from '../../../lib/fbqWrap';
import theme from '../../../theme';
import { UserContext } from '../../../userContext';
import type { StepPropsT } from '../index';
import { scoreSignup } from '../lib';
import { SignupContext } from '../signupContext';

export const Result:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);
  const [user, setUser] = useContext(UserContext);
  const signupScore = scoreSignup(signupInfo);
  const toast = useToast();

  const handleSubmit = async () => {
    const signupUpdate = { isSignupComplete: true, signupScore };
    const resp = await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify({ ...signupInfo, ...signupUpdate }),
    });
    fbqWrap('track', 'CompleteRegistration', { status: signupScore || 0 >= 10 });

    if (resp === null) {
      return;
    }

    if (resp.ok) {
      dispatch?.(signupUpdate);
      if (user !== null) {
        setUser({ ...user, ...signupUpdate });
      }

      nextStep();
      return;
    }

    switch (resp.status) {
      default:
        toast({
          ...DEFAULT_ERROR_TOAST,
          description: 'Unable to complete signup, please try again.',
        });
        break;
    }
  };

  return (
    <FlexContainer layerStyle="noSelect" isFooter={false}>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
        </Box>
        <Box my={6} w="100%">
          <Center mx="auto" h={16} w={16} borderRadius="3xl" bgColor={transparentize('green.200', 0.2)(theme)}>
            <Icon as={FiCheck} color="green.500" h={6} w={6} />
          </Center>
          <Title2 my={4} textAlign="center">
            Great, you&apos;ve answered everything!
          </Title2>
          <Text textStyle="Body2" colorScheme="gray" variant="colored" textAlign="center">
            If you need to edit any responses, tap the back button. Otherwise, click the button below to
            continue.
          </Text>
        </Box>
        <SubmitBtn label="Submit" onClick={handleSubmit} />
      </SlideContainer>
    </FlexContainer>
  );
};

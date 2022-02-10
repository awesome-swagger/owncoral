import React, { useContext } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

import Logo from '../../../assets/coral_logo_with_shadow.png';
import { BackBtn, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

export const WelcomeCoral:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo } = useContext(SignupContext);

  function capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  const fullName = [signupInfo?.legalFirst, signupInfo?.legalLast]
    .map((ns) => capitalizeFirstLetter(ns || ''))
    .join(' ');

  return (
    <FlexContainer layerStyle="noSelect" isFooter={false}>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
        </Box>
        <Box w="100%">
          <Image src={Logo} alt="logo" h="200px" />
          <Title1 mb={4} textAlign="center">
            Welcome to Coral <br />
            {fullName}!
          </Title1>
          <Text textStyle="Body1" textAlign="center" mt={2}>
            We just need to ask you a few more questions. There are no ‘right’ or ‘wrong’ answers.
          </Text>
          <Text textStyle="Body1" textAlign="center" mt={4}>
            We also sent a verification link to your inbox.
          </Text>
        </Box>
        <SubmitBtn onClick={() => nextStep()} label="Continue" />
      </SlideContainer>
    </FlexContainer>
  );
}

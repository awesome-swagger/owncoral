import { useContext } from 'react';
import { Image, Text, Box } from '@chakra-ui/react';
import { BackBtn, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import { StepFormContext } from '../index';
import type { StepPropsT } from '../index';
import Logo from '../../../assets/coral_logo_with_shadow.png';

export const WelcomeCoral = ({ nextStep, prevStep }: StepPropsT) => {
  const { formState } = useContext(StepFormContext);

  function capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  const firstName = capitalizeFirstLetter(formState?.step1?.firstName);
  const lastName = capitalizeFirstLetter(formState?.step1?.lastName);

  const fullName = `${firstName}  ${lastName}`;

  return (
    <FlexContainer layerStyle="noSelect">
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
        </Box>
        <Box w="100%">
          <Image mx="auto" src={Logo} alt="logo" h="200px" />
          <Title1 textAlign="center">Welcome to Coral, {fullName}!</Title1>
          <Text fontSize="md" textAlign="center">
            On the following screens, we are going to ask you a few questions to get you better.
            There are no good/bad answers.
          </Text>
        </Box>
        <SubmitBtn onClick={nextStep} label="Continue" />
      </SlideContainer>
    </FlexContainer>
  );
};

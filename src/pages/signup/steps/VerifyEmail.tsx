import { forwardRef } from 'react';
import { FiMail } from 'react-icons/fi';
import { Button, Center, Icon, Text, Box } from '@chakra-ui/react';
import { BackBtn, FlexContainer, SlideContainer } from '../../../components';
import { Title1 } from '../../../components/text';
import type { DivRef, StepPropsT } from '../index';

export const VerifyEmail = forwardRef<DivRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => (
    <FlexContainer ref={ref} layerStyle="noSelect">
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
        </Box>
        <Box w="100%">
          <Center mx="auto" h={16} w={16} borderRadius="50%" layerStyle="card">
            <Icon as={FiMail} color="primary.500" h={6} w={6} />
          </Center>
          <Title1 as="h4" mt={8} textAlign="center">
            Please verify your email address
          </Title1>
          <Text fontSize="md" textAlign="center">
            An email has been sent to <b>johndoe@gmail.com</b>. Please follow the instructions in
            the verification email to finish creating your Coral account.
          </Text>
        </Box>
        <Box
          bottom={6}
          pos={{ base: 'fixed', md: 'initial' }}
          w={{ base: 'calc(100% - 3rem)', md: '100%' }}
        >
          <Text fontSize="sm" textAlign="center">
            Didn’t receive an email?
          </Text>
          <Button w="100%" variant="outline" onClick={nextStep}>
            Resend verification email
          </Button>
        </Box>
      </SlideContainer>
    </FlexContainer>
  ),
);

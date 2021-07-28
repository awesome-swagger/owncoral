import { forwardRef } from 'react';
import { Center, Icon, Button, Heading, Text } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import { BackBtn, FlexContainer } from '../../../components';
import type { DivRef } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const VerifyEmail = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => (
    <FlexContainer ref={ref} layerStyle="noSelect">
      <BackBtn handleClick={prevStep} top={6} left={6} pos="absolute" />
      <Center h={16} w={16} borderRadius="50%" layerStyle="card">
        <Icon as={FiMail} color="primary.500" h={6} w={6} />
      </Center>
      <Heading size="md" as="h4" mt={8} textAlign="center">
        Please verify your email address
      </Heading>
      <Text fontSize="md" textAlign="center">
        An email has been sent to <b>johndoe@gmail.com</b>. Please follow the instructions in the
        verification email to finish creating your Coral account.
      </Text>
      <Text
        pos="absolute"
        bottom={24}
        left={6}
        w="calc(100% - 3rem)"
        fontSize="sm"
        textAlign="center"
      >
        Didn’t receive an email?
      </Text>
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        variant="outline"
        onClick={nextStep}
      >
        Resend verification email
      </Button>
    </FlexContainer>
  ),
);

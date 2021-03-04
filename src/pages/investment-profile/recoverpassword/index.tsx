import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, InputGroup, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../components';

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [recover, setRecover] = useState<string>('Recover');

  return (
    <div>
      {recover === 'Recover' ? (
        <Box p={6} m="0" w="100%" h="100vh" pos="relative">
          <BackBtn handleClick={() => console.log('Clicked!')} />
          <Heading size="md" mt={8} mb={2} textAlign="left">
            Recover your password
          </Heading>
          <Text fontSize="md" textAlign="left" m="0 " color="#4E504F">
            Enter the email address associated with your account and we will send you an email with
            instructions to recover your password
          </Text>
          <Text color="#4E504F" fontSize="md" textAlign="left" m="2rem 0 0.5rem 0" w="100%">
            Email
          </Text>
          <InputGroup mt="0.5rem">
            <Input
              type="email"
              placeholder="Email address"
              bg="#F3F3F3"
              h={12}
              value={email}
              onChange={(x: any) => setEmail(x.target.value)}
            />
          </InputGroup>
          <Button
            disabled={!email}
            pos="absolute"
            bottom={10}
            left={6}
            w="calc(100% - 3rem)"
            h={12}
            bg="#4E504F"
            color="#fff"
            onClick={() => setRecover('CheckEmail')}
          >
            Send Instructions
          </Button>
        </Box>
      ) : recover === 'CheckEmail' ? (
        <CheckEmail onRecover={setRecover} />
      ) : (
        <NewPassword />
      )}
    </div>
  );
};

type CheckEmailProps = {
  onRecover: React.Dispatch<React.SetStateAction<string>>;
};

export const CheckEmail: React.FC<CheckEmailProps> = ({ onRecover }: CheckEmailProps) => {
  return (
    <Flex p={6} m="0" w="100%" h="100vh" align="center" justify="center" direction="column">
      <BackBtn handleClick={() => console.log('Clicked!')} />
      <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
      <Heading size="md" mt={8}>
        Check your email
      </Heading>
      <Text fontSize="md" m="0">
        We have sent a password recover instructions
      </Text>
      <Text color="#4E504F" pos="absolute" bottom={24} fontSize="sm" m="0" textAlign="center">
        Didn’t receive an email? <br />
        Check your spam folder or try with another email
      </Text>
      <Button
        pos="absolute"
        bottom={9}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        onClick={() => onRecover('NewPassword')}
      >
        Open email app
      </Button>
    </Flex>
  );
};
export const NewPassword: React.FC = () => {
  return (
    <Box p={6} m="0" w="100%" h="100vh" pos="relative">
      <BackBtn handleClick={() => console.log('Clicked!')} />

      <Heading size="md" mt={8} mb={2} textAlign="left">
        Create a new password
      </Heading>
      <Text fontSize="md" textAlign="left" m="0" color="#4E504F">
        Lorem ipsum dolor sir amet
      </Text>
      <Text color="#4E504F" fontSize="md" textAlign="left" m="2rem 0 0.5rem 0 " w="100%">
        Password
      </Text>
      <Input type="password" placeholder="Password" bg="#F3F3F3" h={12} />
      <Text m="0.5rem 0 0 0 " fontSize="xs" w="100%" color="#4E504F" textAlign="left">
        Must be at least 8 characters
      </Text>
      <Text m=" 0" bottom={24} pos="absolute" fontSize="xs" textAlign="center">
        By tapping “Continue” in the button below, you agree with the terms and conditions and
        privacy policy provided by Coral
      </Text>
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        bg="#4E504F"
        color="#fff"
      >
        Reset and Log in
      </Button>
    </Box>
  );
};
// eslint-disable-next-line import/no-default-export
export default RecoverPassword;

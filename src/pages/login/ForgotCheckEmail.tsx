import type React from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const ForgotCheckEmail: React.FC = () => (
  <Flex p={6} w="100%" h="100vh" align="center" justify="center" direction="column">
    <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
    <Heading mt={8}>Check your email</Heading>
    <Text>We sent password reset instructions to your email inbox</Text>
    <Box h={16} />
    <Text pos="absolute" bottom={28} fontSize="sm" m="0" textAlign="center">
      Didn&apos;t receive an email?
      <br />
      Please check your spam folder, or try with another email address
    </Text>
    <Button
      as={BrowserLink}
      to="/login"
      pos="absolute"
      bottom={10}
      left={6}
      w="calc(100% - 3rem)"
      h={12}
    >
      Back to Coral
    </Button>
  </Flex>
);

// eslint-disable-next-line import/no-default-export
export default ForgotCheckEmail;

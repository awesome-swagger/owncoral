import type React from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

import { Container, SlideContainer } from '../../components';
import { Title1 } from '../../components/text';

const ForgotCheckEmail: React.FC = () => (
  <Container>
    <SlideContainer>
      <Box />
      <Box w="100%" textAlign="center">
        <Box mx="auto" h={40} w={40} borderRadius="50%" bg="gray.200" />
        <Title1 mt={8}>Check your email</Title1>
        <Text>We sent password reset instructions to your email inbox</Text>
      </Box>
      <Box
        bottom={6}
        pos={{ base: 'fixed', md: 'initial' }}
        w={{ base: 'calc(100% - 3rem)', md: '100%' }}
      >
        <Text fontSize="sm" m="0" textAlign="center">
          Didn&apos;t receive an email?
          <br />
          Please check your spam folder, or try with another email address
        </Text>
        <Button as={BrowserLink} to="/login" w="100%">
          Back to Coral
        </Button>
      </Box>
    </SlideContainer>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default ForgotCheckEmail;

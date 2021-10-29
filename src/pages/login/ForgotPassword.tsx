import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  useToast,
  Box,
} from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, SlideContainer } from '../../components';
import { Title1 } from '../../components/text';

import { fetchWrap } from '../../lib/api';

const ForgotPassword: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  type FormContents = { email: string };
  const onSubmit = async ({ email }: FormContents) => {
    setIsLoading(true);
    const resp = await fetchWrap('/api/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    setIsLoading(false);

    if (resp === null) return;

    // 429 on too many reset requests — we report success anyway
    if (resp.ok || resp.status === 429) {
      history.push('/forgot-check-email');
      return;
    }

    switch (resp.status) {
      default:
        toast({
          title: 'An error occurred.',
          description: 'Unable to send password reset email',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn
              handleClick={() => {
                history.push('/login');
              }}
            />
            <Title1 mt={8} mb={2} colorScheme="secondary" variant="colored">
              Forgot your password?
            </Title1>
            <Text>
              Enter the email address associated with your account. We will send you an email with
              instructions to set a new password.
            </Text>

            <Text m="2rem 0 0.5rem 0" w="100%">
              Email
            </Text>
            <FormControl isInvalid={errors?.email}>
              <InputGroup mt={2}>
                <InputLeftElement h="100%" pointerEvents="none">
                  <Icon as={FiMail} />
                </InputLeftElement>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  pl={8}
                  placeholder="Email"
                  defaultValue=""
                  ref={register({
                    required: true,
                  })}
                />
              </InputGroup>
            </FormControl>
          </Box>
          <SubmitBtn
            disabled={errors.email?.message}
            isLoading={isLoading}
            spinner={<Spinner />}
            colorScheme="white"
            label="Send Instructions"
          />
        </SlideContainer>
      </Container>
    </form>
  );
};

export default ForgotPassword;

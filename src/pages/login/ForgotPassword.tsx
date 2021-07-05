import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';

import { BackBtn, Container } from '../../components';
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BackBtn
          handleClick={() => {
            history.push('/login');
          }}
        />
        <Heading mt={8} mb={2} colorScheme="secondary" variant="colored">
          Forgot your password?
        </Heading>
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
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          isDisabled={errors.email?.message}
          isLoading={isLoading}
          spinner={<Spinner />}
          type="submit"
          colorScheme="stripe"
        >
          Send Instructions
        </Button>
      </form>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForgotPassword;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Box,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../components';
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
  const onSubmit = () => {
    
  };

  return (
    <form onSubmit={onSubmit}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={() => history.push('/login')}
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
                  {...register('email', {
                    required: true,
                  })}
                  type="email"
                  pl={8}
                  placeholder="Email"
                  defaultValue=""
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

// eslint-disable-next-line import/no-default-export
export default ForgotPassword;

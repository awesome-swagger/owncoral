import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { Link as BrowserLink, useHistory, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';

import { BackBtn } from '../../components';
import { fetchWrap } from '../../lib/api';

// We check the password reset token and show 404 if not valid
type TokenStateT = 'loading' | 'invalid' | 'valid';

type NewPasswordPropsT = {
  isWelcome?: boolean;
};
const NewPassword: React.FC<NewPasswordPropsT> = ({ isWelcome = false }) => {
  const { handleSubmit, register, errors } = useForm();
  const { resetToken } = useParams<{ resetToken: string }>();
  const [showPassword, setShowPassword] = useState(false);

  const [tokenState, setTokenState] = useState<TokenStateT>('loading');
  const toast = useToast();
  const history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };

  type FormDataT = {
    password: string;
  };
  const onSubmit = async ({ password }: FormDataT) => {
    const resp = await fetchWrap('/api/set-new-password', {
      method: 'POST',
      body: JSON.stringify({
        resetToken,
        password,
      }),
    });

    if (resp === null) {
      return;
    }

    if (resp.ok) {
      history.push('/');
      return;
    }

    switch (resp.status) {
      default:
        toast({
          title: 'An error occurred.',
          description: 'Unable to set new password',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        break;
    }
  };

  useEffect(() => {
    (async () => {
      const resp = await fetchWrap('/api/check-reset-password-token', {
        method: 'POST',
        body: JSON.stringify({ resetToken }),
      });

      if (resp === null) {
        return;
      }

      setTokenState(resp.ok ? 'valid' : 'invalid');
    })();
  }, [resetToken]);

  return (
    // TODO: use a Suspense when feature is stable
    <Fragment>
      {tokenState === 'loading' && (
        <Center h="100vh" w="100%">
          <Spinner />
        </Center>
      )}
      {tokenState === 'invalid' && <ExpiredLink />}
      {tokenState === 'valid' && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box p={6} w="100%" h="100vh" pos="relative">
            <BackBtn handleClick={handleClick} />
            {isWelcome ? (
              <Fragment>
                <Heading mt={8} mb={2} variant="colored" colorScheme="primary">
                  Welcome to Coral
                </Heading>
                <Text textStyle="subTitle1">
                  To sign in for the first time, create a new password now
                </Text>
              </Fragment>
            ) : (
              <Heading mt={8} mb={2}>
                Create a new password
              </Heading>
            )}

            <Text>Lorem ipsum dolor sir amet</Text>
            <Text m="2rem 0 0.5rem 0" w="100%">
              Password
            </Text>
            <FormControl isInvalid={errors?.password}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiLock} />
                </InputLeftElement>

                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  defaultValue=""
                  ref={register({
                    required: true,
                    minLength: {
                      message: 'Please enter at least 8 characters',
                      value: 8,
                    },
                  })}
                  pl={8}
                />

                <InputRightElement>
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    variant="unstyled"
                    aria-label={(showPassword ? 'Hide' : 'Show') + ' password'}
                    sx={{
                      '&:focus': { boxShadow: 'none' },
                    }}
                    icon={<Icon as={showPassword ? FiEyeOff : FiEye} />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Text
              fontSize="sm"
              color={errors.password ? 'red.500' : 'gray'}
              className={errors.password ? 'shake_animation' : ''}
              textAlign="left"
              m="0.5rem 0"
            >
              Must be at least 8 characters
            </Text>

            <Text m="0" bottom={24} pos="absolute" fontSize="xs" textAlign="center">
              By clicking the button below, you agree with the terms and conditions and privacy
              policy provided by Coral
            </Text>
            <Button
              isDisabled={errors?.password}
              type="submit"
              pos="absolute"
              bottom={10}
              left={6}
              w="calc(100% - 3rem)"
              h={12}
            >
              Set New Password and Log In
            </Button>
          </Box>
        </form>
      )}
    </Fragment>
  );
};

const ExpiredLink = () => {
  return (
    <Box p={6} w="100%" h="100vh" pos="relative">
      <Heading mt={8} mb={2}>
        Expired link
      </Heading>
      <Text>
        Your new password link has expired, or was already used. If you still need to set a new
        password, you can request a new email.
      </Text>
      <Button
        as={BrowserLink}
        to="/forgot"
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
      >
        Get new password reset email
      </Button>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewPassword;

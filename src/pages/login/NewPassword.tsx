import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiExternalLink, FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { Link as BrowserLink, useHistory, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormHelperText,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link as ChakraLink,
  Spinner,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';

import NoTextLogo from '../../assets/coral_logo-notext.svg';
import { BackBtn, Container } from '../../components';
import { Subhead, Title2 } from '../../components/text';
import { fetchWrap } from '../../lib/api';
import { Caption1 } from '../../theme/textStyles';

// We check the password reset token and show 404 if not valid
type TokenStateT = 'loading' | 'invalid' | 'valid';

type NewPasswordPropsT = {
  isWelcome?: boolean;
};
const NewPassword: React.FC<NewPasswordPropsT> = ({ isWelcome = false }) => {
  const { handleSubmit, register, errors } = useForm();
  const { resetToken } = useParams<{ resetToken: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(!isWelcome);

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

    if (resp === null) return;

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
    <Container showColorModeButton={false}>
      {tokenState === 'loading' && (
        <Center h={window.innerHeight} w="100%">
          <Spinner />
        </Center>
      )}
      {tokenState === 'valid' && <ExpiredLink />}
      {tokenState === 'invalid' && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isWelcome && <BackBtn handleClick={handleClick} />}
          {isWelcome ? (
            <VStack align="center" spacing={4}>
              <Icon as={NoTextLogo} w="50px" h="50px" />
              <Title2 mt={8}>Welcome to Coral</Title2>
              <Subhead>To sign in for the first time, please create a new password.</Subhead>
            </VStack>
          ) : (
            <Heading mt={8} mb={2}>
              Create a new password
            </Heading>
          )}

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

            <FormHelperText
              textStyle="Caption1"
              color={errors.password ? 'red.500' : 'gray'}
              className={errors.password ? 'shake_animation' : ''}
              textAlign="left"
              m="0.5rem 0"
            >
              Must be at least 8 characters
            </FormHelperText>
          </FormControl>

          {isWelcome && (
            <Center w="calc(100% - 3rem)" bottom="4.5rem" pos="absolute">
              <Checkbox
                size="lg"
                sx={{ '.chakra-checkbox__label': Caption1 }}
                isChecked={agreementChecked}
                onChange={(e) => setAgreementChecked(!agreementChecked)}
              >
                I certify that I am 18 years of age or older, and I agree to the{' '}
                <ChakraLink href="https://www.owncoral.com/user-agreement" isExternal>
                  User Agreement{' '}
                  <Icon as={FiExternalLink} w={2.5} h={2.5} verticalAlign="baseline" />
                </ChakraLink>
                {' and '}
                <ChakraLink href="https://www.owncoral.com/privacy" isExternal>
                  Privacy Policy{' '}
                  <Icon as={FiExternalLink} w={2.5} h={2.5} verticalAlign="baseline" />
                </ChakraLink>
              </Checkbox>
            </Center>
          )}

          <Button
            isDisabled={!agreementChecked}
            type="submit"
            pos="absolute"
            bottom={4}
            left={6}
            w="calc(100% - 3rem)"
            h={12}
            colorScheme="white"
          >
            Set New Password and Log In
          </Button>
        </form>
      )}
    </Container>
  );
};

const ExpiredLink = () => {
  return (
    <Box>
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
        bottom={12}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        colorScheme="auto"
      >
        Get new password reset email
      </Button>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewPassword;

import React, { useEffect, useState } from 'react';
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
import { Subhead, Title1, Title2 } from '../../components/text';
import { fetchWrap } from '../../lib/api';
import { Caption1 } from '../../theme/textStyles';

// We check the password reset token and show 404 if not valid
type TokenStateT = 'loading' | 'invalid' | 'valid';

type NewPasswordPropsT = {
  isWelcome?: boolean;
};
const NewPassword: React.FC<NewPasswordPropsT> = ({ isWelcome = false }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
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

  const onSubmit = () => {
    
  };

  return (
    // TODO: use a Suspense when feature is stable
    <Container showColorModeButton={false}>
      {tokenState === 'loading' && (
        <Center w="100%" h={window.innerHeight}>
          <Spinner />
        </Center>
      )}
      {tokenState === 'invalid' && <ExpiredLink />}
      {tokenState === 'valid' && (
        <form onSubmit={onSubmit}>
          {!isWelcome && <BackBtn handleClick={handleClick} />}
          {isWelcome ? (
            <VStack align="center" spacing={4}>
              <Icon as={NoTextLogo} w="50px" h="50px" />
              <Title2 mt={8}>Welcome to Coral</Title2>
              <Subhead>To sign in for the first time, please create a new password.</Subhead>
            </VStack>
          ) : (
            <Title1 mt={8} mb={2}>
              Create a new password
            </Title1>
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
                {...register('password', {
                  required: true,
                  minLength: {
                    message: 'Please enter at least 8 characters',
                    value: 8,
                  },
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                defaultValue=""
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
                onChange={() => setAgreementChecked(!agreementChecked)}
              >
                By checking this box, you certify that you are 18 years of age or older and agree to
                our{' '}
                <ChakraLink href="https://www.owncoral.com/user-agreement" isExternal>
                  User Agreement
                  <Icon as={FiExternalLink} w={3} h={3} verticalAlign="baseline" />
                </ChakraLink>
                {' and '}
                <ChakraLink href="https://www.owncoral.com/privacy" isExternal>
                  Privacy Policy
                  <Icon as={FiExternalLink} w={3} h={3} verticalAlign="baseline" />
                </ChakraLink>
                , as well as our partner Dwolla’s{' '}
                <ChakraLink
                  href="https://www.dwolla.com/legal/dwolla-account-terms-of-service/#legal-content"
                  isExternal
                >
                  User Agreement
                  <Icon as={FiExternalLink} w={2.5} h={2.5} verticalAlign="baseline" />
                </ChakraLink>
                {' and '}
                <ChakraLink href="https://www.dwolla.com/legal/privacy/#legal-content" isExternal>
                  Privacy Policy
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
      <Title1 mt={8} mb={2}>
        Expired link
      </Title1>
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

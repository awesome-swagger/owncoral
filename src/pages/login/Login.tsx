import { Fragment, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import type { UserProfileT } from '../../shared-fullstack/types';
import { Capacitor } from '@capacitor/core';
import type { UseToastOptions } from '@chakra-ui/react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link as ChakraLink,
  Spacer,
  Spinner,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import type { History } from 'history';

import Logo from '../../assets/coral-logo-wtext.svg';
import { ColorModeButton, DividerWithText } from '../../components';
import { fetchWrap } from '../../lib/api';
import { ListingsUrl, PortfolioUrl } from '../../lib/uriConstants';
import { useFlash } from '../../lib/useFlash';
import { UserContext } from '../../userContext';

// TODO: remove waitlist code
// const isProd = import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'production';
const showWaitlist = false;

function Login() {
  const logoFillColor = useColorModeValue('dark.500', 'gray.200');
  const loginColor = useColorModeValue('inherit', 'whiteAlpha.100');
  const flash = useFlash();

  useEffect(() => {
    flash({ title: 'Authentication error', isClosable: true, status: 'error' });
  }, [flash]);

  return (
    <Fragment>
      <Center>
        <Box
          boxShadow="xl"
          rounded="3xl"
          w="65%"
          minW="320px"
          maxW="370px"
          pos="fixed"
          left="50%"
          top="50%"
          m={[2, 3]}
          paddingX={[7, 10]}
          paddingY={[6, 8]}
          bg={loginColor}
          sx={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Center w="100%">
            <VStack w="100%">
              <Box h={2} />
              <Icon as={Logo} w="100%" h="50px" sx={{ fill: logoFillColor }} />
              <Box h={2} />
              <LoginForm />
            </VStack>
          </Center>
        </Box>
      </Center>
      <ColorModeButton pos="fixed" top={6} right={6} />
    </Fragment>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [_, setUser] = useContext(UserContext);
  const history = useHistory();
  const toast = useToast();
  const location = useLocation();
  const isCapacitor = Capacitor.getPlatform() !== 'web';
  const onSubmit = () => {
    
  };

  return (
    <form
      css={{ width: '100%' }}
      onSubmit={onSubmit}
    >
      <FormControl>
        <Center>
          <VStack spacing={2} p={[1, 2]} sx={{ flexGrow: 1 }}>
            {!isCapacitor && (
              <Fragment>
                <Button
                  as="a"
                  href="/api/oidc/login?service=google"
                  variant="outline"
                  w="100%"
                  colorScheme="gray"
                  isLoading={isLoading}
                  type="button"
                  size="lg"
                  spinner={<Spinner />}
                  leftIcon={<FaGoogle />}
                >
                  <span>Log In with Google</span>
                </Button>
                <DividerWithText mt="6" mx={2}>
                  or
                </DividerWithText>
              </Fragment>
            )}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} />
              </InputLeftElement>
              <Input
                {...register('email', {
                  required: true,
                })}
                id="email"
                type="email"
                pl={8}
                placeholder="Email" />
            </InputGroup>
            <Spacer />
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
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                pl={8} />

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
            <FormHelperText textStyle="Caption1">{errors.password?.message}&nbsp;</FormHelperText>
            <Box h={2} />
            <Button
              w="100%"
              colorScheme="gray"
              isLoading={isLoading}
              type="submit"
              size="lg"
              spinner={<Spinner />}
            >
              Log In with Password
            </Button>
            <Box h={2} />

            <Text textStyle="Caption1" textAlign="center">
              <ChakraLink as={RouterLink} to="/forgot">
                Forgot Password?
              </ChakraLink>
            </Text>

            <Box />

            <Text textStyle="Caption1" textAlign="center">
              {showWaitlist ? (
                <ChakraLink href="https://www.owncoral.com/early-access" isExternal>
                  Don&apos;t have an account?
                  <br />
                  Join the waitlist
                </ChakraLink>
              ) : (
                <ChakraLink href="/signup">
                  Don&apos;t have an account?
                  <br />
                  Sign up now
                </ChakraLink>
              )}
            </Text>
          </VStack>
        </Center>
      </FormControl>
    </form>
  );
}

type FormContents = {
  email: string;
  password: string;
};

type SubmitParams = {
  data: FormContents;
  history: History;
  setUser: (u: UserProfileT) => void;
  setIsLoading: (isLoading: boolean) => void;
  toast: (options?: UseToastOptions | undefined) => string | number | undefined;
  redirectUrl: null | string;
};

// eslint-disable-next-line max-params
async function onSubmit({
  data,
  history,
  setUser,
  setIsLoading,
  toast,
  redirectUrl,
}: SubmitParams): Promise<void> {
  setIsLoading(true);
  const resp = await fetchWrap(
    '/api/login',
    {
      method: 'POST',
      body: JSON.stringify(data),
    },
    true,
  );
  setIsLoading(false);

  if (resp === null) {
    return;
  }

  if (resp.ok) {
    const re = await resp.json();
    setUser(re);

    history.push(
      redirectUrl
        ? decodeURIComponent(redirectUrl)
        : re.numInvestments > 0
        ? PortfolioUrl
        : ListingsUrl,
    );
    return;
  }

  switch (resp.status) {
    case 401:
      toast({
        title: 'Incorrect password',
        description: 'Your password was incorrect, please try again',
        status: 'error',
        duration: null,
        isClosable: true,
      });
      break;

    case 429:
      toast({
        title: 'Too many attempts',
        description: "You've entered the wrong password too many times. Please try again later",
        status: 'error',
        duration: null,
        isClosable: true,
      });
      break;

    default:
      toast({
        title: 'An error occurred.',
        description: 'Unable to login',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      break;
  }
}

// eslint-disable-next-line import/no-default-export
export default Login;

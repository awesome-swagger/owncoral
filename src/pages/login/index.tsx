import React, { Fragment, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
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
  Spacer,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import type { UseToastOptions } from '@chakra-ui/toast';
import type { History } from 'history';

// import Logo from '../../assets/coral.svg';
import { fetchWrap } from '../../lib/api';
import type { UserT } from '../../userContext';
import { UserContext } from '../../userContext';
import ForgotCheckEmail from './ForgotCheckEmail';
import ForgotPassword from './ForgotPassword';
import NewPassword from './NewPassword';

function Login() {
  return (
    <Fragment>
      <Center>
        <Box
          boxShadow="xl"
          rounded="3xl"
          w="60%"
          minW="300px"
          maxW="350px"
          pos="fixed"
          left="50%"
          top="50%"
          m={[2, 3]}
          p={[8, 10]}
          layerStyle="LoginColor"
          sx={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Center>
            <VStack>
              {/* <Icon as={Logo} w={14} h={14} /> */}
              <Heading size="md" color="primary.500">
                Coral
              </Heading>
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
  const [_, setUser] = useContext<UserT>(UserContext);
  const history = useHistory();
  const toast = useToast();

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <form
      onSubmit={handleSubmit(async (data) =>
        onSubmit(data as FormContents, history, setUser, setIsLoading, toast),
      )}
    >
      <FormControl>
        <Center>
          <VStack spacing={2} p={[1, 2]} sx={{ flexGrow: 1 }} textStyle="bodyText1">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} />
              </InputLeftElement>
              <Input
                name="email"
                type="email"
                pl={8}
                placeholder="Email"
                defaultValue={isDev ? 'a@b.com' : ''}
                ref={register({
                  required: true,
                })}
              />
            </InputGroup>
            <Spacer />
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiLock} />
              </InputLeftElement>

              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                defaultValue={isDev ? 'asdfasdfasdf' : ''}
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
            <FormHelperText textStyles="caption">{errors.password?.message}&nbsp;</FormHelperText>
              Don&apos;t have an account?{' '}
              <ChakraLink as={RouterLink} to="/signup">
                Sign up for Coral
              </ChakraLink>
            </FormHelperText>
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
// eslint-disable-next-line max-params
async function onSubmit(
  data: FormContents,
  history: History,
  setUser: (u: UserT) => void,
  setIsLoading: (isLoading: boolean) => void,
  toast: (options?: UseToastOptions | undefined) => string | number | undefined,
): Promise<void> {
  setIsLoading(true);
  const resp = await fetchWrap('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  setIsLoading(false);

  if (resp.ok) {
    setUser(await resp.json());
    history.push('/portfolio');
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
export { ForgotCheckEmail, ForgotPassword, NewPassword };

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
  Spacer,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import type { History } from 'history';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/coral.svg';
import { fetchWrap } from '../../lib/api';
import type { User } from '../../userContext';
import { UserContext } from '../../userContext';

function Login() {
  const backgroundColor = useColorModeValue('inherit', 'whiteAlpha.100');

  return (
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
        backgroundColor={backgroundColor}
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Center>
          <VStack>
            <Icon as={Logo} w={14} h={14} />
            <Heading as="h4" size="md" color="primary.500">
              Coral
            </Heading>
            <LoginForm />
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [_, setUser] = useContext<User>(UserContext);
  const history = useHistory();

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <form onSubmit={handleSubmit(async (data) => onSubmit(data as FormContents, history, setUser))}>
      <FormControl>
        <Center>
          <VStack spacing={2} p={[1, 2]} sx={{ flexGrow: 1 }}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} />
              </InputLeftElement>
              <Input
                name="email"
                type="email"
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
            <FormHelperText>{errors.password?.message}&nbsp;</FormHelperText>
            <Button type="submit" size="xl">
              Log In
            </Button>
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
async function onSubmit(
  data: FormContents,
  history: History,
  setUser: (u: User) => void,
): Promise<void> {
  const resp = await fetchWrap('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (resp.ok) {
    setUser(await resp.json());
    history.push('/portfolio');
    return;
  }
  // TODO: add real UI
  alert('Login failed!');
}

// eslint-disable-next-line import/no-default-export
export default Login;

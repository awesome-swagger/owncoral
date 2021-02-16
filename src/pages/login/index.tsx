/** @jsxRuntime classic */
/** @jsx jsx */
// import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { css, jsx, useTheme } from '@emotion/react';
import { FiEye, FiEyeOff,FiLock, FiMail } from 'react-icons/fi';

import Logo from '../../assets/coral.svg';
// import { fetchWrap } from '../../Utils';
// import { useHistory } from 'react-router';
//
// import type { History } from 'history';
// import type { User } from '../../SharedTypes';

// type FormState = {
//   email: string;
//   password: string;
// };

const Login = () => (
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
      sx={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Center>
        <VStack>
          <Icon as={Logo} w={14} h={14} />
          <h4>Coral</h4>
        </VStack>
      </Center>
      <FormControl>
        <Center>
          <VStack spacing={4} padding={[1, 2]} sx={{ flexGrow: 1 }}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} />
              </InputLeftElement>
              <Input type="email" placeholder="Email address" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiLock} />
              </InputLeftElement>

              <Input type="password" placeholder="Password" />
              <InputRightElement>
                <Icon as={FiEyeOff} />
              </InputRightElement>
            </InputGroup>
            <FormHelperText>Good job!</FormHelperText>
            <Button size="xl">Login</Button>
          </VStack>
        </Center>
      </FormControl>
    </Box>
  </Center>
);

// const onSubmit = (
//   e: React.FormEvent<HTMLFormElement>,
//   formState: FormState,
//   setUser: (up: User) => void,
//   history: History,
// ) => {
//   e.preventDefault();
//   (async () => {
//     const resp = await fetchWrap('/api/login', {
//       method: 'POST',
//       body: JSON.stringify(formState),
//     });
//
//     if (resp.ok) {
//       setUser(await resp.json());
//       history.push('/portfolio');
//       return;
//     }
//     // TODO: add real UI
//     alert('Login failed!');
//   })();
// };

// const handleInputChange = (
//   e: React.ChangeEvent<HTMLInputElement>,
//   state: FormState,
//   setState: (fs: FormState) => void,
// ) => {
//   const { target } = e;
//   const { name, value } = target;
//   setState({ ...state, ...{ [name]: value } });
// };
//
// // Don't try to refactor Signup and Login into sharing too much code
// // yet, signup will likely change and start diverging.

// const Login = ({ setUser }: { setUser: (u: User) => void }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const isDev = process.env.NODE_ENV === 'development';
//   const [formState, setFormState] = useState({
//     email: isDev ? 'a@b.com' : '',
//     password: isDev ? 'asdf' : '',
//   });
//   const history = useHistory();
//   const theme = useTheme();
//
//   return (
//     <Styled.Card isActive>
//       <Styled.CardTitle>
//         <Logo
//           fill={theme.colors.p}
//           css={css`
//             height: 40px;
//           `}
//         />
//         <h4 css={{ margin: 0, color: theme.colors.p }}>Coral</h4>
//       </Styled.CardTitle>
//       <form onSubmit={(e) => onSubmit(e, formState, setUser, history)}>
//         <Styled.InputLine>
//           <Mail size={20} stroke="gray" fill="none" css={{ margin: '0 .5em 0 1em' }} />
//           <input
//             placeholder="Email"
//             name="email"
//             required
//             pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])" // editorconfig-checker-disable
//             value={formState.email}
//             onChange={(e) => handleInputChange(e, formState, setFormState)}
//           />
//         </Styled.InputLine>
//         <Styled.InputLine>
//           <Lock size={22} stroke="gray" fill="none" css={{ margin: '0 .5em 0 1em' }} />
//           <input
//             type={showPassword ? 'text' : 'password'}
//             name="password"
//             placeholder="Password"
//             required
//             value={formState.password}
//             onChange={(e) => handleInputChange(e, formState, setFormState)}
//           />
//           <div
//             css={{ margin: '0 1em 0 .5em' }}
//             onClick={() => {
//               setShowPassword(!showPassword);
//             }}
//           >
//             {showPassword ? (
//               <Eye size={18} stroke="gray" fill="none" />
//             ) : (
//               <EyeOff size={18} stroke="gray" fill="none" />
//             )}
//           </div>
//         </Styled.InputLine>
//         <Styled.LoginBtn>
//           <input type="submit" value="Log In" />
//         </Styled.LoginBtn>
//       </form>
//     </Styled.Card>
//   );
// };

export default Login;

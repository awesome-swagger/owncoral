import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiExternalLink, FiEye, FiEyeOff } from 'react-icons/fi';
import { Redirect, useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Text,
  useToast,
} from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';
import { fbqWrap } from '../../../lib/fbqWrap';
import { Caption1 } from '../../../theme/textStyles';
import { UserContext } from '../../../userContext';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

export const CreateAccount: React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);
  const [_, setUser] = useContext(UserContext);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const history = useHistory();
  const toast = useToast();

  // TODO: Unit test
  // TODO: share logic with server?
  // Previous signup steps were invalid, go back to beginning
  if (
    signupInfo === undefined ||
    !signupInfo.legalFirst ||
    !signupInfo.legalLast ||
    !(signupInfo.residencyCountryCode !== '' || signupInfo.taxPayerId) ||
    !(
      signupInfo.isAccreditedByIncome ||
      signupInfo.isAccreditedByAssets ||
      signupInfo.isAccreditedByLicense
    )
  ) {
    return <Redirect push to="/signup" />;
  }
  
  const onSubmit = () => {
    
  };

  return (
    <form onSubmit={onSubmit}>
      <Container d="flex" flexDir="column" justifyContent="space-between" layerStyle="noSelect">
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title2 mt={8} mb={6} textAlign="left">
              Let’s create your account
            </Title2>
            <FormLabel mt={8}>
              <Text layerStyle="labelColor" fontSize="md" textAlign="left">
                Email
              </Text>
              <Input
                h={12}
                mt={2}
                placeholder="Email"
                {...register('email', { maxLength: 255, required: true })}
                type="email"
                variant="filled"
              />
            </FormLabel>
            <FormLabel mt={4}>
              <Text layerStyle="labelColor" fontSize="md" textAlign="left">
                Password
              </Text>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  h={12}
                  mt={2}
                  placeholder="Password"
                  {...register('password', { minLength: 8, maxLength: 255, required: true })}
                  variant="filled"
                  className={errors.password ? 'shake_animation' : ''}
                />
                <InputRightElement h="calc(100% - 0.5rem)" mt="0.5rem">
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
            </FormLabel>
            <Text
              fontSize="sm"
              color={errors.password ? 'black' : 'gray'}
              className={errors.password ? 'shake_animation' : ''}
              textAlign="left"
              m="0.5rem 0"
            >
              Must be at least 8 characters
            </Text>
          </Box>
        </SlideContainer>
        <Box
          bottom={6}
          pos={{ base: 'fixed', md: 'initial' }}
          w={{ base: 'calc(100% - 3rem)', md: '100%' }}
        >
          <Center>
            <Checkbox
              size="lg"
              mb={2}
              sx={{ '.chakra-checkbox__label': Caption1 }}
              isChecked={agreementChecked}
              onChange={(e) => setAgreementChecked(!agreementChecked)}
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
          <Button type="submit" w="100%" isDisabled={!agreementChecked}>
            Continue
          </Button>
        </Box>
      </Container>
    </form>
  );
};

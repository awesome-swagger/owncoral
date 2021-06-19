import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiExternalLink, FiEye, FiEyeOff } from 'react-icons/fi';
import {
  Box,
  Center,
  Checkbox,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn } from '../../../components';
import { Caption1 } from '../../../theme/textStyles';
import type { FormRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const CreateAccount = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue, errors } = useForm();
    const form = useContext(StepFormContext);
    const [showPassword, setShowPassword] = useState(false);
    const [agreementChecked, setAgreementChecked] = useState(false);

    const onSubmit = useCallback(
      (data) => {
        form.dispatch({ type: 'update-form', payload: { step5: data } });
        nextStep();
      },
      [form, nextStep],
    );

    useEffect(() => {
      const formState = form.formState;

      setValue('email', formState?.step5?.email || '');
      setValue('password', formState?.step5?.password || '');
    }, [form.formState, setValue]);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container layerStyle="noSelect">
          <BackBtn handleClick={prevStep} />
          <Heading size="md" as="h4" mt={8} mb={2} textAlign="left">
            Let’s create your account
          </Heading>
          <Text fontSize="md" textAlign="left" children="Lorem ipsum dolor sir amet" />
          <Box mt={8}>
            <Text fontSize="md" textAlign="left" children="Email" />
            <Input
              h={12}
              mt={2}
              placeholder="Email"
              ref={register}
              name="email"
              type="email"
              variant="filled"
            />
          </Box>
          <Box mt={4}>
            <Text fontSize="md" textAlign="left">
              Password
            </Text>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                h={12}
                mt={2}
                placeholder="Password"
                name="password"
                variant="filled"
                className={errors.password ? 'shake_animation' : ''}
                ref={register({ minLength: 8, required: true })}
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
          </Box>

          <Text
            fontSize="sm"
            color={errors.password ? 'black' : 'gray'}
            className={errors.password ? 'shake_animation' : ''}
            textAlign="left"
            m="0.5rem 0"
            children="Must be at least 8 characters"
          />
          <Center w="calc(100% - 3rem)" bottom="6.5rem" pos="absolute">
            <Checkbox
              size="lg"
              sx={{ '.chakra-checkbox__label': Caption1 }}
              isChecked={agreementChecked}
              onChange={(e) => setAgreementChecked(!agreementChecked)}
            >
              I certify that I am 18 years of age or older, and I agree to the{' '}
              <ChakraLink href="https://www.owncoral.com/user-agreement" isExternal>
                User Agreement
                <Icon as={FiExternalLink} w={3} h={3} verticalAlign="baseline" />
              </ChakraLink>
              {' and '}
              <ChakraLink href="https://www.owncoral.com/privacy" isExternal>
                Privacy Policy
                <Icon as={FiExternalLink} w={3} h={3} verticalAlign="baseline" />
              </ChakraLink>
              Ò
            </Checkbox>
          </Center>
          <SubmitBtn label="Continue" isDisabled={!agreementChecked} />
        </Container>
      </form>
    );
  },
);

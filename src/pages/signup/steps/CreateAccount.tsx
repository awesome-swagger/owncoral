import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiExternalLink, FiEye, FiEyeOff } from 'react-icons/fi';
import {
  Center,
  Checkbox,
  FormLabel,
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
import type { FormRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

export const CreateAccount = forwardRef<FormRef, StepPropsT>(
  ({ nextStep, prevStep }: StepPropsT, ref) => {
    const { handleSubmit, register, setValue, errors } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [agreementChecked, setAgreementChecked] = useState(false);
    const form = useContext(StepFormContext);
    const formStep = form?.formState?.step4;

    const onSubmit = useCallback(
      (data) => {
        form.dispatch({ type: 'update-form', payload: { step4: data } });
        nextStep();
      },
      [form, nextStep],
    );

    useEffect(() => {
      setValue('email', formStep?.email || '');
      setValue('password', formStep?.password || '');
    }, [formStep, setValue]);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container pb={36} layerStyle="noSelect">
          <BackBtn handleClick={prevStep} />
          <Heading size="md" as="h4" mt={8} mb={2} textAlign="left">
            Let’s create your account
          </Heading>
          <FormLabel mt={8}>
            <Text layerStyle="labelColor" fontSize="md" textAlign="left">
              Email
            </Text>
            <Input
              h={12}
              mt={2}
              placeholder="Email"
              ref={register}
              name="email"
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

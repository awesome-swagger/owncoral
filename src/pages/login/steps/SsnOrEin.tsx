import { forwardRef, useContext, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import {
  Heading,
  Input,
  InputGroup,
  Text,
  InputRightElement,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import type { FormRef } from '../steps';
import { StepFormContext } from '../steps';
type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const SsnOrEin = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, register, setValue, errors } = useForm();
  const form = useContext(StepFormContext);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback((data) => {
    form.dispatch({
      type: 'update-form',
      payload: { step4: data },
    });
    nextStep();
  }, []);

  useEffect(() => {
    const formState = form.formState;
    setValue('Ssn_Or_Ein', formState?.step4?.Ssn_Or_Ein || '');
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
          What’s your SSN or EIN?
        </Heading>
        <Text fontSize="1rem" textAlign="left">
          Lorem ipsum dolor sir amet
        </Text>
        <InputGroup>
          <Input
            ref={register({
              required: true,
              minLength: { value: 9, message: 'Please enter a valid SSN number' },
              maxLength: { value: 9, message: 'Please enter a valid SSN number' },
            })}
            name="Ssn_Or_Ein"
            type={showPassword ? 'text' : 'password'}
            placeholder="XXX-XX-XXXX"
            h="3rem"
            bg="#F3F3F3"
            mt="2rem"
            className={errors.Ssn_Or_Ein ? 'shake_animation' : ''}
          />
          <InputRightElement h="calc(100% - 2rem)" mt="2rem">
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
        <Text mt="0.5rem" color="red">
          {errors.Ssn_Or_Ein?.message}
        </Text>
        <SubmitBtn label="Continue" />
      </Container>
    </form>
  );
});

import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  InputRightElement,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import type { FormRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const PopUpContent = {
  privacy: {
    title: 'Privacy & Policay',
    text: 'Privacy & Policy: Lorem ipsum dolor sit amet',
  },
  terms: {
    title: 'Terms & Conditions',
    text: 'Terms & Conditions: Lorem ipsum dolor sit amet',
  },
};

export const CreateAccount = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue, errors } = useForm();
    const form = useContext(StepFormContext);
    const [activepopup, setActivepopup] = useState<'privacy' | 'terms'>('privacy');
    const [showPassword, setShowPassword] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onSubmit = useCallback(
      (data) => {
        form.dispatch({ type: 'update-form', payload: { step5: data } });
        nextStep();
      },
      [handleSubmit],
    );

    useEffect(() => {
      const formState = form.formState;

      setValue('email', formState?.step5?.email || '');
      setValue('password', formState?.step5?.password || '');
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container layerStyle="noSelect">
          <BackBtn pos="absolute" handleClick={prevStep} />

          <Heading size="md" as="h4" mt="2rem" mb="0.5rem" textAlign="left">
            Let’s create your account
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <Box mt="2rem">
            <Text fontSize="1rem" textAlign="left">
              Email
            </Text>
            <Input
              h="3rem"
              mt="0.5rem"
              placeholder="Email"
              ref={register}
              name="email"
              type="email"
              variant="filled"
            />
          </Box>
          <Box mt="2rem">
            <Text fontSize="1rem" textAlign="left">
              Password
            </Text>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                h="3rem"
                mt="0.5rem"
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
            fontSize="0.85rem"
            color={errors.password ? 'black' : 'gray'}
            className={errors.password ? 'shake_animation' : ''}
            textAlign="left"
            m="0.5rem 0"
          >
            Must be at least 8 characters
          </Text>

          <Text
            w=" calc(100% - 3rem)"
            fontSize="0.85rem"
            colorScheme="gray"
            pos="absolute"
            bottom="6.25rem"
            left="1.5rem"
          >
            By tapping “Continue” in the button below, you agree with the{' '}
            <span
              onClick={() => {
                setActivepopup('terms');
                onOpen();
              }}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              terms and conditions
            </span>{' '}
            and{' '}
            <span
              onClick={() => {
                setActivepopup('privacy');
                onOpen();
              }}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              privacy policy
            </span>{' '}
            provided by Coral
          </Text>
          <SubmitBtn label="Continue" />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent minH="450px">
              <ModalHeader>{PopUpContent[activepopup].title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{PopUpContent[activepopup].text}</ModalBody>
            </ModalContent>
          </Modal>
        </Container>
      </form>
    );
  },
);

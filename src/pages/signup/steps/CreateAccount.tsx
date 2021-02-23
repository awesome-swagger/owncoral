import {
  Box,
  Button,
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
} from '@chakra-ui/react';
import React, { forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { SubmitBtn } from '../../../components/submitBtn';
import type { FormRef } from '../../signup';
import { StepFormContext } from '../../signup';

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

          <Heading size="md" as="h4" mt="32px" mb="8px" textAlign="left">
            Let’s create your account
          </Heading>
          <Text fontSize="1rem" textAlign="left">
            Lorem ipsum dolor sir amet
          </Text>
          <Box mt="32px">
            <Text fontSize="1rem" textAlign="left">
              Email
            </Text>
            <Input
              h="48px"
              mt="8px"
              placeholder="Email"
              ref={register}
              name="email"
              type="email"
              variant="filled"
            />
          </Box>
          <Box mt="32px">
            <Text fontSize="1rem" textAlign="left">
              Password
            </Text>
            <Input
              type="password"
              h="48px"
              mt="8px"
              placeholder="Password"
              name="password"
              variant="filled"
              ref={register({ minLength: 8, required: true })}
            />
          </Box>
          {errors.password && (
            <Text fontSize="0.85rem" colorScheme="gray" textAlign="left" m="8px 0">
              Must be at least 8 characters
            </Text>
          )}

          <Text
            w=" calc(100% - 48px)"
            fontSize="0.85rem"
            colorScheme="gray"
            pos="absolute"
            bottom="106px"
            left="24px"
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

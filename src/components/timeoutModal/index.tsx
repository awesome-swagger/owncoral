import React, { useEffect, useContext, useState } from 'react';
import { GlobalLogoutTimeout } from '../../lib/GlobalLogoutTimeout';
import { UserContext } from '../../userContext';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

export const TimeoutModal = () => {
  const [user, setUser] = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (user && user.email) {
      GlobalLogoutTimeout.callback = onOpen;
    }
  }, [GlobalLogoutTimeout]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hello</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

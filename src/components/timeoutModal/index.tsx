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
  const [modalTimeout, setModalTimeout] = useState(9999 * 9999 * 9999 * 9999 * 9999);

  const newTimeout = () => {
    if (user) {
      setModalTimeout(GlobalLogoutTimeout.time);
    }
  };

  newTimeout();

  console.log('user context ===>', modalTimeout);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const Timer = setTimeout(onOpen, modalTimeout);
  }, []);

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

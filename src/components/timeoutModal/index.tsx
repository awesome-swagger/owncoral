import React, { useEffect } from 'react';
import { GlobalLogoutTimeout } from '../../lib/GlobalLogoutTimeout';
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
  const modalTimeout = GlobalLogoutTimeout.time;
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

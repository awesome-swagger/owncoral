import { useContext, useEffect } from 'react';
import { Link as BrowserLink, useLocation } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { GlobalLogoutTimeout } from '../../lib/GlobalLogoutTimeout';
import { UserContext } from '../../userContext';

export const TimeoutModal = () => {
  const [user] = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    if (user?.email) {
      GlobalLogoutTimeout.callback = onOpen;
    }
    // eslint-disable-next-line
  }, [GlobalLogoutTimeout, user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>You&#39;ve been signed out</ModalHeader>
        <ModalCloseButton />
        <ModalBody>For your security, you were signed out due to inactivity.</ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            as={BrowserLink}
            to={
              location.pathname !== '/'
                ? `/login?redirect=${encodeURIComponent(location.pathname + location.search || '')}`
                : '/login'
            }
          >
            Log in again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

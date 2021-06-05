import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export const TermsAndPrivacyModal: any = ({
  activePopup = 'privacy',
  isOpen,
  onClose,
}: {
  activePopup: string;
  isOpen: any;
  onClose: any;
}) => {
  const popUp: string = activePopup;

  const PopUpContent: any = {
    privacy: {
      title: 'Privacy & Policay',
      text: 'Privacy & Policy: Lorem ipsum dolor sit amet',
    },
    terms: {
      title: 'Terms & Conditions',
      text: 'Terms & Conditions: Lorem ipsum dolor sit amet',
    },
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minH="450px">
        <ModalHeader>{PopUpContent[popUp].title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{PopUpContent[popUp].text}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

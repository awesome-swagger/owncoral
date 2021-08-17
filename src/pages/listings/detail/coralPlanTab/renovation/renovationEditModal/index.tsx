import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { FiCheckCircle, FiCircle, FiEdit } from 'react-icons/fi';
import { DummyData } from '../dummyData';

type RenovationEditModalT = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  selectedValue: string[];
  setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>;
  textRef: React.MutableRefObject<any>;
};

export const RenovationEditModal = ({
  text,
  setText,
  selectedValue,
  setSelectedValue,
  textRef,
}: RenovationEditModalT) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newSelectedValue, setNewSelectedValue] = useState(selectedValue);

  const handleSelect = (title: string) => {
    if (newSelectedValue.includes(title)) {
      const index = newSelectedValue.indexOf(title);
      if (index > -1) {
        newSelectedValue.splice(index, 1);
        setNewSelectedValue([...newSelectedValue]);
      }
    } else {
      setNewSelectedValue([...newSelectedValue, title]);
    }
  };

  const handleSubmit = () => {
    textRef.current.innerText = text;
    setSelectedValue(newSelectedValue);
    onClose();
  };
  return (
    <>
      <IconButton
        isRound
        aria-label="edit-button"
        pos="absolute"
        top={-2}
        right={6}
        icon={<Icon h={5} w={5} as={FiEdit} />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Renovation Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              onChange={(x) => setText(x.target.value)}
              value={text}
              rows={6}
              resize="vertical"
            />
            <Flex flexWrap="wrap" gridGap="2">
              {DummyData.map(({ title }: { title: string }) => (
                <Flex
                  px={3}
                  py={2}
                  alignItems="center"
                  borderRadius="full"
                  cursor="pointer"
                  textTransform="capitalize"
                  layerStyle="card"
                  _hover={{ opacity: 0.8 }}
                  onClick={() => handleSelect(title)}
                >
                  <Icon mr={1} as={newSelectedValue.includes(title) ? FiCheckCircle : FiCircle} />
                  {title}
                </Flex>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

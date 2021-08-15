/* eslint-disable complexity */
// TODO: refactor render function
import React, { Fragment, useContext, useEffect, useState, useRef } from 'react';
import {
  Text,
  Image,
  Box,
  Flex,
  AspectRatio,
  UnorderedList,
  ListItem,
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
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { RenovationData } from './renovationData';
import { Title2 } from '../../../../../components/text';
import { useEmblaCarousel } from 'embla-carousel/react';
import { UserContext } from '../../../../../userContext';
import { FiEdit } from 'react-icons/fi';

export const Renovation = () => {
  const [user] = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState(['curb appeal', 'kitchen', 'roof']);
  const [text, setText] = useState('');
  const [viewportRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const textRef: React.MutableRefObject<any> = useRef();
  const Admin = user?.isAdmin;

  const FilteredValue = RenovationData.filter(({ title }) => selectedValue.indexOf(title) > -1);

  useEffect(() => {
    setText(textRef?.current?.innerText);
    if (emblaApi && emblaApi.slideNodes().length !== selectedValue.length) {
      emblaApi.reInit();
    }
  }, [emblaApi, selectedValue]);

  return (
    <Fragment>
      <Box px={6} pos="relative">
        {Admin && (
          <RenovationEditBtn
            text={text}
            setText={setText}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            textRef={textRef}
          />
        )}
        <Title2 my={6}>Renovation</Title2>
        <Text ref={textRef}>
          Given that the property is currently fully occupied, renovation will be staggered as
          leases expire and current tenants vocate their units. We anticipate finishing all
          renovations before January 2022.
        </Text>
      </Box>
      <Box className="embla">
        <Box className="embla__viewport" ref={viewportRef}>
          <Box className="embla__container" pb={6}>
            {FilteredValue.map(({ title, image, renovationList }, idx) => (
              <Box className="embla__slide" minW="87%" mx={2} key={idx}>
                <Box className="embla__slide__inner">
                  <Box width="100%">
                    <AspectRatio
                      my={6}
                      ratio={4 / 3}
                      cursor="pointer"
                      overflow="hidden"
                      boxShadow="sm"
                      borderRadius="2xl"
                    >
                      <Image src={image} alt="renovation" />
                    </AspectRatio>
                    <Title2 textTransform="capitalize" mb={3}>
                      {title}
                    </Title2>
                    <UnorderedList>
                      {renovationList.map((val, idx) => (
                        <ListItem key={idx}>{val}</ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

type RenovationEditBtnT = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  selectedValue: string[];
  setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>;
  textRef: React.MutableRefObject<any>;
};

const RenovationEditBtn = ({
  text,
  setText,
  selectedValue,
  setSelectedValue,
  textRef,
}: RenovationEditBtnT) => {
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
              {RenovationData.map(({ title }: { title: string }) => (
                <Flex
                  px={3}
                  py={2}
                  alignItems="center"
                  borderRadius="full"
                  cursor="pointer"
                  textTransform="capitalize"
                  layerStyle="card"
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

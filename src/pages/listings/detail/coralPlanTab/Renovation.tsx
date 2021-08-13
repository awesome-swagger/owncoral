/* eslint-disable complexity */
// TODO: refactor render function
import React, { Fragment, useContext, useEffect, useState, useRef } from 'react';
import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import {
  Text,
  Image,
  Box,
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
import { Title2 } from '../../../../components/text';
import { useEmblaCarousel } from 'embla-carousel/react';
import { UserContext } from '../../../../userContext';
import { FiEdit } from 'react-icons/fi';

type RenovationPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};

export const Renovation = ({ listingsDetail }: RenovationPropsT) => {
  const textRef: any = useRef();
  const [user] = useContext(UserContext);
  const [text, setText] = useState();
  const Admin = user?.isAdmin;

  const [viewportRef] = useEmblaCarousel({ skipSnaps: false });
  const [emblaRef] = useEmblaCarousel({ skipSnaps: true });

  useEffect(() => {
    setText(textRef?.current?.innerText);
  }, []);

  return (
    <Fragment>
      <Box px={6} pos="relative">
        {Admin && <RenovationEditBtn text={text} setText={setText} textRef={textRef} />}
        <Title2 my={6}>Renovation</Title2>
        <Text ref={textRef}>
          Given that the property is currently fully occupied, renovation will be staggered as
          leases expire and current teanants vocate their units. We anticipate finishing all
          renovations before January 2022.
        </Text>
      </Box>
      <Box className="embla" ref={emblaRef}>
        <Box className="embla__viewport" ref={viewportRef}>
          <Box className="embla__container" pb={6}>
            {RenovationData.map(({ title, renovationList }, idx) => (
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
                      <Image src={listingsDetail.imageUrls[0]} alt="renovation" />
                    </AspectRatio>
                    <Title2>{title}</Title2>
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

const RenovationEditBtn = ({ text, setText, textRef }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    textRef.current.innerText = text;
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
              rows={5}
              resize="vertical"
            />
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

const RenovationData = [
  {
    title: 'Curb Apeal',
    renovationList: ['Point the building exterior', 'Install new landscaping', 'Replace fencing'],
  },
  {
    title: 'Curb Apeal',
    renovationList: ['Point the building exterior', 'Install new landscaping', 'Replace fencing'],
  },
  {
    title: 'Curb Apeal',
    renovationList: ['Point the building exterior', 'Install new landscaping', 'Replace fencing'],
  },
];

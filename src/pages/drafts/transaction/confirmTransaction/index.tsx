import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { BackBtn, Container, BoxLightBorder } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';

export const ConfirmTransaction = ({
  handleTransaction,
}: {
  handleTransaction: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [agreement, setAgreement] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const highLightColor = useColorModeValue('secondary.700', 'secondary.300');

  return (
    <Container>
      <BackBtn handleClick={() => history.goBack()} />
      <Heading size="md">Invest in 3 Linden St</Heading>
      <Headline>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Headline>
      <BoxLightBorder px={4} my={8}>
        <Heading size="xs" textAlign="center">
          3 Linden St
        </Heading>
        <Divider />
        <Flex justifyContent="space-between" my={4}>
          <Title2>Total equity</Title2>
          <Title2>$470.000</Title2>
        </Flex>
        <Flex justifyContent="space-between" my={4}>
          <Title2>Your investment</Title2>
          <Title2 fontWeight="500">$50.000</Title2>
        </Flex>
      </BoxLightBorder>
      <Box pos="absolute" w="calc(100% - 2rem)" left={4} bottom={10}>
        <BoxLightBorder p={4} mb={4}>
          <Flex alignItems="center">
            <Checkbox onChange={() => setAgreement(!agreement)} />
            <Title2 ml={4}>I agree with the</Title2>
            <Title2 color={highLightColor} cursor="pointer" ml={1} onClick={onOpen}>
              legal agreement
            </Title2>
          </Flex>
        </BoxLightBorder>
        <Button
          w="100%"
          disabled={agreement ? false : true}
          onClick={() => handleTransaction('processingTransaction')}
        >
          Confirm transaction
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody my={4}>
            <ModalCloseButton />
            <Heading size="md">Legal agreement</Heading>
            <Title2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </Title2>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

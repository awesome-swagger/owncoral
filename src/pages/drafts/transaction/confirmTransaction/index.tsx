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
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import { BackBtn, Container } from '../../../../components';
import { Headline, Title3 } from '../../../../components/text';

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
      <Box px={4} my={8} border="1px" layerStyle="lightBorder">
        <Heading size="xs" textAlign="center">
          3 Linden St
        </Heading>
        <Divider />
        <Flex justifyContent="space-between" my={4}>
          <Title3>Total equity</Title3>
          <Title3>$470.000</Title3>
        </Flex>
        <Flex justifyContent="space-between" my={4}>
          <Title3>Your investment</Title3>
          <Title3 fontWeight="500">$50.000</Title3>
        </Flex>
      </Box>
      <Box pos="absolute" w="calc(100% - 2rem)" left={4} bottom={10}>
        <Box border="1px" layerStyle="lightBorder" p={4} mb={4}>
          <Flex alignItems="center">
            <Checkbox onChange={() => setAgreement(!agreement)} />
            <Title3 ml={4}>I agree with the</Title3>
            <Title3 color={highLightColor} cursor="pointer" ml={1} onClick={() => onOpen()}>
              legal agreement
            </Title3>
          </Flex>
        </Box>
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
            <Title3>
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
            </Title3>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

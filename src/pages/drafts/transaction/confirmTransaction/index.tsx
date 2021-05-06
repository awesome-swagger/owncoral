import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Heading,
  Box,
  Flex,
  Divider,
  Button,
  Checkbox,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Container, BackBtn } from '../../../../components';
import { H6, SubTitle1 } from '../../../../components/text';

export const ConfirmTransaction = ({
  handleTransaction,
}: {
  handleTransaction: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [agreement, setAgreement] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  return (
    <Container>
      <BackBtn handleClick={() => history.goBack()} />
      <Heading size="md">Invest in 3 Linden St</Heading>
      <SubTitle1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </SubTitle1>
      <Box px={4} my={8} border="1px" layerStyle="lightBorder">
        <Heading size="xs" textAlign="center">
          3 Linden St
        </Heading>
        <Divider />
        <Flex justifyContent="space-between" my={4}>
          <H6>Total equity</H6>
          <H6>$470.000</H6>
        </Flex>
        <Flex justifyContent="space-between" my={4}>
          <H6>Your investment</H6>
          <H6 fontWeight="500">
            $50.000
          </H6>
        </Flex>
      </Box>
      <Box pos="absolute" w="calc(100% - 2rem)" left={4} bottom={10}>
        <Box border="1px" layerStyle="lightBorder" p={4} mb={4}>
          <Flex alignItems="center">
            <Checkbox onChange={() => setAgreement(!agreement)} />
            <H6 ml={4}>
              I agree with the
            </H6>
            <H6 layerStyle="highLightColor" cursor="pointer" ml={1} onClick={() => onOpen()}>
              legal agreement
            </H6>
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
            <H6>
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
            </H6>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

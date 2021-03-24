import {
  Box,
  Image,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import ChartImg from '../../../../../assets/Chart.png';
import { CourseCashFlow } from '../../../courseCashFlow';

export const ChartSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Image src={ChartImg} alt="chart" w="100%" />
      <Box border="1px" p={2} my={4} cursor="pointer" onClick={onOpen}>
        <Heading fontSize="md" m="0">
          Understanding investor cash flow
        </Heading>
        <Heading fontSize="sm" m="0">
          Crash course
        </Heading>
      </Box>
      <Box border="1px" p={2} my={4}>
        <Heading fontSize="md" m="0">
          Learn more about hypothetical investment
        </Heading>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          p={4}
          pb={10}
          mb="0"
          h={{ base: 'calc(100vh - 4rem)', md: '650px' }}
          overflow="hidden"
        >
          <CourseCashFlow handleClose={onClose} />
        </ModalContent>
      </Modal>
    </Box>
  );
};

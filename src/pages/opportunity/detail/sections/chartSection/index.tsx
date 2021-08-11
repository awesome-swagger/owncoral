import {
  Box,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BoxLightBorder } from '../../../../../components';
import ChartImg from '../../../../../assets/Chart.png';
import CourseCashFlow from '../../../../academy/courses/cashFlow';

export const ChartSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Image src={ChartImg} alt="chart" w="100%" />
      <BoxLightBorder p={2} my={4} cursor="pointer" onClick={onOpen} l>
        <Heading fontSize="md" m="0">
          Understanding investor cash flow
        </Heading>
        <Heading fontSize="sm" m="0">
          Crash course
        </Heading>
      </BoxLightBorder>
      <BoxLightBorder p={2} my={4}>
        <Heading fontSize="md" m="0">
          Learn more about hypothetical investment
        </Heading>
      </BoxLightBorder>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          p={4}
          pb={10}
          mb="0"
          h={{ base: `calc(${window.innerHeight}px - 4rem)`, md: '700px' }}
          overflow="hidden"
        >
          <CourseCashFlow />
        </ModalContent>
      </Modal>
    </Box>
  );
};

import { Icon, Flex, Box, Button, Text, VStack } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

export const SlideContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <VStack
      justify="space-between"
      minH={{
        base: `calc(${window.innerHeight}px - 3rem)`,
        md: `calc((${window.innerHeight}px * 0.8) - 3rem)`,
      }}
      pb={{ base: 10, md: 0 }}
      children={children}
    />
  );
};

export const CloseBtn = () => {
  const history = useHistory();
  return <Icon as={FiX} cursor="pointer" onClick={() => history.push('/academy')} />;
};

export const FlowStartBtn = () => {
  const history = useHistory();

  return (
    <Button
      w={{ base: 'calc(100% - 3rem)', md: '100%' }}
      pos={{ base: 'fixed', md: 'relative' }}
      bottom={{ base: 20, md: 0 }}
      onClick={() => history.push('/academy/unit/financing-with-commercial-loans/2')}
    >
      Let&apos;s get started
    </Button>
  );
};

export const FlowEndBtn = () => {
  const history = useHistory();

  return (
    <Box
      p={4}
      cursor="pointer"
      onClick={() => history.push('/academy/course/understanding-coral-listings')}
    >
      <Text textStyle="Body1" fontWeight="600" my={2}>
        Understanding Coral listings
      </Text>
      <Text textStyle="Body2">Crash course</Text>
    </Box>
  );
};

export const NextBtn = ({
  nextStep = 'back-to-property',
  finishBtn = false,
}: {
  nextStep?: string;
  finishBtn?: boolean;
}) => {
  const history = useHistory();

  return (
    <Button
      w={finishBtn ? 'auto' : 10}
      h={10}
      borderRadius={finishBtn === false ? 'full' : '2xl'}
      onClick={() => history.push(`/academy/unit/financing-with-commercial-loans/${nextStep}`)}
    >
      {finishBtn ? 'Finish' : <Icon as={FiChevronRight} />}
    </Button>
  );
};

export const PrevBtn = ({ background = true }: { background?: boolean }) => {
  const history = useHistory();

  return background ? (
    <Button borderRadius="full" colorScheme="white" w={10} h={10} onClick={() => history.goBack()}>
      <Icon as={FiChevronLeft} />
    </Button>
  ) : (
    <Icon as={FiChevronLeft} cursor="pointer" onClick={() => history.goBack()} />
  );
};

export const BtnsWrapper = ({ children }: { children: React.ReactNode }) => (
  <Flex
    mt={4}
    justifyContent="space-between"
    w={{ base: 'calc(100% - 3rem)', md: '100%' }}
    pos={{ base: 'fixed', md: 'relative' }}
    bottom={{ base: 20, md: 0 }}
    children={children}
  />
);

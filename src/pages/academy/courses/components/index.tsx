import { Icon, Flex, Box, Button, Text, VStack } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useLocation, useHistory } from 'react-router-dom';

export const CloseBtn = () => {
  const history = useHistory();
  return <Icon as={FiX} cursor="pointer" onClick={() => history.push('/academy')} />;
};

export const FlowStartBtn = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const pathnames: string[] = pathname.split('/');

  const route = pathnames[pathnames.length - 2];

  return (
    <Button
      w={{ base: 'calc(100% - 3rem)', md: '100%' }}
      pos={{ base: 'fixed', md: 'relative' }}
      bottom={{ base: 20, md: 0 }}
      onClick={() => history.push(`/academy/unit/${route}/2`)}
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

export const NextBtn = ({ finishBtn = false }: { finishBtn?: boolean }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const pathnames: string[] = pathname.split('/');
  const route = pathnames[pathnames.length - 2];
  const nextRoute = Number(pathnames[pathnames.length - 1]) + 1;

  return (
    <Button
      w={finishBtn ? 'auto' : 10}
      h={10}
      borderRadius={finishBtn === false ? 'full' : '2xl'}
      onClick={() =>
        history.push(`/academy/unit/${route}/${finishBtn ? 'back-to-property' : nextRoute}`)
      }
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

export const BtnsWrapper = ({ finishBtn = false }: { finishBtn?: boolean }) => (
  <Flex
    mt={4}
    justifyContent="space-between"
    w={{ base: 'calc(100% - 3rem)', md: '100%' }}
    pos={{ base: 'fixed', md: 'relative' }}
    bottom={{ base: 20, md: 0 }}
  >
    <PrevBtn />
    <NextBtn finishBtn={finishBtn} />
  </Flex>
);

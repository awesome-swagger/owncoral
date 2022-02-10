import type React from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Circle,
  Flex,
  Icon,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';

export const SlideShow = ({ children }: { children: React.ReactNode }) => (
  <Box
    layerStyle="selectionBox"
    borderRadius="full"
    pos={{ base: 'fixed', md: 'relative' }}
    right={{ base: 4, md: 0 }}
    px={4}
    py={1}
  >
    {children}
  </Box>
);

export const CloseBtn = ({ backUrl } : { backUrl?: string; }) => {
  const history = useHistory();

  return (
    <Icon
      as={FiX}
      cursor="pointer"
      onClick={() => backUrl ? history.push(backUrl) : history.goBack()}
    />
  );
}

export const FlowStartBtn = ({ path } : { path: string }) => {
  const history = useHistory();

  return (
    <Button
      w={{ base: 'calc(100% - 3rem)', md: '100%' }}
      pos={{ base: 'fixed', md: 'relative' }}
      bottom={{ base: 20, md: 0 }}
      onClick={() => history.push(path)}
    >
      Let&apos;s get started
    </Button>
  );
};

export const FlowEndBtn = ({ path } : { path: string }) => {
  const history = useHistory();

  return (
    <Box
      p={4}
      cursor="pointer"
      onClick={() => history.push(path)}
    >
      <Text textStyle="Body1" fontWeight="600" my={2}>
        Understanding Coral listings
      </Text>
      <Text textStyle="Body2">Crash course</Text>
    </Box>
  );
};

export const NextBtn = ({
  route,
  nextStep,
} : {
  route: string;
  nextStep: string;
}) => {
  const history = useHistory();
  const isFinishBtn = nextStep === "back-to-property";

  return (
    <Button
      w={isFinishBtn ? 'auto' : 10}
      h={10}
      borderRadius={isFinishBtn ? '2xl' : 'full'}
      onClick={() =>
        history.push(`${route}/${nextStep}`)
      }
    >
      {isFinishBtn ? 'Finish' : <Icon as={FiChevronRight} />}
    </Button>
  );
};

export const PrevBtn = ({
  background = true,
  route,
  prevStep,
} : {
  background?: boolean;
  route?: string;
  prevStep?: string;
}) => {
  const history = useHistory();

  const onClick = () => {
    if(route && prevStep) {
      history.push(route + '/' + prevStep);
    } else {
      history.goBack();
    }
  }

  return background ? (
    <Button borderRadius="full" colorScheme="white" w={10} h={10} onClick={onClick}>
      <Icon as={FiChevronLeft} />
    </Button>
  ) : (
    <Icon as={FiChevronLeft} cursor="pointer" onClick={onClick} />
  );
};

export const BtnsWrapper = ({
  route,
  prevStep,
  nextStep,
} : {
  route: string;
  prevStep?: string;
  nextStep: string;
}) => (
  <Flex
    mt={4}
    justifyContent="space-between"
    w={{ base: 'calc(100% - 3rem)', md: '100%' }}
    pos={{ base: 'fixed', md: 'relative' }}
    bottom={{ base: 20, md: 0 }}
  >
    <PrevBtn route={route} prevStep={prevStep} />
    <NextBtn route={route} nextStep={nextStep} />
  </Flex>
);

export const CircleIcon: React.FC<{ color: string }> = ({ color }) => {
  const tealColor = useColorModeValue('teal.700', 'teal.400');
  const greenColor = useColorModeValue('green.200', 'green.100');
  const orangeColor = useColorModeValue('orange.300', 'orange.200');

  const colors: { [key: string]: string } = {
    'teal': tealColor,
    'green': greenColor,
    'orange': orangeColor
  }

  return <Circle size={2} mr={2} bg={colors[color] || color} />;
};

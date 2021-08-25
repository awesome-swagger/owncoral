import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Academy from '../../../../../assets/academy-1.svg';
import UtilityImg from '../../../../../assets/renovation/utility.png';
import LegalOwnership from '../../../../../assets/crash-course/legal-ownership.png';
import PropertyLlc from '../../../../../assets/crash-course/property-llc.png';
import BuyersAndShares from '../../../../../assets/crash-course/buyers-shares.png';
import Onboarding from '../../../../../assets/crash-course/Onboarding_Own_gray.png';
import Frame from '../../../../../assets/Frame615.png';
import { ProgressBar, Circle } from '../../../../../components';
import { Title2 } from '../../../../../components/text';

const CloseBtn = () => {
  const history = useHistory();
  return <Icon as={FiX} cursor="pointer" onClick={() => history.push('/academy')} />;
};

const FlowStartBtn = () => {
  const history = useHistory();

  return (
    <Button
      pos="absolute"
      bottom={6}
      left={4}
      w="calc(100% - 2rem)"
      onClick={() => history.push('/academy/unit/ownership-structure/2')}
    >
      Let’s dig in
    </Button>
  );
};

const FlowEndBtn = () => {
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

const NextBtn = ({
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
      onClick={() => history.push(`/academy/unit/ownership-structure/${nextStep}`)}
    >
      {finishBtn ? 'Finish' : <Icon as={FiChevronRight} />}
    </Button>
  );
};

const PrevBtn = ({ background = true }: { background?: boolean }) => {
  const history = useHistory();

  return background ? (
    <Button colorScheme="white" w={10} h={10} onClick={() => history.goBack()}>
      <Icon as={FiChevronLeft} />
    </Button>
  ) : (
    <Icon as={FiChevronLeft} cursor="pointer" onClick={() => history.goBack()} />
  );
};

const BtnsWrapper = (props: any) => (
  <Flex
    justifyContent="space-between"
    w="calc(100% - 3rem)"
    pos={{ base: 'fixed', md: 'absolute' }}
    bottom={{ base: 20, md: 6 }}
    {...props}
  />
);

const takeAways = [
  'Coral forms a new property LLC to acquire a property.',
  'The LLC has a total of 100 shares (ownership interests).',
  'Coral secures leverage (a loan) to allow buyers to own a higher percentage of the property with less capital (cash).',
  'Coral brings together buyers, each of whom chooses how many shares they want to own.',
  'Coral manages the property.',
  'The LLC insulates you from liability.',
  'If owners are dissatisfied, owners can vote and fire Pacaso.',
];

export const Data = () => {
  const eqColor = useColorModeValue('#074851', '#48CAE4');
  const debtColor = useColorModeValue('#80ECD1', '#F1FAEE');
  return [
    {
      name: '1',
      jsx: (
        <Box h="100%">
          <CloseBtn />
          <Center flexDirection="column" textAlign="center" h="100%">
            <Image h="240px" src={LegalOwnership} alt="frame" />
            <Title2 my={4}>Legal Ownership Structure</Title2>
            <Text textStyle="Body1">
              Coral facilitates direct ownership of investment properties. We do this through a
              property-specific LLC: owners (people like you) buy shares of the LLC, which owns the
              property.
            </Text>
            <Text textStyle="Body1">
              This structure gives you all the benefits of direct ownership and insulates you from
              liability.
            </Text>
          </Center>
          <FlowStartBtn />
        </Box>
      ),
    },
    {
      name: '2',
      jsx: (
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
              1/6
            </Box>
          </Flex>
          <ProgressBar total={6} value={1} />
          <Title2 my={4}>We form a property LLC</Title2>
          <Text textStyle="Body1" fontWeight="500">
            When Coral identifies an investment property it wants to buy, it forms an LLC: a limited
            liability company. That LLC acquires the home.
          </Text>
          <Image mx="auto" src={PropertyLlc} />
          <BtnsWrapper>
            <PrevBtn />
            <NextBtn nextStep="3" />
          </BtnsWrapper>
        </Box>
      ),
    },
    {
      name: '3',
      jsx: (
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
              2/6
            </Box>
          </Flex>
          <ProgressBar total={6} value={2} />
          <Title2 my={4}>We secure leverage</Title2>
          <Text textStyle="Body1" fontWeight="500">
            Coral secures leverage on behalf of the property LLC. This means that the LLC has a
            loan, which covers part of the cost of the property. Typically, this loan covers
            approximately 65% of the purchase price.
          </Text>
          <Text textStyle="Body1" fontWeight="500" my={4}>
            This leverage allows you to buy more of the property with less capital (cash).
          </Text>
          <Flex
            mt={20}
            mb={6}
            borderRadius="full"
            overflow="hidden"
            h={3}
            justifyContent="space-between"
          >
            <Box bg={eqColor} w="35%" />
            <Box bg={debtColor} w="65%" />
          </Flex>
          <HStack>
            <Circle color="primary" />
            <Text>Initial equity</Text>
          </HStack>
          <HStack>
            <Circle color="secondary" />
            <Text>Initial loan</Text>
          </HStack>
          <BtnsWrapper>
            <PrevBtn />
            <NextBtn nextStep="4" />
          </BtnsWrapper>
        </Box>
      ),
    },
    {
      name: '4',
      jsx: (
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
              3/6
            </Box>
          </Flex>
          <ProgressBar total={6} value={3} />
          <Title2 my={4}>We bring together buyers</Title2>
          <Text textStyle="Body1" fontWeight="500">
            The LLC has a total of 100 ownership interests (or 100 shares). Buyers have the
            opportunity to buy one share, ten shares or however many they choose.
          </Text>
          <Image mx="auto" src={BuyersAndShares} />
          <BtnsWrapper>
            <PrevBtn />
            <NextBtn nextStep="5" />
          </BtnsWrapper>
        </Box>
      ),
    },
    {
      name: '5',
      jsx: (
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
              4/6
            </Box>
          </Flex>
          <ProgressBar total={6} value={4} />
          <Title2 my={4}>We manage the property</Title2>
          <Text textStyle="Body1" fontWeight="500">
            Coral manages the property per the business plan. We manage any planned renovations, as
            well as unexpected repairs and maintenance.
          </Text>
          <Text textStyle="Body1" fontWeight="500" my={4}>
            We find tenants and manage the relationships with those tenants, including all repair
            requests. We manage relationships with local vendors to keep the property operational
            and in good condition.
          </Text>
          <Image mx="auto" src={UtilityImg} />
          <BtnsWrapper>
            <PrevBtn />
            <NextBtn nextStep="6" />
          </BtnsWrapper>
        </Box>
      ),
    },
    {
      name: '6',
      jsx: (
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
              5/6
            </Box>
          </Flex>
          <ProgressBar total={6} value={5} />
          <Title2 fontSize="2xl" my={4}>
            The LLC insulates you from liability
          </Title2>
          <Text textStyle="Body1" fontWeight="500">
            LLC stands for limited liability company. By virtue of that, you're insulated from
            liability. There are costs associated with owning an investment property, but these
            costs are paid out of the LLC's operating cash flow — not out of your pocket.
          </Text>
          <Image mx="auto" src={Onboarding} />
          <BtnsWrapper>
            <PrevBtn />
            <NextBtn nextStep="7" />
          </BtnsWrapper>
        </Box>
      ),
    },
    {
      name: '7',
      jsx: (
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
              6/6
            </Box>
          </Flex>
          <ProgressBar total={6} value={6} />
          <Title2 my={4}>Takeaways</Title2>
          <Text textStyle="Body1" fontWeigh="500">
            Coral enables people (like you) to own investment properties in a way that wouldn't
            otherwise be available or affordable.
          </Text>
          <Box my={4}>
            {takeAways.map((value, index) => (
              <Flex mt={4}>
                <Box>
                  <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
                    <Title2>{index + 1}</Title2>
                  </Center>
                </Box>
                <Box my={1} pl={4}>
                  <Text textStyle="Body1" fontWeight="600">
                    {value}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
          <BtnsWrapper>
            <PrevBtn />
            <NextBtn finishBtn={true} />
          </BtnsWrapper>
        </Box>
      ),
    },
    {
      name: 'back to property',
      jsx: (
        <Box pb={40}>
          <PrevBtn background={false} />
          <Center pt={20} flexDirection="column">
            <Image src={Frame} alt="frame" />
            <Title2 textAlign="center">
              Well done! Legal Ownership Structure lesson completed!
            </Title2>
          </Center>

          <Box w="calc(100% - 2rem)" pos="absolute" bottom={6}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              layerStyle="selectionBox"
              borderRadius="2xl"
              overflow="hidden"
            >
              <FlowEndBtn />
              <Icon as={Academy} h="auto" w="auto" />
            </Flex>
          </Box>
        </Box>
      ),
    },
  ];
};

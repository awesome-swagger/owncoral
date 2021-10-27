import { FaLightbulb } from 'react-icons/fa';
import { Box, Center, Flex, HStack, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { CloseBtn, FlowStartBtn, FlowEndBtn, PrevBtn, BtnsWrapper } from '../components';
import { Circle, ProgressBar, SlideShow, SlideContainer } from '../../../../components';
import { Title2 } from '../../../../components/text';

import Academy from '../../../../assets/academy-1.svg';
import BuyersAndShares from '../../../../assets/crash-course/buyers-shares.png';
import Frame from '../../../../assets/Frame615.png';
import LegalOwnership from '../../../../assets/crash-course/legal-ownership.png';

const takeAways = [
  'Coral forms a new property LLC to acquire a property. The LLC structure insulates its owners from liability.',
  'The LLC has a total of 100 shares. Each share represents 1% ownership.',
  'Coral brings together buyers. Each buyer chooses how many shares they want to own.',
  'Coral secures leverage (a loan) to allow buyers to own a higher percentage of the property with less capital (cash).',
  'Coral executes the business plan for the property and manages ongoing operations.',
];

export const Data = () => {
  const eqColor = useColorModeValue('teal.700', 'teal.400');
  const debtColor = useColorModeValue('green.200', 'green.100');

  return [
    {
      name: '1',
      jsx: (
        <SlideContainer>
          <Box w="100%">
            <CloseBtn />
          </Box>
          <Center my={4} flexDirection="column" textAlign="center" h="100%">
            <Image h="240px" src={LegalOwnership} alt="frame" />
            <Title2 my={4}>Legal Ownership Structure</Title2>
            <Text textStyle="Body1">
              Coral facilitates direct ownership of investment properties through a property LLC.
              Owners (people like you) buy shares of the LLC, which owns the property.
            </Text>
          </Center>
          <FlowStartBtn />
        </SlideContainer>
      ),
    },
    {
      name: '2',
      jsx: (
        <SlideContainer>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <CloseBtn />
              <SlideShow>1/5</SlideShow>
            </Flex>
            <ProgressBar total={5} value={1} />
            <Title2 my={4}>We form a property LLC</Title2>
            <Text textStyle="Body1" fontWeight="500">
              When Coral identifies an investment property it wants to buy, it forms an LLC: a
              limited liability company. That LLC acquires the home.
            </Text>
            <Box layerStyle="card" p={4} my={8} borderRadius="2xl">
              <Flex>
                <Center h={6} mr={4}>
                  <Icon as={FaLightbulb} />
                </Center>
                <Text>
                  An LLC is a business structure in the U.S. that protects its owners from personal
                  responsibility for its debts or liabilities. This structure allows the profits to
                  be passed directly to the owners (members) so that they are taxed only once, as
                  part of the investors’ personal income.
                </Text>
              </Flex>
            </Box>
          </Box>
          <BtnsWrapper />
        </SlideContainer>
      ),
    },
    {
      name: '3',
      jsx: (
        <SlideContainer>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <CloseBtn />
              <SlideShow>2/5</SlideShow>
            </Flex>
            <ProgressBar total={5} value={2} />
            <Title2 my={4}>We bring together buyers</Title2>
            <Text textStyle="Body1" fontWeight="500">
              The LLC has a total of 100 shares. Each share represents 1% ownership. Buyers have the
              opportunity to buy one share, ten shares, or however many they choose.
            </Text>
            <Image mx="auto" src={BuyersAndShares} />
          </Box>
          <BtnsWrapper />
        </SlideContainer>
      ),
    },
    {
      name: '4',
      jsx: (
        <SlideContainer>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <CloseBtn />
              <SlideShow>3/5</SlideShow>
            </Flex>
            <ProgressBar total={5} value={3} />
            <Title2 my={4}>We secure leverage</Title2>
            <Text textStyle="Body1" fontWeight="500">
              Coral secures leverage on behalf of the property LLC. This means that the LLC has a
              loan, which covers part of the cost of the property. Typically, this loan covers
              approximately 65% of the purchase price.
            </Text>
            <Text textStyle="Body1" fontWeight="500" my={4}>
              This leverage allows you to buy more of the property with less cash.
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
              <Circle color="teal" />
              <Text>Initial equity</Text>
            </HStack>
            <HStack>
              <Circle color="green" />
              <Text>Initial loan</Text>
            </HStack>
          </Box>
          <BtnsWrapper />
        </SlideContainer>
      ),
    },
    {
      name: '5',
      jsx: (
        <SlideContainer>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <CloseBtn />
              <SlideShow>4/5</SlideShow>
            </Flex>
            <ProgressBar total={5} value={4} />
            <Title2 my={4}>We manage the property</Title2>
            <Text textStyle="Body1" fontWeight="500">
              Coral executes the business plan for the property. We manage any planned renovations
              as well as unexpected repairs and maintenance; find tenants, and manage those
              relationships (including all repair requests).
            </Text>
            <Text textStyle="Body1" fontWeight="500" my={4}>
              You sit back and enjoy the benefits without any of the headaches!
            </Text>
          </Box>
          <BtnsWrapper />
        </SlideContainer>
      ),
    },
    {
      name: '6',
      jsx: (
        <SlideContainer>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <CloseBtn />
              <SlideShow>5/5</SlideShow>
            </Flex>
            <ProgressBar total={5} value={5} />
            <Title2 my={4}>Takeaways</Title2>
            <Text textStyle="Body1" fontWeigh="500">
              Coral enables people (like you) to own investment properties in a way that
              wouldn&apos;t otherwise be available or affordable.
            </Text>
            <Box my={4}>
              {takeAways.map((value, index) => (
                <Flex mt={4} key={index}>
                  <Box>
                    <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
                      <Title2>{index + 1}</Title2>
                    </Center>
                  </Box>
                  <Box pl={4}>
                    <Text textStyle="Body2">{value}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
          <BtnsWrapper finishBtn />
        </SlideContainer>
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

          <Box w="calc(100% - 3rem)" pos="absolute" bottom={6}>
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

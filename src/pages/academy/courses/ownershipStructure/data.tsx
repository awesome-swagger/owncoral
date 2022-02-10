import { FaLightbulb } from 'react-icons/fa';
import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react';

import { ProgressBar, SlideContainer } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { AcademyUrl, CoursesUrl } from '../../../../lib/uriConstants';
import { titleToUrlFragment } from '../../lib';
import {
  BtnsWrapper,
  CloseBtn,
  FlowEndBtn,
  FlowStartBtn,
  PrevBtn,
  SlideShow
} from '../components';
import { PercentBar } from './percentBar';

import Academy from '../../../../assets/academy-1.svg';
import BuyersAndShares from '../../../../assets/crash-course/buyers-shares.png';
import Frame from '../../../../assets/Frame615.png';
import LegalOwnership from '../../../../assets/crash-course/legal-ownership.png';

const takeAways = [
  'Coral forms a new property LLC to acquire a property. The LLC structure insulates its owners from liability.',
  'The LLC has a total of 100 shares. Each share represents 1% ownership.',
  'Coral brings together buyers. Each buyer chooses how many shares they want to own.',
  'Coral secures leverage (a loan) to allow buyers to own a higher percentage of the property with less capital (cash).', // editorconfig-checker-disable-line
  'Coral executes the business plan for the property and manages ongoing operations.',
];

export const OwnershipStructureData = (url: string, title: string) => {
  const route = AcademyUrl + url;
  const backUrl = CoursesUrl + '/' + titleToUrlFragment(title);

  const ownershipStartData = (
    <SlideContainer>
      <Box w="100%">
        <CloseBtn backUrl={backUrl} />
      </Box>
      <Center my={4} flexDirection="column" textAlign="center" h="100%">
        <Image h="240px" src={LegalOwnership} alt="frame" />
        <Title2 my={4}>Legal Ownership Structure</Title2>
        <Text textStyle="Body1">
          Coral facilitates direct ownership of investment properties through a property LLC.
          Owners (people like you) buy shares of the LLC, which owns the property.
        </Text>
      </Center>
      <FlowStartBtn path={route + '/1'} />
    </SlideContainer>
  );

  const ownershipStructureData = [
    (
      <SlideContainer key="Ownership-1">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn backUrl={backUrl} />
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
        <BtnsWrapper route={route} prevStep="get-started" nextStep="2" />
      </SlideContainer>
    ),
    (
      <SlideContainer key="Ownership-2">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn backUrl={backUrl} />
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
        <BtnsWrapper route={route} prevStep="1" nextStep="3" />
      </SlideContainer>
    ),
    (
      <SlideContainer key="Ownership-3">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn backUrl={backUrl} />
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
          <PercentBar />
        </Box>
        <BtnsWrapper route={route} prevStep="2" nextStep="4" />
      </SlideContainer>
    ),
    (
      <SlideContainer key="Ownership-4">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn backUrl={backUrl} />
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
        <BtnsWrapper route={route} prevStep="3" nextStep="5" />
      </SlideContainer>
    ),
    (
      <SlideContainer key="Ownership-5">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn backUrl={backUrl} />
            <SlideShow>5/5</SlideShow>
          </Flex>
          <ProgressBar total={5} value={5} />
          <Title2 my={4}>Takeaways</Title2>
          <Text textStyle="Body1" fontWeight="500">
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
        <BtnsWrapper route={route} prevStep="4" nextStep="back-to-property" />
      </SlideContainer>
    ),
  ];

  const ownershipEndData = 
  (
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
          <FlowEndBtn path={backUrl} />
          <Icon as={Academy} h="auto" w="auto" />
        </Flex>
      </Box>
    </Box>
  );

  return {
    ownershipStartData,
    ownershipStructureData,
    ownershipEndData
  }
}

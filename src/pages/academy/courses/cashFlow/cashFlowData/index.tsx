import { useHistory } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { BsGraphUp } from 'react-icons/bs';
import { HiOutlineCash } from 'react-icons/hi';
import { Box, Button, Center, Flex, Icon, Image, Text, Link } from '@chakra-ui/react';
import { Title2, Headline, Subhead } from '../../../../../components/text';
import { ProgressBar } from '../../../../../components';
import {
  RentalRevenueChart,
  RealizedAppreciationChart,
  OverAllCashChart,
  TotalReturnChart,
} from '../charts';
import ChartImg from '../../../../../assets/Frame331.png';
import Academy from '../../../../../assets/academy-1.svg';
import Frame from '../../../../../assets/Frame615.png';

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
      onClick={() => history.push('/academy/unit/cash-flow/2')}
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
      pos="absolute"
      bottom={6}
      right={4}
      onClick={() => history.push(`/academy/unit/cash-flow/${nextStep}`)}
    >
      {finishBtn ? 'Finish' : <Icon as={FiChevronRight} />}
    </Button>
  );
};

const PrevBtn = ({ background = true }: { background?: boolean }) => {
  const history = useHistory();
  return background ? (
    <Button
      colorScheme="white"
      w={10}
      h={10}
      pos="absolute"
      bottom={6}
      left={4}
      onClick={() => history.goBack()}
    >
      <Icon as={FiChevronLeft} />
    </Button>
  ) : (
    <Icon as={FiChevronLeft} cursor="pointer" onClick={() => history.goBack()} />
  );
};

export const Data = [
  {
    name: '1',
    jsx: (
      <Box h="100%">
        <CloseBtn />
        <Center flexDirection="column" textAlign="center" h="100%">
          <Image src={Frame} alt="frame" />
          <Title2 my={4}>What is investor cash flow?</Title2>
          <Text textStyle="Body1">
            Investor cash flow is the amount of profit you bring in each month from property
            operation, and occasionally appreciation realization. It is actual cash that goes
            straight to your bank account (distributed monthly).
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
            1/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={1} />
        <Title2 my={4}>Where does Investor Cash Flow comes from?</Title2>
        <Text textStyle="Body1" fontWeight="500">
          The cash flow is derived from these sources:
        </Text>
        <Box my={6}>
          <Flex mb={4}>
            <Box>
              <Icon
                p={2}
                h={10}
                w={10}
                borderRadius="xl"
                layerStyle="selectionBox"
                as={HiOutlineCash}
              />
            </Box>
            <Box ml={4}>
              <Headline>Rental Revenue</Headline>
              <Text textStyle="Body2">tenants pay rent</Text>
            </Box>
          </Flex>
          <Flex>
            <Box>
              <Icon
                p={2}
                h={10}
                w={10}
                borderRadius="xl"
                layerStyle="selectionBox"
                as={BsGraphUp}
              />
            </Box>
            <Box ml={4}>
              <Headline>Realized Appreciation</Headline>
              <Text textStyle="Body2">
                The property increases in value, and we choose to return cash to investors through a
                higher loan balance.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box layerStyle="selectionBox" borderRadius="2xl" p={4} mt={8}>
          <Headline>Note</Headline>
          <Text textStyle="Body2">
            At the sale of the property, you&#39;ll also receive (as a part of your cash flow) any
            unused cash that had been reserved to cover specific cash outflows, such as maintenance
            and repair.
          </Text>
        </Box>
        <PrevBtn />
        <NextBtn nextStep="3" />
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
            2/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={2} />
        <Title2 my={4}>Rental revenue</Title2>
        <Text textStyle="Body1" fontWeight="500">
          Rental revenue is the first way to make money with Coral properties. Rent is collected
          from tenants, and expenses are paid. What remains is the profit.
        </Text>

        <Center w="100%" h={250}>
          <RentalRevenueChart />
        </Center>
        <Flex justifyContent="center" mb={4} mt={-6}>
          <Flex alignItems="center">
            <Box mr={2} w={2} h={2} borderRadius="full" layerStyle="operatingColor" />
            <Text textStyle="Body2">Operating Cash Flow</Text>
          </Flex>
        </Flex>

        <Text textStyle="Body2">
          Cash flow derived from rental revenue typically looks pretty smooth for Coral properties,
          growing year over year as a result of renovations or general market trends (annual
          increases), or improved operational efficiencies. Occasionally, we may plan for vacancies
          so that we can renovate units.
        </Text>
        <PrevBtn />
        <NextBtn nextStep="4" />
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
            3/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={3} />
        <Title2 my={4}>Realized Appreciation</Title2>
        <Text textStyle="Body1" fontWeight="500">
          The second source of cash flow is the appreciation of the property itself.
        </Text>
        <Center w="100%" h={250}>
          <RealizedAppreciationChart />
        </Center>
        <Flex justifyContent="center" mb={4} mt={-6}>
          <Flex alignItems="center">
            <Box mr={2} w={2} h={2} borderRadius="full" layerStyle="recognizedColor" />
            <Text textStyle="Body2">Recognized appreciation</Text>
          </Flex>
        </Flex>
        <Text textStyle="Body2">
          Selling the property is one way to realize the gains from an increase in property value.
          Coral also realizes this appreciation by working with our lender to recognize the
          increased value of the property and increase our loan balance accordingly. This happens in
          the form of a construction earn-out (where we receive additional funds from our lender
          upon completion of construction) or refinancing (a new loan).
        </Text>
        <PrevBtn />
        <NextBtn nextStep="5" />
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
            4/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={4} />
        <Title2 my={4}>Overall Cash Flow</Title2>
        <Text textStyle="Body1" fontWeight="500">
          The overall cash flow includes distributions that come from both rental revenue and
          realized appreciation, as well as any remaining reserve.
        </Text>
        <Center w="100%" h={250}>
          <OverAllCashChart />
        </Center>
        <Flex justifyContent="space-between" px={2} mb={4} mt={-6}>
          <Flex alignItems="center">
            <Box mr={2} w={2} h={2} borderRadius="full" layerStyle="operatingColor" />
            <Text textStyle="Body2">Operating Cash Flow</Text>
          </Flex>
          <Flex alignItems="center">
            <Box mr={2} w={2} h={2} borderRadius="full" layerStyle="recognizedColor" />
            <Text textStyle="Body2">Recognized appreciation</Text>
          </Flex>
        </Flex>
        <Text textStyle="Body2">
          The overall cash flow includes distributions that come from both rental revenue and
          realized appreciation, as well as any remaining reserve.
        </Text>
        <Link>
          <Text textStyle="Body1" mt={4}>
            Learn more on depreciation
          </Text>
        </Link>

        <PrevBtn />
        <NextBtn nextStep="6" />
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
            5/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={5} />
        <Title2 fontSize="2xl" my={4}>
          Tax efficiency
        </Title2>
        <Text textStyle="Body1" fontWeight="500">
          Real estate is extremely tax efficient, and Coral passes all these benefits to the
          investor.
        </Text>
        <Text textStyle="Body2" my={4}>
          The expenses and depreciation of the building are tax write-offs that offset the rental
          revenue of the property. This means that you&apos;ll likely pay very little (if any)
          income tax on your cash flow.
        </Text>
        <Image w="100%" src={ChartImg} alt="chart" />
        <Text textStyle="Body2">
          We do all this for you — so the tax flow chart shows non-taxable income as &ldquo;return
          of capital&rdquo; and other taxable income as &ldquo;income&rdquo;. The tax form (a K-1)
          we provide you with each year also reflects this reality.
        </Text>
        <PrevBtn />
        <NextBtn nextStep="7" />
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
            6/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={6} />
        <Title2 my={4}>Total Return</Title2>
        <Text textStyle="Body1" fontWeight="500">
          The total return shows you what’s taxable, and at what rate. Capital gains tax is a much
          lower rate than income tax.
        </Text>
        <Flex
          p={4}
          w="fit-content"
          textAlign="left"
          boxShadow="base"
          borderRadius="2xl"
          background="inherit"
          position="relative"
          flexDirection="column"
          left="50%"
          top={6}
        >
          <Subhead>TAXABLE INCOME</Subhead>
          <Subhead fontWeight="bold">$3k</Subhead>
        </Flex>
        <Center w="100%" h="220px">
          <Title2 pos="absolute">$181</Title2>
          <TotalReturnChart />
        </Center>
        <Flex justifyContent="space-between" pos="relative" top="-65px" px={4}>
          <Box
            top={-6}
            p={4}
            w="fit-content"
            textAlign="left"
            boxShadow="base"
            borderRadius="2xl"
            background="inherit"
            position="relative"
            flexDirection="column"
          >
            <Subhead>CAPITAL GAINS</Subhead>
            <Subhead fontWeight="bold">$78k</Subhead>
          </Box>
          <Box
            p={4}
            w="fit-content"
            textAlign="left"
            boxShadow="base"
            borderRadius="2xl"
            background="inherit"
            position="relative"
            flexDirection="column"
          >
            <Subhead m="0">RETURN OF CAPITAL</Subhead>
            <Subhead fontWeight="bold">$100k</Subhead>
          </Box>
        </Flex>
        <PrevBtn />
        <NextBtn nextStep="8" />
      </Box>
    ),
  },
  {
    name: '8',
    jsx: (
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <CloseBtn />
          <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
            7/7
          </Box>
        </Flex>
        <ProgressBar total={7} value={7} />
        <Title2 my={4}>Takeaways</Title2>
        <Box my={4}>
          <Flex mt={4}>
            <Box>
              <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
                <Title2>1</Title2>
              </Center>
            </Box>
            <Box pl={4}>
              <Text textStyle="Body1" fontWeight="600">
                Investor cash flow is actual cash disbursed to investors
              </Text>
              <Text mt={2} textStyle="Body2">
                It’s deposited into your bank account on a monthly basis and derived from rental
                revenue, realized appreciation, and any unused reserves.
              </Text>
            </Box>
          </Flex>
          <Flex mt={4}>
            <Box>
              <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
                <Title2>2</Title2>
              </Center>
            </Box>
            <Box pl={4}>
              <Text textStyle="Body1" fontWeight="600">
                It comes from two main sources
              </Text>
              <Text mt={2} textStyle="Body2">
                <span style={{ fontWeight: 600 }}>Rental revenue:</span> which typically creates
                smooth and consistent cash flow (increasing a bit each year).
              </Text>
              <Text mt={2} textStyle="Body2">
                <span style={{ fontWeight: 600 }}>Realized appreciation:</span> which typically
                generally spiky cash flow (larger distributions about one time every 5 years from
                refinancing/construction earn-out or the sale of the property)
              </Text>
            </Box>
          </Flex>
          <Flex mt={4}>
            <Box>
              <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
                <Title2>3</Title2>
              </Center>
            </Box>
            <Box pl={4}>
              <Text textStyle="Body1" fontWeight="600">
                It is extremely tax-efficient
              </Text>
              <Text mt={2} textStyle="Body2">
                Thanks to depreciation; most isn’t taxed at the income tax rate, but is instead
                deferred to capital gains (a much lower tax rate).
              </Text>
            </Box>
          </Flex>
        </Box>
        <PrevBtn />
        <NextBtn finishBtn={true} />
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
          <Title2 textAlign="center">Well done! Investor Cash Flow lesson completed!</Title2>
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

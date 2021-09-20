import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Box, Button, Center, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { ProgressBar, Circle } from '../../../../../components';
import { Title2 } from '../../../../../components/text';
import { Chart1, Chart2, Chart3 } from '../charts';
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
      onClick={() => history.push('/academy/unit/realizing-appreciation-without-selling/2')}
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
      borderRadius={finishBtn === false ? 'full' : '2xl'}
      onClick={() =>
        history.push(`/academy/unit/realizing-appreciation-without-selling/${nextStep}`)
      }
    >
      {finishBtn ? 'Finish' : <Icon as={FiChevronRight} />}
    </Button>
  );
};

const PrevBtn = ({ background = true }: { background?: boolean }) => {
  const history = useHistory();

  return background ? (
    <Button borderRadius="full" colorScheme="white" w={10} h={10} onClick={() => history.goBack()}>
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

export const Data = [
  {
    name: '1',
    jsx: (
      <Box h="100%">
        <CloseBtn />
        <Center flexDirection="column" textAlign="center" h="100%">
          <Image src={Frame} alt="frame" />
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
            1/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={1} />
        <Title2 my={4}>Top line</Title2>
        <Text textStyle="Body1" fontWeight="500">
          Appreciation is an increase in the value of an asset (the property) over time. Many people
          think you need to sell a property to realize its appreciation — but you don't!
        </Text>
        <Text textStyle="Body1" fontWeight="500">
          Instead, you can benefit from an increase in property value while remaining a property
          owner with all of your initial equity. Coral facilitates this through refinancing or
          construction earn-outs.
        </Text>
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
            2/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={2} />
        <Title2 my={4}>How it works</Title2>
        <Text textStyle="Body1" fontWeight="500">
          We ask our lender to recognize the increase in property value, and increase our loan
          balance accordingly. We can then distribute all or part of the incremental loan amount to
          the property owners. This puts some of the appreciation in your pocket rather than on a
          hypothetical balance sheet.
        </Text>

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
            3/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={3} />
        <Title2 my={4}>A hypothetical example</Title2>
        <Text textStyle="Body1" fontWeight="500">
          We purchase a property for $1M with a $650K loan (65% LTV) on behalf of a group of
          property owners (like yourselves!) Now, the property increases in value to $1.5M.
        </Text>
        <Center w="100%" h={250}>
          <Chart1 />
        </Center>
        <Flex justifyContent="space-between" px={2} mb={4} mt={-6}>
          <Flex alignItems="center">
            <Circle color="teal" />
            <Text textStyle="Body2">Loan(debt)</Text>
          </Flex>
          <Flex alignItems="center">
            <Circle color="green" />
            <Text textStyle="Body2">Equity</Text>
          </Flex>
        </Flex>
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
            4/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={4} />
        <Text textStyle="Body1" fontWeight="500">
          We ask the bank to recognize a higher appraisal value of the property and preserve our
          original LTV (loan to value ratio) of 65%. This brings our loan balance up to $975K (65%
          of 1.5M). The difference of $325K ($975K-$650K) can be returned to the property owners.
        </Text>
        <Center w="100%" h={250}>
          <Chart2 />
        </Center>
        <Flex justifyContent="space-between" px={2} mb={4} mt={-6}>
          <Flex alignItems="center">
            <Circle color="teal" />
            <Text textStyle="Body2">Debt</Text>
          </Flex>
          <Flex alignItems="center">
            <Circle color="green" />
            <Text textStyle="Body2">Equity</Text>
          </Flex>
          <Flex alignItems="center">
            <Circle color="orange" />
            <Text textStyle="Body2">Cash to all</Text>
          </Flex>
        </Flex>
        <Center w="100%" h={250}>
          <Chart3 />
        </Center>
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
            5/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={5} />
        <Text textStyle="Body1" fontWeight="500">
          The property owners now have $325K in cash. Remember: they only put $350K into the
          property at closing, so they're already received the majority of their investment back —
          and they still own the property! Further, the value of their equity is now $525K.
        </Text>
        <Center w="100%" h={250}>
          <Chart3 />
        </Center>
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
            6/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={6} />
        <Text textStyle="Body1" fontWeight="500">
          To recap, the owners now have $325k in cash (from realized appreciation), $25k of capital
          contributions still in the property, and $500k in unrealized capital gains. Plus any
          rental income that has been earned along the way. All from the original $350k investment.
        </Text>
        <Text textStyle="Body1" fontWeight="500">
          $325,000 + $525k + Operating cashflow (via Rental Income)
        </Text>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="8" />
        </BtnsWrapper>
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
            7/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={7} />
        <Title2 my={4}>Two Ways</Title2>
        <Text textStyle="Body1" fontWeight="500">
          There are a couple of ways we can do this: construction earn-outs and cash-out
          refinancing. A construction earn out is structured within the initial loan (no additional
          fees, same terms), whereas cash-out refinancing is a net new loan that replaces the
          previous loan (fees apply and terms may differ).
        </Text>

        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="9" />
        </BtnsWrapper>
      </Box>
    ),
  },
  {
    name: '9',
    jsx: (
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <CloseBtn />
          <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
            8/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={8} />
        <Title2 my={4}>(1) Construction earn-out</Title2>
        <Text textStyle="Body1" fontWeight="500">
          When we renovate a property, we are "forcing" appreciation. A better property can command
          higher rent prices, and as a result, the property itself is worth more money. With
          construction earn-out, we typically align on a post-renovation property value with our
          lender prior to even beginning construction, and then "call" the incremental loan dollars
          once we have completed the renovations.
        </Text>

        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="10" />
        </BtnsWrapper>
      </Box>
    ),
  },
  {
    name: '10',
    jsx: (
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <CloseBtn />
          <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
            9/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={9} />
        <Title2 my={4}>(2) Cash-out refinancing</Title2>
        <Text textStyle="Body1" fontWeight="500">
          Over time, in the right markets, we can expect the value of our properties to continue to
          rise — time-based appreciation. In the markets we operate, over ~5 years the increased
          valuation is meaningful, and makes the costs of the refinancing highly justifiable. In
          this scenario, we ask our lender for a new appraisal — and a new loan based on the new
          appraisal.
        </Text>

        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="11" />
        </BtnsWrapper>
      </Box>
    ),
  },
  {
    name: '11',
    jsx: (
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <CloseBtn />
          <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
            10/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={10} />
        <Title2 my={4}>How often do we do it?</Title2>
        <Text textStyle="Body1" fontWeight="500">
          We typically get a construction earn-out after a meaningful renovation, and refinance
          every ~5 years. These events, along with the sale of the property, create "spikes" in cash
          flow (layered on top of the cash flow from rental revenue).
        </Text>
        <Text textStyle="Body1" fontWeight="500">
          There are costs associated with refinancing. As a result, refinancing too frequently has
          the potential to negatively impact overall returns.
        </Text>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="12" />
        </BtnsWrapper>
      </Box>
    ),
  },
  {
    name: '12',
    jsx: (
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <CloseBtn />
          <Box layerStyle="selectionBox" borderRadius="full" px={4} py={1}>
            11/11
          </Box>
        </Flex>
        <ProgressBar total={11} value={11} />
        <Title2 my={4}>Takeaways</Title2>
        <Flex mt={4}>
          <Box>
            <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
              <Title2>1</Title2>
            </Center>
          </Box>
          <Box pl={4}>
            <Text textStyle="Body2">
              You do not have to sell a property to benefit from some of its appreciation.
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
            <Text textStyle="Body2">
              Through construction earn outs and refinancing, lenders can recognize a higher
              property valuation and increase the corresponding loan amount accordingly. The
              incremental loan amount can be distributed to property owners.
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
            <Text textStyle="Body2">
              3. Coral generally maintains the same LTV (loan to value) ratio through a refinancing
              or a construction earn-out — which means that your equity position also increases in
              value.
            </Text>
          </Box>
        </Flex>
        <Flex mt={4}>
          <Box>
            <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
              <Title2>4</Title2>
            </Center>
          </Box>
          <Box pl={4}>
            <Text textStyle="Body2">
              There are costs associated with refinancing, which is why Coral refinances every ~5
              years rather than more frequently.
            </Text>
          </Box>
        </Flex>
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
            Well done! Realizing Appreciation Without Selling lesson completed!
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

import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { FaLightbulb } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Text,
  Link,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { ProgressBar } from '../../../../../components';
import { Title2 } from '../../../../../components/text';
import { Table } from '../table';
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
      onClick={() => history.push('/academy/unit/financing-with-commercial-loans/2')}
    >
      Let's get started
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
      onClick={() => history.push(`/academy/unit/financing-with-commercial-loans/${nextStep}`)}
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
          <Title2 my={4}>Leverage and Commercial Loans</Title2>
          <Text textStyle="Body1">
            One unique benefit of real estate is the ability to use leverage to amplify your
            returns. It multiplies buying power and can, as a result, amplify your returns.
          </Text>
          <Text textStyle="Body1">
            Multifamily properties typically require commercial loans. These are similar, but a bit
            different from your traditional mortgage.
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
            1/11
          </Box>
        </Flex>
        <ProgressBar total={9} value={1} />
        <Title2 my={4}>When leverage works</Title2>
        <Text textStyle="Body1" fontWeight="500">
          The key to a successful multiplier effect in leverage is that the{' '}
          <Link fontWeight={600} href="#">
            interest rate is lower than the annualized rate of return
          </Link>
          . Put differently: borrow money at a rate that is lower than the returns you can generate
          with that money — and leverage will amplify your returns.
        </Text>
        <Text my={4} textStyle="Body1" fontWeight="500">
          Managing through this, in reality, is more nuanced. We'll come back to that.
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
        <ProgressBar total={9} value={2} />
        <Title2 my={4}>Loan to Value (LTV)</Title2>
        <Text textStyle="Body1" fontWeight="500">
          At Coral, we tend to borrow about 65% of the purchase price (or asset value) from the
          bank. If a property is $1M, then we would typically borrow $650K from the bank on behalf
          of the LLC (with the remainder being owner equity).
        </Text>
        <VStack my={6}>
          <HStack w="100%" justifyContent="space-between" spacing={4}>
            <HStack spacing={4}>
              <Text fontWeight="bold">Loan amount /</Text>
              <Text fontWeight="bold">Property Value</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" mr={4}>
                =
              </Text>
              <Text fontWeight="bold">LTV</Text>
            </HStack>
          </HStack>
          <HStack w="100%" justifyContent="space-between" spacing={4}>
            <HStack spacing={6}>
              <Text>e.g. $650,000</Text>
              <Text>e.g. $1,000,000.</Text>
            </HStack>
            <Text ml="auto">e.g. 0.65 (or 65%)</Text>
          </HStack>
        </VStack>
        <Box layerStyle="card" p={4} my={8} borderRadius="2xl">
          <Flex>
            <Center h={6} mr={4}>
              <Icon as={FaLightbulb} />
            </Center>
            <Text>
              <span style={{ fontWeight: 600 }}>Loan to Value</span> (LTV) tells you the amount of
              money being borrowed (loan amount) as a percentage of the value of the property.
            </Text>
          </Flex>
        </Box>
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
        <ProgressBar total={9} value={3} />
        <Title2 my={4}>Interest Rate</Title2>
        <Text>
          The <span style={{ fontWeight: 600 }}>Interest Rate</span> of the loan is the ongoing
          (annual) cost of borrowing the $650K, paid to the lender. An interest rate can be a fixed
          rate (the same every year) or a floating rate (moves up or down with an index). Floating
          rates may have a floor (lowest rate) and a cap (highest rate).
        </Text>
        <Text my={4}>
          While interest rates change over time, Coral has established strategic partnerships with a
          number of local banks that charge us competitive interest rates. The interest rate varies
          depending on the loan term — and most commercial loans (including the ones Coral obtains)
          are 5-10 years.
        </Text>
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
        <ProgressBar total={9} value={4} />
        <Title2 my={4}>Leverage in action</Title2>
        <Text>
          For a $1M property with a 4.5% cap rate and 3% per year conservative price appreciation
          expectation, the annual returns consist of: $45K generated from rental income (the 4.5%
          cap rate on a $1M property) and $30k in unrealized appreciation.{' '}
          <span style={{ fontWeight: 600 }}>Your unlevered return is 7.5%.</span>
        </Text>
        <Text my={4}>
          When borrowing $650K at 3.5% interest rate, the interest payment is $650K x 3.5% =
          $22.75K. When subtracted from your annual returns (above) of $75k, you're left with a net
          total return of $52,250. Since your investment was only $350k,{' '}
          <span style={{ fontWeight: 600 }}>your leveraged return is 14.9%.</span>
        </Text>
        <Text fontWeight={600}>Leverage amplifies your returns.</Text>
        <Table />
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
        <ProgressBar total={9} value={5} />
        <Title2 my={4}>Managing cashflow</Title2>
        <Text textStyle="Body1" fontWeight="500">
          Managing cashflow with leverage is critical. Loan payments (principal and interest) are
          due each month. Meanwhile, returns from real estate (derived from rental income and
          appreciation) may fluctuate.
        </Text>
        <Text textStyle="Body1" my={4} fontWeight="500">
          There are different options to manage cashflow while using leverage: (1) reserve cash to
          cover any differential between realized returns and loan payments (2) use less leverage
          (less LTV) to ensure that the loan payments is substantially lower than the realized
          returns or (3) use a hybrid approach between 1 and 2.
        </Text>
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
        <ProgressBar total={9} value={6} />
        <Title2 my={4}>Loan payments</Title2>
        <Text textStyle="Body1" fontWeight="500">
          To manage cashflow, you have to have a good grasp on your loan payments.
        </Text>
        <Text my={4} fontWeight="500">
          Each monthly loan payment is part
        </Text>
        <Flex mt={4}>
          <Box>
            <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
              <Title2>1</Title2>
            </Center>
          </Box>
          <Box pl={4}>
            <Text>
              <span style={{ fontWeight: 600 }}>Interest Payment</span>, which is: (your interest
              rate x your loan outstanding) and part
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
            <Text>
              <span style={{ fontWeight: 600 }}>Principal Repayment</span>, which helps to amortize
              (reduce) the loan. After every payment, you loan amount is reduced, therefore your
              interest payment is slightly lower than the previous one.
            </Text>
          </Box>
        </Flex>
        <Box layerStyle="card" p={4} my={8} borderRadius="2xl">
          <Flex>
            <Center h={6} mr={4}>
              <Icon as={FaLightbulb} />
            </Center>
            <Text>
              <span style={{ fontWeight: 600 }}>Amortization</span> tells you how fast a loan is
              expected to be paid down. If the loan terms specify a 30 year amortization, that means
              it would take 30 years to pay off the loan completely in equal installments.
            </Text>
          </Flex>
        </Box>
        <Text>
          tells you how fast a loan is expected to be paid down. If the loan terms specify a 30 year
          amortization, that means it would take 30 years to pay off the loan completely in equal
          installments.
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
        <ProgressBar total={9} value={7} />
        <Title2 my={4}>Recourse and Non-recourse</Title2>
        <Text textStyle="Body1" fontWeight="500">
          There are two types of debt: <span style={{ fontWeight: 600 }}>recourse</span> and{' '}
          <span style={{ fontWeight: 600 }}>non-recourse</span>. A recourse holds the borrower
          personally liable.{' '}
          <span style={{ fontWeight: 600 }}>
            Owners of Coral properties will never be asked to take on any personal liability for
            loans.
          </span>
        </Text>
        <Text textStyle="Body1" fontWeight="500" my={4}>
          Coral seeks out non-recourse loans, and the loan belongs to the LLC. These loans typically
          have something called a "Bad boy" carve-out: an exceptions (carve-outs) that result in
          full-recourse liability when bad-boy behaviors exist (e.g. fraud, gross-negligence or
          criminal acts, etc). This carve-out is very common in commercial real estate loans, and
          Coral is on the hook for this "Bad-boy" carve-out.
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
        <ProgressBar total={9} value={8} />
        <Title2 my={4}>Risks of leverage</Title2>
        <Text textStyle="Body1" fontWeight="500">
          It is often said in finance that leverage is a double-edged sword. While it amplifies the
          investment's return, it will work against you the same way in the event that the property
          value decreases or your rental yield decreases.
        </Text>
        <Text textStyle="Body1" fontWeight="500" my={4}>
          At Coral, we aim to mitigate that risk by (1) buying and owning the least risky properties
          in well established markets with stable tenancy (2) using a principal reserve (in escrow)
          to satisfy the amortization needs of the mortgage.
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
            11/11
          </Box>
        </Flex>
        <ProgressBar total={9} value={9} />
        <Title2 my={4}>Takeaways</Title2>
        <Flex mt={4}>
          <Box>
            <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
              <Title2>1</Title2>
            </Center>
          </Box>
          <Box pl={4}>
            <Text textStyle="Body2">
              Leverage multiplies your buying power and can, as a result, amplify your returns.
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
              As a general rule of thumb, the key to successful multiplier effect in leverage is
              that{' '}
              <Link href="#" fontWeight={600}>
                the interest rate is lower than the annualized rate of return.
              </Link>{' '}
              Successful cashflow management is equally critical to manage risk.
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
              Multifamily properties require commercial loans. Similar to traditional loans, loan
              payments are due each month, and consist of both interest payment and principal
              repayment. Coral obtains loans on behalf of the LLC, and{' '}
              <span style={{ fontWeight: 600 }}>property owners have no personal liability.</span>
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
              A conservative way to manage the leverage is to use reasonable leverage while setting
              aside a reserve for the principal repayments in extreme adverse situations. At Coral,
              we typically purchase a property at 65% LTV while simultaneously reserving for 5 years
              of principal repayment in an interest bearing account.
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
            Well done! Financing With Commercial Loans lesson completed!
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

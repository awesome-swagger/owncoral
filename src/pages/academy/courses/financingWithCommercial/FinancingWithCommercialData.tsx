import { FaLightbulb } from 'react-icons/fa';
import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import {
  CloseBtn,
  FlowStartBtn,
  FlowEndBtn,
  NextBtn,
  PrevBtn,
  SlideContainer,
} from '../components';
import { ProgressBar, SlideShow } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { Table, UnleveredTable } from './table';
import Academy from '../../../../assets/academy-1.svg';
import Frame from '../../../../assets/Frame615.png';

const BtnsWrapper = ({ children }: { children: React.ReactNode }) => (
  <Flex
    mt={4}
    justifyContent="space-between"
    w={{ base: 'calc(100% - 3rem)', md: '100%' }}
    pos={{ base: 'fixed', md: 'relative' }}
    bottom={{ base: 20, md: 0 }}
    children={children}
  />
);

export const Data = [
  {
    name: '1',
    jsx: (
      <SlideContainer>
        <Box>
          <CloseBtn />
          <Center flexDirection="column" textAlign="center" h="100%">
            <Image src={Frame} alt="frame" />
            <Title2 my={4}>Leverage and Commercial Loans</Title2>
            <Text textStyle="Body1">
              One unique benefit of real estate is the ability to use leverage to amplify your
              returns. It multiplies buying power and can, as a result, amplify your returns.
            </Text>
            <Text textStyle="Body1" my={4}>
              Multifamily properties typically require commercial loans. These are similar, but a
              bit different from your traditional mortgage.
            </Text>
          </Center>
        </Box>
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
            <SlideShow>1/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={1} />
          <Title2 my={4}>When leverage works</Title2>
          <Text textStyle="Body1" fontWeight="500">
            The key to a successful multiplier effect in leverage is that the{' '}
            <Link fontWeight={600} href="#">
              interest rate is lower than the annualized rate of return
            </Link>
            . Put differently: borrow money at a rate that is lower than the returns you can
            generate with that money — and leverage will amplify your returns.
          </Text>
          <Text my={4} textStyle="Body1" fontWeight="500">
            Managing through this, in reality, is more nuanced. We&apos;ll come back to that.
          </Text>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="3" />
        </BtnsWrapper>
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
            <SlideShow>2/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={2} />
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
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="4" />
        </BtnsWrapper>
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
            <SlideShow>3/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={3} />
          <Title2 my={4}>Interest Rate</Title2>
          <Text>
            The <span style={{ fontWeight: 600 }}>Interest Rate</span> of the loan is the ongoing
            (annual) cost of borrowing the $650K, paid to the lender.
          </Text>
          <Text my={4}>
            An interest rate can be a fixed rate (the same every year) or a floating rate (moves up
            or down with an index). Floating rates may have a floor (lowest rate) and a cap (highest
            rate).
          </Text>
          <Text my={4}>
            While interest rates change over time, Coral has established strategic partnerships with
            a number of local banks that charge us competitive interest rates. The interest rate
            varies depending on the loan term — and most commercial loans (including the ones Coral
            obtains) are 5-10 years.
          </Text>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="5" />
        </BtnsWrapper>
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
            <SlideShow>4/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={4} />
          <Title2 my={4}>Leverage in action</Title2>
          <Text>
            For a $1M property with a 4.5% cap rate and 3% per year conservative price appreciation
            expectation, the annual returns consist of: $45K generated from rental income (the 4.5%
            cap rate on a $1M property) and $30k in unrealized appreciation.{' '}
            <span style={{ fontWeight: 600 }}>Your unlevered return is 7.5%.</span>
          </Text>
          <UnleveredTable />
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="6" />
        </BtnsWrapper>
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
            <SlideShow>5/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={5} />
          <Title2 my={4}>Leverage in action</Title2>
          <Text my={4}>
            When borrowing $650K at 3.5% interest rate, the interest payment is $650K x 3.5% =
            $22.75K. When subtracted from your annual returns (above) of $75k, you&apos;re left with
            a net total return of $52,250. Since your investment was only $350k,{' '}
            <span style={{ fontWeight: 600 }}>your levered return is 14.9%.</span>
          </Text>
          <Text fontWeight={600}>Leverage amplifies your returns.</Text>
          <Table />
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="7" />
        </BtnsWrapper>
      </SlideContainer>
    ),
  },
  {
    name: '7',
    jsx: (
      <SlideContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <SlideShow>6/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={6} />
          <Title2 my={4}>Managing cash flow</Title2>
          <Text textStyle="Body1" fontWeight="500">
            Managing cash flow with leverage is critical. Loan payments (principal and interest) are
            due each month. Meanwhile, returns from real estate (derived from rental income and
            appreciation) may fluctuate.
          </Text>
          <Text textStyle="Body1" my={4} fontWeight="500">
            There are different options to manage cash flow while using leverage:
          </Text>
          <UnorderedList>
            <ListItem>
              <Text textStyle="Body1" fontWeight="500">
                reserve cash to cover any differential between realized returns and loan payments
              </Text>
            </ListItem>
            <ListItem>
              <Text textStyle="Body1" fontWeight="500">
                use less leverage (lower LTV) to ensure the loan payment is lower than realized
                returns at any given time
              </Text>
            </ListItem>
            <ListItem>
              <Text textStyle="Body1" fontWeight="500">
                use a hybrid approach
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="8" />
        </BtnsWrapper>
      </SlideContainer>
    ),
  },
  {
    name: '8',
    jsx: (
      <SlideContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <SlideShow>7/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={7} />
          <Title2 my={4}>Loan payments</Title2>
          <Text textStyle="Body1" fontWeight="500">
            To manage cash flow, you have to have a good grasp on your loan payments.
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
                <span style={{ fontWeight: 600 }}>Principal Repayment</span>, which helps to
                amortize (reduce) the loan. After every payment, you loan amount is reduced,
                therefore your interest payment is slightly lower than the previous one.
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
                expected to be paid down. If the loan terms specify a 30 year amortization, that
                means it would take 30 years to pay off the loan completely in equal installments.
              </Text>
            </Flex>
          </Box>
          <Text>
            tells you how fast a loan is expected to be paid down. If the loan terms specify a 30
            year amortization, that means it would take 30 years to pay off the loan completely in
            equal installments.
          </Text>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="9" />
        </BtnsWrapper>
      </SlideContainer>
    ),
  },
  {
    name: '9',
    jsx: (
      <SlideContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <SlideShow>8/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={8} />
          <Title2 my={4}>Recourse and Non-recourse</Title2>
          <Text textStyle="Body1" fontWeight="500">
            There are two types of debt:{' '}
            <span style={{ fontWeight: 600 }}>recourse and non-recourse</span>. With a non-recourse
            loan, a lender can seize the loan collateral, but in contrast to a recourse loan, the
            lender cannot go after the borrower's other assets.
          </Text>
          <Text textStyle="Body1" fontWeight="500" my={4}>
            With Coral, the loan belongs to the property LLC. When you acquire fractional ownership
            through Coral{' '}
            <span style={{ fontWeight: 600 }}>
              you are not required to take on any personal liability for loans.
            </span>
          </Text>
          <Text textStyle="Body1" fontWeight="500" my={4}>
            Coral seeks out non-recourse loans. These loans typically have something calls a "bad
            boy carve-out." This is common in commercial real estate and defines exceptions that
            result in full-recourse liability when bad-boy behaviors exist (e.g., fraud, gross
            negligence or criminal acts). Coral is on the hook for this "bad-boy carve-out."
          </Text>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="10" />
        </BtnsWrapper>
      </SlideContainer>
    ),
  },
  {
    name: '10',
    jsx: (
      <SlideContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <SlideShow>9/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={9} />
          <Title2 my={4}>Risks of leverage</Title2>
          <Text textStyle="Body1" fontWeight="500">
            It is often said in finance that leverage is a double-edged sword. While it amplifies
            the investment&apos;s return, it will work against you the same way in the event that
            the property value decreases or your rental yield decreases.
          </Text>
          <Text textStyle="Body1" fontWeight="500" my={4}>
            At Coral, we aim to mitigate that risk by (1) buying and owning the least risky
            properties in well established markets with stable tenancy (2) using a principal reserve
            (in escrow) to satisfy the amortization needs of the mortgage.
          </Text>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn nextStep="11" />
        </BtnsWrapper>
      </SlideContainer>
    ),
  },
  {
    name: '11',
    jsx: (
      <SlideContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <SlideShow>10/10</SlideShow>
          </Flex>
          <ProgressBar total={10} value={10} />
          <Title2 my={4}>Takeaways</Title2>
          <Flex mt={4}>
            <Box>
              <Center w={8} h={8} borderRadius="full" layerStyle="selectionBox">
                <Title2>1</Title2>
              </Center>
            </Box>
            <Box pl={4}>
              <Text textStyle="Body2">
                Leverage multiplies your buying power and can, as a result, amplify your returns. As
                a general rule of thumb, the key to a successful multiplier effect in leverage is
                that the interest rate is lower than the annualized rate of return.
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
                Multifamily properties tend to require commercial loans. Coral obtains loans on
                behalf of the LLC, and property owners have no personal liability.
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
                The importance of cash flow management cannot be overstated. At Coral, we typically
                purchase each property with 65% LTV while simultaneously reserving five years of
                principal repayment. This reserve is a cash flow management tool and serves as
                protection in adverse situations.
              </Text>
            </Box>
          </Flex>
        </Box>
        <BtnsWrapper>
          <PrevBtn />
          <NextBtn finishBtn={true} />
        </BtnsWrapper>
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
            Well done! Financing With Commercial Loans lesson completed!
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

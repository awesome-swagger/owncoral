import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { Circle, ProgressBar, SlideShow } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { Chart1, Chart2, Chart3 } from './charts';
import {
  CloseBtn,
  FlowStartBtn,
  FlowEndBtn,
  PrevBtn,
  SlideContainer,
  BtnsWrapper,
} from '../components';

import Academy from '../../../../assets/academy-1.svg';
import Frame from '../../../../assets/Frame615.png';

export const Data = [
  {
    name: '1',
    jsx: (
      <SlideContainer>
        <Box w="100%">
          <CloseBtn />
        </Box>
        <Center flexDirection="column" textAlign="center" h="100%">
          <Image src={Frame} alt="frame" />
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
            <SlideShow>1/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={1} />
          <Title2 my={4}>Top line</Title2>
          <Text textStyle="Body1" fontWeight="500">
            Appreciation is an increase in the value of an asset (the property) over time. Many
            people think you need to sell a property to realize its appreciation — but you
            don&apos;t!
          </Text>
          <Text textStyle="Body1" fontWeight="500">
            Instead, you can benefit from an increase in property value while remaining a property
            owner with all of your initial equity. Coral facilitates this through refinancing or
            construction earn-outs.
          </Text>
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
            <SlideShow>2/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={2} />
          <Title2 my={4}>How it works</Title2>
          <Text textStyle="Body1" fontWeight="500">
            We ask our lender to recognize the increase in property value, and increase our loan
            balance accordingly. We can then distribute all or part of the incremental loan amount
            to the property owners. This puts some of the appreciation in your pocket rather than on
            a hypothetical balance sheet.
          </Text>
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
            <SlideShow>3/11</SlideShow>
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
            <SlideShow>4/11</SlideShow>
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
            <SlideShow>5/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={5} />
          <Text textStyle="Body1" fontWeight="500">
            The property owners now have $325K in cash. Remember: they only put $350K into the
            property at closing, so they&apos;re already received the majority of their investment
            back — and they still own the property! Further, the value of their equity is now $525K.
          </Text>
          <Center w="100%" h={250}>
            <Chart3 />
          </Center>
        </Box>
        <BtnsWrapper />
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
            <SlideShow>6/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={6} />
          <Text textStyle="Body1" fontWeight="500">
            To recap, the owners now have $325k in cash (from realized appreciation), $25k of
            capital contributions still in the property, and $500k in unrealized capital gains. Plus
            any rental income that has been earned along the way. All from the original $350k
            investment.
          </Text>
          <Text textStyle="Body1" fontWeight="500">
            $325,000 + $525k + Operating cashflow (via Rental Income)
          </Text>
        </Box>
        <BtnsWrapper />
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
            <SlideShow>7/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={7} />
          <Title2 my={4}>Two Ways</Title2>
          <Text textStyle="Body1" fontWeight="500">
            There are a couple of ways we can do this: construction earn-outs and cash-out
            refinancing. A construction earn out is structured within the initial loan (no
            additional fees, same terms), whereas cash-out refinancing is a net new loan that
            replaces the previous loan (fees apply and terms may differ).
          </Text>
        </Box>
        <BtnsWrapper />
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
            <SlideShow>8/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={8} />
          <Title2 my={4}>(1) Construction earn-out</Title2>
          <Text textStyle="Body1" fontWeight="500">
            When we renovate a property, we are &ldquo;forcing&rdquo; appreciation. A better
            property can command higher rent prices, and as a result, the property itself is worth
            more money. With construction earn-out, we typically align on a post-renovation property
            value with our lender prior to even beginning construction, and then &ldquo;call&rdquo;
            the incremental loan dollars once we have completed the renovations.
          </Text>
        </Box>
        <BtnsWrapper />
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
            <SlideShow>9/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={9} />
          <Title2 my={4}>(2) Cash-out refinancing</Title2>
          <Text textStyle="Body1" fontWeight="500">
            Over time, in the right markets, we can expect the value of our properties to continue
            to rise — time-based appreciation. In the markets we operate, over ~5 years the
            increased valuation is meaningful, and makes the costs of the refinancing highly
            justifiable. In this scenario, we ask our lender for a new appraisal — and a new loan
            based on the new appraisal.
          </Text>
        </Box>
        <BtnsWrapper />
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
            <SlideShow>10/11</SlideShow>
          </Flex>
          <ProgressBar total={11} value={10} />
          <Title2 my={4}>How often do we do it?</Title2>
          <Text textStyle="Body1" fontWeight="500">
            We typically get a construction earn-out after a meaningful renovation, and refinance
            every ~5 years. These events, along with the sale of the property, create
            &ldquo;spikes&rdquo; in cash flow (layered on top of the cash flow from rental revenue).
          </Text>
          <Text textStyle="Body1" fontWeight="500">
            There are costs associated with refinancing. As a result, refinancing too frequently has
            the potential to negatively impact overall returns.
          </Text>
        </Box>
        <BtnsWrapper />
      </SlideContainer>
    ),
  },
  {
    name: '12',
    jsx: (
      <SlideContainer>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <CloseBtn />
            <SlideShow>11/11</SlideShow>
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
                3. Coral generally maintains the same LTV (loan to value) ratio through a
                refinancing or a construction earn-out — which means that your equity position also
                increases in value.
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
            Well done! Realizing Appreciation Without Selling lesson completed!
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

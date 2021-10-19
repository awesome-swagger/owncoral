import { BsGraphUp } from 'react-icons/bs';
import { HiOutlineCash } from 'react-icons/hi';
import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react';

import { Circle, ProgressBar, SlideShow } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';
import { OverAllCashChart, RealizedAppreciationChart, RentalRevenueChart } from './charts';
import {
  CloseBtn,
  FlowStartBtn,
  FlowEndBtn,
  SlideContainer,
  BtnsWrapper,
  PrevBtn,
} from '../components';

import Academy from '../../../../assets/academy-1.svg';
import ChartImg from '../../../../assets/Frame331.png';
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
          <Title2 my={4}>What is investor cash flow?</Title2>
          <Text textStyle="Body1">
            Investor cash flow is the amount of profit you bring in each month from property
            operation, and occasionally appreciation realization. It is actual cash that goes
            straight to your bank account (distributed monthly).
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
            <SlideShow>1/6</SlideShow>
          </Flex>
          <ProgressBar total={6} value={1} />
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
                  The property increases in value, and we choose to return cash to investors through
                  a higher loan balance.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box layerStyle="selectionBox" borderRadius="2xl" p={4} mt={8}>
            <Headline>Note</Headline>
            <Text textStyle="Body2">
              At the sale of the property, you&#39;ll also receive (as a part of your cash flow) any
              unused cash that had been reserved to cover specific cash outflows, such as
              maintenance and repair.
            </Text>
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
            <SlideShow>2/6</SlideShow>
          </Flex>
          <ProgressBar total={6} value={2} />
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
              <Circle color="teal" />
              <Text textStyle="Body2">Operating Cash Flow</Text>
            </Flex>
          </Flex>

          <Text textStyle="Body2">
            Cash flow derived from rental revenue typically looks pretty smooth for Coral
            properties, growing year over year as a result of renovations or general market trends
            (annual increases), or improved operational efficiencies. Occasionally, we may plan for
            vacancies so that we can renovate units.
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
            <SlideShow>3/6</SlideShow>
          </Flex>
          <ProgressBar total={6} value={3} />
          <Title2 my={4}>Realized Appreciation</Title2>
          <Text textStyle="Body1" fontWeight="500">
            The second source of cash flow is the appreciation of the property itself.
          </Text>
          <Center w="100%" h={250}>
            <RealizedAppreciationChart />
          </Center>
          <Flex justifyContent="center" mb={4} mt={-6}>
            <Flex alignItems="center">
              <Circle color="green" />
              <Text textStyle="Body2">Recognized appreciation</Text>
            </Flex>
          </Flex>
          <Text textStyle="Body2">
            Selling the property is one way to realize the gains from an increase in property value.
            Coral also realizes this appreciation by working with our lender to recognize the
            increased value of the property and increase our loan balance accordingly. This happens
            in the form of a construction earn-out (where we receive additional funds from our
            lender upon completion of construction) or refinancing (a new loan).
          </Text>
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
            <SlideShow>4/6</SlideShow>
          </Flex>
          <ProgressBar total={6} value={4} />
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
              <Circle color="teal" />
              <Text textStyle="Body2">Operating Cash Flow</Text>
            </Flex>
            <Flex alignItems="center">
              <Circle color="green" />
              <Text textStyle="Body2">Recognized appreciation</Text>
            </Flex>
          </Flex>
          <Text textStyle="Body2">
            The overall cash flow includes distributions that come from both rental revenue and
            realized appreciation, as well as any remaining reserve.
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
            <SlideShow>5/6</SlideShow>
          </Flex>
          <ProgressBar total={6} value={5} />
          <Title2 fontSize="2xl" my={4}>
            Tax efficiency
          </Title2>
          <Text textStyle="Body1" fontWeight="500">
            Real estate is extremely tax efficient, and Coral passes all these benefits to the
            investor.
          </Text>
          <Text textStyle="Body2" my={4}>
            The expenses and depreciation of the building are tax write-offs that offset the taxable
            income (from rental revenue) of the property. This means that you’ll likely pay very
            little (if any) income tax on your cash flow most years.
          </Text>
          <Image w="100%" src={ChartImg} alt="chart" />
          <Text textStyle="Body2">
            Depreciation lowers your cost basis. The difference between the sale price and the
            adjusted cost basis is considered “depreciation recapture” which (for real estate
            property) is capped at 25% tax rate. Each year, you receive a tax form (K-1) from Coral
            that breaks all of this down so there’s no guesswork.
          </Text>
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
            <SlideShow>6/6</SlideShow>
          </Flex>
          <ProgressBar total={6} value={6} />
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
                  Depreciation offsets your cash flow, resulting in most taxes being deferred to the
                  point of sale (and often paid at a lower rate - a max of 25%).
                </Text>
              </Box>
            </Flex>
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
          <Title2 textAlign="center">Well done! Investor Cash Flow lesson completed!</Title2>
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

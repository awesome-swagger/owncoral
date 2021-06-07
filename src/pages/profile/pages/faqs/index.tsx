import type React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';

// Source: https://docs.google.com/spreadsheets/d/1w7acu5FjTN3Sxs_kEoN0mZEjIDHr20ZY-vbqWZb4C_s/edit#gid=313667754

// TODO: switch to using markdown:
//   https://github.com/remarkjs/react-markdown
export const Faq = ({ goBack }: { goBack: () => void }) => {
  const dividerColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <Box>
      <BackBtn handleClick={goBack} />
      <Title2 my={4}>FAQ</Title2>
      <Box borderRadius="2xl" overflow="hidden">
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                Who can invest with Coral?
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                To own properties through Coral, you must be a U.S. resident (or foreign resident
                with a U.S. tax ID), over the age of 18, who qualifies as an{' '}
                <b>accredited investor</b>.
              </Text>
              <br />
              <Text textStyle="BodyText1">
                You generally qualify as an accredited investor{' '}
                <u>if any of the following are true</u>:
              </Text>
              <br />
              <UnorderedList fontWeight="600">
                <ListItem>Annual income greater than $200k (for the last 2 years)</ListItem>
                <ListItem>
                  Joint household income greater than $300k (for the last 2 years)
                </ListItem>
                <ListItem>Net worth greater than $1M (excluding your primary residence)</ListItem>
              </UnorderedList>
              <br />
              For a complete definition of &quot;accredited investor&quot; and related criteria,{' '}
              <Link
                href="https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=8edfd12967d69c024485029d968ee737&r=SECTION&n=17y3.0.1.1.12.0.46.176" // editorconfig-checker-disable-line
                isExternal
              >
                click here
              </Link>
              .
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                How does a Coral investment work?
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                Select a Coral property, choose how many shares you want to own, and acquire
                fractional ownership of the property through a property-specific LLC. Coral obtains
                a bank mortgage (typically ~65% of the purchase price) to provide leverage.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                Once your transaction is complete and the property is acquired, you receive any
                monthly distributions of pro-rata net rental income (rents minus fees, expenses and
                additional reserve allocations) generated by the property, plus potential tax
                benefits normally associated with direct property ownership, such as appreciation,
                depreciation and expense write-offs.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                Coral handles operational responsibilities of the property, and keeps you in the
                loop every step of the way. Coral ensures that any planned renovations get done, and
                that the property is well managed. Coral helps owners &ldquo;realize
                appreciation&rdquo; when the property rises in value. When you want to sell your
                allocation, we help with that too.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                Coral handles operational responsibilities of the property, and keeps you in the
                loop every step of the way. Coral ensures that any planned renovations get done, and
                that the property is well managed. Coral will manage any construction earn-outs or
                refinancing &mdash; ensuring that you&apos;re able to &quot;realize
                appreciation&quot; when the property rises in value. When you want to sell your
                allocation, we&apos;ll help with that too.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                What is the share price of a property?
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                Each property has a total of 100 shares, meaning that each share represents 1%
                ownership. This share price is the minimum investment amount, and it varies per
                property.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                The share price of any given property is simply 1/100th of the Total Property List
                Price minus the loan value. The total property list price includes: (1) the purchase
                price of the property, including closing costs (2) the budget for planned
                renovations intended to force appreciation of the property, (3) an initial reserve
                equal to 5% of the property price that is intended to help cover expenses associated
                with the principal repayment of the mortgage, and any necessary maintenance and
                repair of the property (4) an acquisition fee of 2% of the purchase price paid to
                Coral.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                <i>
                  Note: ownership in earlier properties is based simply on investment amount rather
                  than a &quot;share price.&quot;
                </i>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                How do I earn returns on my Coral investment?{' '}
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                Through Coral, you have (fractional) direct ownership of a property. As a result,
                your returns can be generated through both recurring income (from rentals), and
                potential capital appreciation of the properties themselves.
              </Text>
              <br />
              <Text textStyle="BodyText1">
                <b>Income</b>: As a fractional owner, you are entitled to your pro-rata portion of
                any operating cash flow, distributed on a monthly basis. This distribution is paid
                out as &ldquo;return of capital&rdquo; until your initial investment is repaid.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                <b>Capital Appreciation</b>: If and when Coral refinances or sells the property, you
                can expect to receive the return of your initial capital (the value of your initial
                investment paid back) as well as any pro-rata capital gains.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                What is the Share Price of a property?{' '}
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                Each property has a total of 100 shares, so each share represents 1% ownership.
              </Text>
              <br />

              <Text textStyle="BodyText1">
                The share price of any given property is simply 1/100th of the{' '}
                <b>Total Property List Price</b> minus the loan value*. The total property list
                price* includes:
              </Text>
              <br />

              <OrderedList>
                <ListItem>
                  the purchase price of the property itself, including closing costs{' '}
                </ListItem>
                <ListItem>
                  the budget for planned renovations intended to force appreciation of the property
                </ListItem>
                <ListItem>
                  and an initial reserve equal to 1% to 3% of the home price in cash to establish a
                  reserve that is intended to help cover expenses associated with the home and{' '}
                </ListItem>
                <ListItem>an acquisition fee of 2% of the purchase price paid to Coral.</ListItem>
              </OrderedList>
              <br />

              <Text textStyle="BodyText1">
                <i>
                  Note: ownership in earlier properties is based simply on investment amount rather
                  than a &ldquo;share price.&rdquo;
                </i>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                How do I know Coral is making property management decision that are in my best
                interest?
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                Coral co-invests alongside other property owners for 10% ownership of each property.
                We pay the same price per share as other owners who purchase the same property at
                the same time. As a result, Coral has a vested interest in the financial success of
                each property and has aligned interests with the other investors in the property.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                What is the investment term, or, when can I expect to get my money back?
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                Coral investments are intended to be long-term investments, but Coral provides a
                secondary market that allows our owners to sell their shares whenever they want. In
                the event that you cannot find a buyer on Coral&apos;s secondary market, the LLC
                agreement stipulates that every fifth anniversary, the property will be listed to be
                sold and the proceeds will be distributed to every owner pro-rata.
              </Text>
              <br />
              <Text textStyle="BodyText1">
                Coral investments are intended to be long-term investments, but in the event that
                you want to sell your shares, Coral will help find a buyer through our platform. In
                the event that we cannot find you a buyer, you can exercise your right to liquidity
                at the fifth anniversary. At each fifth anniversary, if any owner wants to sell and
                there is no willing buyer, the property will be listed for sale and the proceeds of
                the sale will be distributed to each owner pro rata.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Box bg={dividerColor} p=".3px" />
          <AccordionItem>
            <AccordionButton>
              <Headline py={2} align="left">
                Will I ever be required to contribute additional capital to a property I invest?
              </Headline>
              <AccordionIcon ml="auto" />
            </AccordionButton>
            <AccordionPanel pt={4}>
              <Text textStyle="BodyText1">
                No, investors will never be required to contribute additional capital to a property
                they&apos;ve invested in. When Coral acquires a new property, the acquisition price
                includes any intended renovations and a small reserve for necessary repairs (e.g. a
                water heater breaks, the roof needs repairs). There will be no incremental capital
                calls.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

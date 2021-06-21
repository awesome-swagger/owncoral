import type React from 'react';
import { Fragment } from 'react';
import { Box, ListItem, Text,UnorderedList } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';

// Source: https://www.notion.so/coralmoney/Coral-s-fees-f525884af90a46379a0fde551b69ef87

const Sb: React.FC = (props) => <span style={{ fontWeight: 600 }}>{props.children}</span>;

export const Fees = ({ goBack }: { goBack: () => void }) => (
  <Fragment>
    <BackBtn handleClick={goBack} pos="absolute" />
    <Title2 mt={2} mb={4} align="center">
      Fees
    </Title2>
    <Box h={2} />
    <Text my="0.6em">
      We aim to make the cost of co-ownership comparable the cost of DIY. We charge three core fees
      to acquire, operate, and sell the property.
    </Text>

    <Headline my="1.2em">What you pay, what you get</Headline>

    <UnorderedList spacing={6}>
      <ListItem>
        <Text textStyle="Body2">
          <Sb>Acquisition Fee:</Sb> 2% purchase price
        </Text>
        <Text textStyle="Caption1">
          We find and analyze the property, prepare a business plan, set up the legal
          infrastructure, secure financing and find your co-owners.
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="Body2">
          <Sb>Property Management Fee:</Sb> 8% annual rental revenue
        </Text>
        <Text textStyle="Caption1">
          We find and vet tenants, collect rent, manage maintenance and repairs, find and manage
          vendors, set rental rates, manage budget.
        </Text>
      </ListItem>
      <ListItem>
        <Text textStyle="Body2">
          <Sb>Sale Fee:</Sb> 3% sale price
        </Text>
        <Text textStyle="Caption1">
          We serve as your broker to find great buyers and sell the property (or your allocation of
          the property).
        </Text>
      </ListItem>
    </UnorderedList>

    <br />
    <Text my="0.6em">
      <i>
        Typical real estate investing platforms and solutions (from crowdfunding to REITs) charge
        expensive advisory fees and take a cut out of your profits (in addition to fees we charge).
        We don&rsquo;t. Without the expensive fees, more of your money is free to compound: your
        growth goes to you.
      </i>
    </Text>
  </Fragment>
);

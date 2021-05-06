import type React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { H6, SubTitle1 } from '../../../../components/text';

// Source: https://www.notion.so/coralmoney/Coral-s-fees-f525884af90a46379a0fde551b69ef87

export const Fees = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box>
      <BackBtn handleClick={goBack} pos="absolute" />
      <H6 align="center">Fees</H6>
      <Box h={2} />
      <Text my="0.6em">
        We aim to make the cost of co-ownership comparable the cost of DIY. We charge three core
        fees to acquire, operate, and sell the property.
      </Text>

      <SubTitle1 my="1.2em">What you pay &rarr; What you get</SubTitle1>

      <Text my="0.6em">
        <b>Acquisition Fee:</b> 2% purchase price &rarr; We find and analyze the property, prepare a
        business plan, set up the legal infrastructure, secure financing and find your co-owners.
      </Text>
      <Text my="0.6em">
        <b>Property Management Fee:</b> 8% annual rental revenue &rarr; We find and vet tenants,
        collect rent, manage maintenance and repairs, find and manage vendors, set rental rates,
        manage budget.
      </Text>
      <Text my="0.6em">
        <b>Sale Fee:</b> 3% sale price &rarr; We serve as your broker to find great buyers and sell
        the property (or your allocation of the property).
      </Text>

      <br />
      <Text my="0.6em">
        <i>
          Typical real estate investing platforms and solutions (from crowdfunding to REITs) charge
          expensive advisory fees and take a cut out of your profits (in addition to fees we
          charge). We don&rsquo;t. Without the expensive fees, more of your money is free to
          compound: your growth goes to you.
        </i>
      </Text>
    </Box>
  );
};

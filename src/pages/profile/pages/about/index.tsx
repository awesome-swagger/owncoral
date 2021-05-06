import type React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { BackBtn } from '../../../../components';
import { H6, SubTitle1 } from '../../../../components/text';

export const About = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box overflow="auto">
      <BackBtn handleClick={goBack} pos="absolute" />

      <H6 align="center">About Coral</H6>
      <SubTitle1 my="0.6em">Co-ownership, simplified</SubTitle1>
      <Text my="0.6em">You own the property and profit from it. We manage it.</Text>
      <Text my="0.6em">Coral is the modern way to buy and own investment properties.</Text>

      <SubTitle1 my="0.6em">Shop</SubTitle1>

      <Text my="0.6em">
        Browse our collection of multi-family properties in strong, high-performing rental markets.
        You choose which properties are right for you, and how many shares you want to own.
      </Text>
      <SubTitle1 my="0.6em">Own</SubTitle1>
      <Text my="0.6em">
        We create a property LLC for each property, find and vet co-owners, and handle all the sales
        details. At closing, the co-owners own 100% of the home.
      </Text>

      <SubTitle1 my="0.6em">Earn and enjoy</SubTitle1>
      <Text my="0.6em">
        We take care of renovations, repairs, utilities, tenants and property management. You sit
        back, check-in on your property from your phone, and enjoy your monthly distributions.
      </Text>
    </Box>
  );
};

import { Box, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';

export const LegalStructure = ({ goBack }: { goBack: () => void }) => (
  <Box overflow="auto">
    <BackBtn handleClick={goBack} pos="absolute" />

    <Title2 mt={2} mb={4} align="center">
      Legal Structure
    </Title2>
    <Headline my="0.6em">Co-ownership, simplified</Headline>
    <Text my="0.6em">You own the property and profit from it. We manage it.</Text>
    <Text my="0.6em">Coral is the modern way to buy and own investment properties.</Text>

    <Headline my="0.6em">Shop</Headline>

    <Text my="0.6em">
      Browse our collection of multi-family properties in strong, high-performing rental markets.
      You choose which properties are right for you, and how many shares you want to own.
    </Text>
    <Headline my="0.6em">Own</Headline>
    <Text my="0.6em">
      We create a property LLC for each property, find and vet co-owners, and handle all the sales
      details. At closing, the co-owners own 100% of the home.
    </Text>

    <Headline my="0.6em">Earn and enjoy</Headline>
    <Text my="0.6em">
      We take care of renovations, repairs, utilities, tenants and property management. You sit
      back, check-in on your property from your phone, and enjoy your monthly distributions.
    </Text>
  </Box>
);

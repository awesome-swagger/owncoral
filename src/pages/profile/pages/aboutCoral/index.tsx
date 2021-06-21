import { Fragment } from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';

export const AboutCoral = ({ goBack }: { goBack: () => void }) => (
  <Fragment>
    <BackBtn handleClick={goBack} pos="absolute" />

    <Title2 mt={2} mb={4} align="center">
      Co-ownership, simplified
    </Title2>
    <Box h={2} />
    <Text my="0.6em">You own the property and profit from it. We manage it.</Text>
    <Text my="0.6em">Coral is the modern way to buy and own investment properties.</Text>

    <Box h={4} />

    <List spacing={6}>
      <ListItem>
        <Headline mb={3}>Shop</Headline>
        <Text>
          Browse our collection of multi-family properties in strong, high-performing rental
          markets. You choose which properties are right for you, and how many shares you want to
          own.
        </Text>
      </ListItem>
      <ListItem>
        <Headline mb={3}>Own</Headline>
        <Text>
          We create a property LLC for each property, find and vet co-owners, and handle all the
          sales details. At closing, the co-owners own 100% of the home.
        </Text>
      </ListItem>

      <ListItem>
        <Headline mb={3}>Earn and enjoy</Headline>
        <Text>
          We take care of renovations, repairs, utilities, tenants and property management. You sit
          back, check-in on your property from your phone, and enjoy your monthly distributions.
        </Text>
      </ListItem>
    </List>
  </Fragment>
);

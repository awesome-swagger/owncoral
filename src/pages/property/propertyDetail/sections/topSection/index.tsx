import { Heading, Divider, Box } from '@chakra-ui/react';

export const TopSection = () => (
  <Box my={6}>
    <Heading fontSize="md" my={2}>
      Great business, fair price
    </Heading>
    <Heading fontSize="3xl" m="0" fontWeight="bold">
      3 Linden St
    </Heading>
    <Heading fontSize="sm" my={2}>
      Cambridge, Greater Boston Area
    </Heading>

    <Divider my={6} />

    <Heading fontSize="2xl" fontWeight="bold">
      Apartment building
    </Heading>
    <Heading fontSize="md" my={2}>
      2 units - 6 beds - 2,400sq ft
    </Heading>

    <Divider my={6} />

    <Heading fontSize="2xl" fontWeight="bold">
      Total equity
    </Heading>
    <Heading fontSize="md" my={2}>
      $470k - $200k available to invest
    </Heading>

    <Divider my={6} />

    <Heading fontSize="2xl" fontWeight="bold">
      Hypothetical Investment
    </Heading>
    <Heading fontSize="md" my={2}>
      $100k Initial investment
    </Heading>
  </Box>
);

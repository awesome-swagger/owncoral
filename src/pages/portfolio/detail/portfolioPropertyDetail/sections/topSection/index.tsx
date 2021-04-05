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
    <Heading
      borderRadius="full"
      display="inline-block"
      cursor="pointer"
      fontSize="sm"
      mr={2}
      py={2}
      px={3}
      layerStyle="card"
      whiteSpace="nowrap"
    >
      50% occupied
    </Heading>
    <Heading
      borderRadius="full"
      display="inline-block"
      cursor="pointer"
      fontSize="sm"
      mr={2}
      py={2}
      px={3}
      layerStyle="card"
      whiteSpace="nowrap"
    >
      Under renovation
    </Heading>
    <Divider my={6} />
  </Box>
);

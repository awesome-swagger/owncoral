import { Heading, Divider, Box } from '@chakra-ui/react';

export const TopSection = ({ data }: { data: any }) => (
  <Box my={6}>
    <Heading fontSize="md" my={2}>
      Great business, fair price
    </Heading>
    <Heading fontSize="3xl" m="0" fontWeight="bold">
      {data.street}
    </Heading>
    <Heading fontSize="sm" my={2}>
      {data.cityLocality}, {data.stateRegion}
    </Heading>

    <Divider my={6} />

    <Heading fontSize="2xl" fontWeight="bold">
      Apartment building
    </Heading>
    <Heading fontSize="md" my={2}>
      {data.propertyMeasure}
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

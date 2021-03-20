import { FiMapPin } from 'react-icons/fi';
import { Box, Heading, Flex, Icon } from '@chakra-ui/react';

export const WhatWeLove = () => (
  <Box>
    <Heading fontWeight="bold" fontSize="2xl">
      What we love
    </Heading>

    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Prime location
        </Heading>
        <Heading fontSize="sm">
          Next to the new Union Square Greenline T station and the new Union Square biotech hub (est
          completion 2023). Learn more
        </Heading>
      </Box>
    </Flex>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Opportunity to extract more value
        </Heading>
        <Heading fontSize="sm">
          Raise rental rates up once Union Square T station is complete (est. Dec 2021). Potential
          to raise more significantly when union square biotech hub is complete. Learn more
        </Heading>
      </Box>
    </Flex>

    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Well-priced
        </Heading>
        <Heading fontSize="sm">
          Purchase price is 35% below market due to inefficient management and need to renovate.
          Learn more
        </Heading>
      </Box>
    </Flex>
  </Box>
);

import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FiBook, FiSearch, FiPlusSquare } from 'react-icons/fi';
import { Title2 } from '../../../../components/text';

export const Highlights = () => {
  return (
    <Box>
      <Title2>Highlights</Title2>
      <Flex my={6}>
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="xl"
          layerStyle="card"
          h={8}
          minW={8}
          mr={4}
        >
          <Icon as={FiBook} h={4} w={4} />
        </Flex>
        <Box>
          <Text fontWeight="600">Leading Research Institutions</Text>
          <Text textStyle="Body2">
            Over local 50 universities, including Harvard and MIT. In addition to driving
            innovation, these institutions supply one of Massachusetts' greatest natural resources,
            talent.
          </Text>
        </Box>
      </Flex>

      <Flex my={6}>
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="xl"
          layerStyle="card"
          h={8}
          minW={8}
          mr={4}
        >
          <Icon as={FiPlusSquare} h={4} w={4} />
        </Flex>
        <Box>
          <Text fontWeight="600">Top Research Hospitals</Text>
          <Text textStyle="Body2">
            Like Massachusetts General Hospital, Dana-Farber Cancer Institute, Brigham & Women’s
            Hospital, Beth Israel Deaconess Medical Center.
          </Text>
        </Box>
      </Flex>

      <Flex my={6}>
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="xl"
          layerStyle="card"
          h={8}
          minW={8}
          mr={4}
        >
          <Icon as={FiSearch} h={4} w={4} />
        </Flex>
        <Box>
          <Text fontWeight="600">Top Biotech and Biopharma Companies</Text>
          <Text textStyle="Body2">
            Nearly 1k, from incubators and startups to large companies; 19 of the 20 largest biotech
            + pharma companies have a presence in Greater Boston
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

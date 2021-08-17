import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FiBook, FiSearch, FiPlusSquare } from 'react-icons/fi';
import { Title2 } from '../../../../components/text';

export const Highlights = () => {
  return (
    <Box>
      <Title2>Highlights</Title2>
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="2xl"
          h={8}
          w={8}
          mr={2}
          layerStyle="card"
        >
          <Icon as={FiBook} h={4} w={4} />
        </Flex>
        <Text marginY={4}>Leading Research Institutions</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="2xl"
          h={8}
          w={8}
          mr={2}
          layerStyle="card"
        >
          <Icon as={FiPlusSquare} h={4} w={4} />
        </Flex>
        <Text marginY={4}>Leading Research Institutions</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          borderRadius="2xl"
          h={8}
          w={8}
          mr={2}
          layerStyle="card"
        >
          <Icon as={FiSearch} h={4} w={4} />
        </Flex>
        <Text marginY={4}>Leading Research Institutions</Text>
      </Flex>
    </Box>
  );
};

import { Box, Icon, Text, HStack, VStack } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { Title2 } from '../../../../components/text';

export const SubMarkets = () => {
  return (
    <Box>
      <Title2 my={6}>Submarkets</Title2>
      <VStack spacing={2}>
        <HStack layerStyle="card" p={3} borderRadius="2xl">
          <Box>
            <Text fontWeight="600">Cambridge</Text>
            <Text textStyle="Body2">
              An established and thriving tech capital and biotech hub, and home to MIT and Harvard
            </Text>
          </Box>
          <Icon ml={6} opacity="0.5" as={FiChevronRight} />
        </HStack>
        <HStack layerStyle="card" p={3} borderRadius="2xl">
          <Box>
            <Text fontWeight="600">Somerville</Text>
            <Text textStyle="Body2">
              aaAn emerging hub next to Cambridge, Somerville is becoming the next hot lab cluster
            </Text>
          </Box>
          <Icon ml={6} opacity="0.5" as={FiChevronRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

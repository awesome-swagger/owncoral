import type React from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Box, HStack, Icon, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Headline, Title2 } from '../../../../components/text';

export const SubMarkets = () => {
  const history = useHistory();
  const descColor = useColorModeValue('#6F8283', '#FFFFFFCC');

  const handleRoute = (route: string) => history.push(`boston-market/${route}`);

  return (
    <Box>
      <Title2 my={6}>Submarkets</Title2>
      <VStack spacing={2}>
        <HStack
          onClick={() => handleRoute('cambridge')}
          cursor="pointer"
          layerStyle="card"
          p={3}
          borderRadius="2xl"
        >
          <Box>
            <Headline>Cambridge</Headline>
            <Text textStyle="Body2" color={descColor}>
              An established and thriving tech capital and biotech hub, and home to MIT and Harvard
            </Text>
          </Box>
          <Icon ml={6} opacity="0.5" as={FiChevronRight} />
        </HStack>
        <HStack
          onClick={() => handleRoute('somerville')}
          cursor="pointer"
          layerStyle="card"
          p={3}
          borderRadius="2xl"
        >
          <Box>
            <Headline>Somerville</Headline>
            <Text textStyle="Body2" color={descColor}>
              aaAn emerging hub next to Cambridge, Somerville is becoming the next hot lab cluster
            </Text>
          </Box>
          <Icon ml={6} opacity="0.5" as={FiChevronRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

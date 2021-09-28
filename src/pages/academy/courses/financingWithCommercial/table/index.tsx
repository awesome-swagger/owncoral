import { Box, Divider, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';

export const Table = () => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const titleWidth = "40%", valueWidth = "30%";

  return (
    <Box pos="relative">
      <VStack
        border="1px"
        borderColor={borderColor}
        borderRadius="2xl"
        p={4}
        my={6}
        alignItems="normal"
      >
        <HStack textAlign="center" w="100%" justifyContent="flex-end">
          <Text w={titleWidth} />
          <Text fontWeight="bold" w={valueWidth}>
            Unlevered
            <br />
            without loan
          </Text>
          <Text fontWeight="bold" w={valueWidth}>
            Levered
            <br />
            with loan
          </Text>
        </HStack>
        <Divider />
        <Text w="100%">Return</Text>
        <Divider />
        <HStack textAlign="right">
          <Text w={titleWidth}>Net Operating Income</Text>
          <Text w={valueWidth}>$45,000</Text>
          <Text w={valueWidth}>$45,000</Text>
        </HStack>
        <Divider />
        <HStack textAlign="right">
          <Text w={titleWidth}>Appreciation</Text>
          <Text w={valueWidth}>$30,000</Text>
          <Text w={valueWidth}>$30,000</Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w={titleWidth}>
            Interest Payments
          </Text>
          <Text w={valueWidth} />
          <Text w={valueWidth} textAlign="right">
            -$22,750
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w={titleWidth}>
            Total Returns
          </Text>
          <Text fontWeight="bold" w={valueWidth} textAlign="right">
            $75,000
          </Text>
          <Text fontWeight="bold" w={valueWidth} textAlign="right">
            $52,250
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w={titleWidth}>
            Your Investment
          </Text>
          <Text w={valueWidth} textAlign="right" fontWeight="bold">
            $1,000,000
          </Text>
          <Text w={valueWidth} textAlign="right" fontWeight="bold">
            $350,000
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w={titleWidth}>
            Rate of Return
          </Text>
          <Text w={valueWidth} textAlign="right" fontWeight="bold">
            7.5%
          </Text>
          <Text w={valueWidth} textAlign="right" fontWeight="bold">
            14.9%
          </Text>
        </HStack>
      </VStack>
      <Box width="1px" bg={borderColor} pos="absolute" h="100%" left="40%" top="0" />
      <Box width="1px" bg={borderColor} pos="absolute" h="100%" left="70%" top="0" />
    </Box>
  );
};

export const UnleveredTable = () => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  return (
    <Box pos="relative">
      <VStack
        border="1px"
        borderColor={borderColor}
        borderRadius="2xl"
        p={4}
        my={6}
        alignItems="normal"
      >
        <HStack textAlign="center" w="100%" justifyContent="flex-end">
          <Text w="50%" />
          <Text pl={4} fontWeight="bold" w="50%">
            Unlevered
            without loan
          </Text>
        </HStack>
        <Divider />
        <Text w="100%">Return</Text>
        <Divider />
        <HStack textAlign="right">
          <Text w="50%">Net Operating Income</Text>
          <Text w="50%">$45,000</Text>
        </HStack>
        <Divider />
        <HStack textAlign="right">
          <Text w="50%">Appreciation</Text>
          <Text w="50%">$30,000</Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="50%">
            Total Returns
          </Text>
          <Text fontWeight="bold" w="50%" textAlign="right">
            $75,000
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="50%">
            Your Investment
          </Text>
          <Text w="50%" textAlign="right" fontWeight="bold">
            $1,000,000
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="50%">
            Rate of Return
          </Text>
          <Text w="50%" textAlign="right" fontWeight="bold">
            7.5%
          </Text>
        </HStack>
      </VStack>
      <Box width="1px" bg={borderColor} pos="absolute" h="100%" left="50%" top="0" />
    </Box>
  );
};

import { VStack, HStack, Text, Divider, useColorModeValue, Box } from '@chakra-ui/react';

export const Table = () => {
  const borderColor = useColorModeValue('#E2E8F0', 'rgba(255, 255, 255, 0.16)');
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
          <Text w="40%" />
          <Text fontWeight="bold" w="30%">
            Unlevered
            <br />
            (without loan)
          </Text>
          <Text fontWeight="bold" w="30%">
            Levered
            <br />
            (with loan)
          </Text>
        </HStack>
        <Divider />
        <Text w="100%" fontWeight="bold">
          Return
        </Text>
        <Divider />
        <HStack textAlign="right">
          <Text w="40%">Net Operating Income</Text>
          <Text w="30%">$45,000</Text>
          <Text w="30%">$45,000</Text>
        </HStack>
        <Divider />
        <HStack textAlign="right">
          <Text w="40%">Appreciation</Text>
          <Text w="30%">$30,000</Text>
          <Text w="30%">$30,000</Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="40%">
            Interest Payments
          </Text>
          <Text w="30%" />
          <Text w="30%" textAlign="right">
            -$22,750
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="40%">
            Total Returns
          </Text>
          <Text fontWeight="bold" w="30%" textAlign="right">
            $75,000
          </Text>
          <Text fontWeight="bold" w="30%" textAlign="right">
            $52,250
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="40%">
            Your Investment
          </Text>
          <Text w="30%" textAlign="right" fontWeight="bold">
            $1,000,000
          </Text>
          <Text w="30%" textAlign="right" fontWeight="bold">
            $350,000
          </Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold" w="40%">
            Rate of Return
          </Text>
          <Text w="30%" textAlign="right" fontWeight="bold">
            7.5%
          </Text>
          <Text w="30%" textAlign="right" fontWeight="bold">
            14.9%
          </Text>
        </HStack>
      </VStack>
      <Box width="1px" bg={borderColor} pos="absolute" h="100%" left="40%" top="0" />
      <Box width="1px" bg={borderColor} pos="absolute" h="100%" left="70%" top="0" />
    </Box>
  );
};

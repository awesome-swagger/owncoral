import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { Fragment } from 'react';

export const PercentBar = () => {
  const eqColor = useColorModeValue('teal.700', 'teal.400');
  const debtColor = useColorModeValue('green.200', 'green.100');

  return (
    <Fragment>
      <Flex
        mt={20}
        mb={6}
        borderRadius="full"
        overflow="hidden"
        h={3}
        justifyContent="space-between"
      >
        <Box bg={eqColor} w="35%" />
        <Box bg={debtColor} w="65%" />
      </Flex>
      <HStack>
        <Circle size={2} mr={2} bg={eqColor} />
        <Text>Initial equity</Text>
      </HStack>
      <HStack>
        <Circle size={2} mr={2} bg={debtColor} />
        <Text>Initial loan</Text>
      </HStack>
    </Fragment>
  );
}

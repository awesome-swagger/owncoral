import type React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

export const ProgressBar: React.FC<{ value: number; total: number }> = ({ value, total }) => {
  const bgColor1 = useColorModeValue('dark.500', 'whiteAlpha.800');
  const bgColor2 = useColorModeValue('gray.300', 'whiteAlpha.300');

  const totalBoxes = Array(total).fill('');

  return (
    <Flex h="6px" my={6} justifyContent="space-between">
      {totalBoxes.map((_, ind) => (
        <Box
          borderRadius="full"
          mx="2px"
          bg={ind < value ? bgColor1 : bgColor2}
          width="-webkit-fill-available"
          key={ind}
        />
      ))}
    </Flex>
  );
};

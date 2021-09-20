import { Box, useColorModeValue } from '@chakra-ui/react';

export const Circle: React.FC<any> = ({ color }) => {
  const tealColor = useColorModeValue('teal.700', 'teal.400');
  const greenColor = useColorModeValue('green.200', 'green.100');
  const orangeColor = useColorModeValue('orange.300', 'orange.200');

  const bgColor =
    color === 'teal'
      ? tealColor
      : color === 'green'
      ? greenColor
      : color === 'orange'
      ? orangeColor
      : 'black';

  return <Box mr={2} w={2} h={2} borderRadius="full" bg={bgColor} />;
};

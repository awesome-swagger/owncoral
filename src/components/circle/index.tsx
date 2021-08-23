import { Box, useColorModeValue } from '@chakra-ui/react';

export const Circle: React.FC<any> = ({ color }) => {
  const primaryColor = useColorModeValue('#074851', '#48CAE4');
  const secondaryColor = useColorModeValue('#80ECD1', '#F1FAEE');
  const lightColor = useColorModeValue('#b5838d', '#b5838d');

  const bgColor =
    color === 'primary' ? primaryColor : color === 'secondary' ? secondaryColor : lightColor;

  return <Box mr={2} w={2} h={2} borderRadius="full" bg={bgColor} />;
};

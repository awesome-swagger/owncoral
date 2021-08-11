import { Box, useColorModeValue } from '@chakra-ui/react';

export const RecognizedCircle: React.FC<any> = (props) => {
  const recognizedColor = useColorModeValue('#80ECD1', '#F1FAEE');
  return <Box mr={2} w={2} h={2} borderRadius="full" bg={recognizedColor} {...props} />;
};

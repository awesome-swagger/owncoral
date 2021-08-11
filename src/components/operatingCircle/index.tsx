import { Box, useColorModeValue } from '@chakra-ui/react';

export const OperatingCircle: React.FC<any> = (props) => {
  const recognizedColor = useColorModeValue('#074851', '#48CAE4');
  return <Box mr={2} w={2} h={2} borderRadius="full" bg={recognizedColor} {...props} />;
};

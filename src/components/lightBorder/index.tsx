import type React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

export const BoxLightBorder: React.FC<any> = (props) => {
  const lightBorder = useColorModeValue('blackAlpha.300', 'whiteAlpha.400');
  return <Box border="1px" borderColor={lightBorder} {...props} />;
};

export const FlexLightBorder: React.FC<any> = (props) => {
  const lightBorder = useColorModeValue('blackAlpha.300', 'whiteAlpha.400');
  return <Flex border="1px" borderColor={lightBorder} {...props} />;
};

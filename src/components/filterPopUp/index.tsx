import { Box, useColorModeValue } from '@chakra-ui/react';

export const FilterPopUp = (props: any) => {
  const bgColor = useColorModeValue('white', 'gray.600');
  return (
    <Box
      bg={bgColor}
      borderTopRadius="2xl"
      position="absolute"
      bottom="0"
      left="0"
      w="100%"
      p={4}
      {...props}
    />
  );
};

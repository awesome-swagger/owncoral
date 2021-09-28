import { Center, useColorModeValue } from '@chakra-ui/react';

export const IconBackground = (props: any) => {
  const bgColor = useColorModeValue('gray.100', 'whiteAlpha.100');

  return <Center borderRadius="xl" h={8} minW={8} bg={bgColor} {...props} />;
};

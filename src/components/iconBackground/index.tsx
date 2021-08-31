import { Center, useColorModeValue } from '@chakra-ui/react';

export const IconBackground = (props: any) => {
  const bgColor = useColorModeValue('#F0F3F3', 'whiteAlpha.100');

  return <Center borderRadius="xl" h={8} minW={8} bg={bgColor} {...props} />;
};

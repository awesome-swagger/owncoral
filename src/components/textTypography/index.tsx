import { Text, useColorModeValue } from '@chakra-ui/react';

export const TextTypography = (props: any) => {
  const color = useColorModeValue('primary.900', 'secondary.50');

  return <Text color={color} {...props}></Text>;
};

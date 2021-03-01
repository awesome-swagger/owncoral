import { Heading, useColorModeValue } from '@chakra-ui/react';

export const HeadingTypography = (props: any) => {
  const color = useColorModeValue('primary.900', 'secondary.50');

  return <Heading color={color} {...props}></Heading>;
};

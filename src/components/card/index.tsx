import type { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import { Caption1, Overline, Title2 } from '../text';

export const Card = ({
  title,
  value,
  description,
}: {
  title: string;
  value: ReactNode;
  description: ReactNode;
}) => {
  const gray = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box layerStyle="card" m="0" p={4} w={40} borderRadius="xl">
      <Overline color={gray}>{title}</Overline>
      <Title2 my={3}>{value}</Title2>
      <Caption1>{description}</Caption1>
    </Box>
  );
};

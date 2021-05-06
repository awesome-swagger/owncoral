import type { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import { Caption, H5, Overline } from '../text';

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
    <Box layerStyle="card" m="2" p={4} w={40} borderRadius="xl">
      <Overline color={gray}>{title}</Overline>
      <H5>{value}</H5>
      <Caption>{description}</Caption>
    </Box>
  );
};

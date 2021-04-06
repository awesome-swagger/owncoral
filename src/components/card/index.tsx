import { Box, Heading } from '@chakra-ui/react';

export const Card = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => {
  return (
    <Box layerStyle="card" m="2" p={4} w={40}>
      <Heading layerStyle="highlightForeground" fontSize="xs">
        {title}
      </Heading>
      <Heading fontSize="2xl" m="0" fontWeight="bold">
        {value}
      </Heading>
      <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
        {description}
      </Heading>
    </Box>
  );
};

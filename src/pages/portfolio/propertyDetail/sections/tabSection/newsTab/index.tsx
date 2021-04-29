import { Box, Heading } from '@chakra-ui/react';

import { DummyData } from '../../../../../../lib/portfolioData';

export const NewsTab = () => {
  const dummyData = DummyData;
  return (
    <Box borderLeft="2px" borderStyle="dashed" layerStyle="lightBorder">
      {dummyData.news.map((value: any, index: number) => (
        <Box pos="relative" pl={6} key={index}>
          <Box w={4} h={4} borderRadius="full" bg="#000" left={-2} top={6} pos="absolute" />
          <Heading fontSize="xs">{value.date}</Heading>
          <Heading fontSize="md" fontWeight="bold">
            {value.title}
          </Heading>
          <Heading fontSize="sm">{value.description}</Heading>
        </Box>
      ))}
    </Box>
  );
};
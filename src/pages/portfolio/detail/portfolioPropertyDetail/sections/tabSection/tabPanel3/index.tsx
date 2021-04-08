import { Box, Heading, Image, Flex } from '@chakra-ui/react';

export const TabPanel3 = ({ data }: { data: any }) => (
  <Box borderLeft="2px" borderStyle="dashed" layerStyle="lightBorder">
    {data.news.map((value: any) => (
      <Box pos="relative" pl={6}>
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
{
  /* <Image src={HouseImg} alt="img" w={52} /> */
}

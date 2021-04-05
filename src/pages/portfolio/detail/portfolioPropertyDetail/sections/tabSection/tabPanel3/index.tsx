import { Box, Heading, Image, Flex } from '@chakra-ui/react';
import HouseImg from '../../../../../../../assets/CapturaRenovation.png';

export const TabPanel3 = () => (
  <Box borderLeft="2px" borderStyle="dashed" layerStyle="lightBorder">
    <Box pos="relative" pl={6}>
      <Box w={4} h={4} borderRadius="full" bg="#000" left={-2} top={6} pos="absolute" />
      <Heading fontSize="xs">Feb. 28 · 16:45</Heading>
      <Heading fontSize="md" fontWeight="bold">
        Permits obtained, renovations started! 📄
      </Heading>
      <Heading fontSize="sm">Ullamcorper pellentesque et tempor, nisi tempor.</Heading>
    </Box>
    <Box pos="relative" pl={6}>
      <Box w={4} h={4} borderRadius="full" bg="#000" left={-2} top={6} pos="absolute" />
      <Heading fontSize="xs">Feb. 28 · 16:45</Heading>
      <Heading fontSize="md" fontWeight="bold">
        Permits obtained, renovations started! 📄
      </Heading>
      <Heading fontSize="sm">Ullamcorper pellentesque et tempor, nisi tempor.</Heading>
    </Box>
    <Box pos="relative" pl={6}>
      <Box w={4} h={4} borderRadius="full" bg="#000" left={-2} top={6} pos="absolute" />
      <Heading fontSize="xs">Feb. 28 · 16:45</Heading>
      <Heading fontSize="md" fontWeight="bold">
        Renovation on both units complete! 💪
      </Heading>
      <Heading fontSize="sm">Ullamcorper pellentesque et tempor, nisi tempor.</Heading>
      <Flex overflow="auto">
        <Image src={HouseImg} alt="img" w={52} />
      </Flex>
    </Box>
  </Box>
);

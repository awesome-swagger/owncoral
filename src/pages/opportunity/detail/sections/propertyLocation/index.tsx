import { Box, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { BoxLightBorder } from '../../../../../components';
import Map from '../../../../../assets/Map2.png';

export const PropertyLocation = () => (
  <Box>
    <Heading fontWeight="bold" fontSize="2xl">
      Property location
    </Heading>
    <Image src={Map} alt="map" w="100%" />
    <Heading fontSize="md" my={6}>
      3 Linden is immediately next to Union Square, the next great biotech hub in Greater Boston
      Area.
    </Heading>
    <Heading fontSize="md" fontWeight="bold" mt={4}>
      Key distances
    </Heading>
    <UnorderedList>
      <ListItem>
        <Heading fontSize="md">4 min walk to Union Square</Heading>
      </ListItem>
      <ListItem>
        <Heading fontSize="md">10 min walk to Inman Square</Heading>
      </ListItem>
      <ListItem>
        <Heading fontSize="md">1.1 mile to Harvard campus</Heading>
      </ListItem>
      <ListItem>
        <Heading fontSize="md">1.3 mile to MIT campus</Heading>
      </ListItem>
      <ListItem>
        <Heading fontSize="md">1.4 mile to Kendall Square T Station</Heading>
      </ListItem>
      <ListItem>
        <Heading fontSize="md">14 min drive/25 min train to downtown Boston</Heading>
      </ListItem>
    </UnorderedList>
    <BoxLightBorder textAlign="center" my={4}>
      <Heading fontSize="md"> Learn more about location</Heading>
    </BoxLightBorder>
  </Box>
);

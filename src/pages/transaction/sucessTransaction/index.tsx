import { Container } from '../../../components';
import { Image, Text, Heading, Box, Button, Flex, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropertyImg from '../../../assets/Frame269.png';

export const SucessTransaction = () => {
  return (
    <Container overflow="hidden">
      <Image
        src={PropertyImg}
        alt="property_img"
        w="100%"
        minH="100%"
        pos="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />
      <Box textAlign="center">
        <Heading size="md">Congratulations!</Heading>
        <Text fontSize="md">You are now an owner of 13 Linden St</Text>
      </Box>
      <Box pos="absolute" bottom={10} left={4} w="calc(100% - 2rem)">
        <Box px={4} my={8} border="1px" layerStyle="lightBorder">
          <Heading size="xs" textAlign="center">
            3 Linden St
          </Heading>
          <Divider />
          <Flex justifyContent="space-between" my={4}>
            <Text fontSize="lg">Total equity</Text>
            <Text fontSize="lg">$470.000</Text>
          </Flex>
          <Flex justifyContent="space-between" my={4}>
            <Text fontSize="lg">Your investment</Text>
            <Text fontSize="lg" fontWeight="500">
              $50.000
            </Text>
          </Flex>
        </Box>
        <Link to="/portfolio">
          <Button w="100%">See my portfolio</Button>
        </Link>
      </Box>
    </Container>
  );
};

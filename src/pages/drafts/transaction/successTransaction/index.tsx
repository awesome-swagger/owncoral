import { Link } from 'react-router-dom';
import { Box, Button, Divider,Flex, Heading, Image } from '@chakra-ui/react';

import PropertyImg from '../../../../assets/Frame269.png';
import { Container } from '../../../../components';
import { Headline,Title3 } from '../../../../components/text';

export const SuccessTransaction = () => {
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
        <Headline>You are now an owner of 13 Linden St</Headline>
      </Box>
      <Box pos="absolute" bottom={10} left={4} w="calc(100% - 2rem)">
        <Box px={4} my={8} border="1px" layerStyle="lightBorder">
          <Heading size="xs" textAlign="center">
            3 Linden St
          </Heading>
          <Divider />
          <Flex justifyContent="space-between" my={4}>
            <Title3>Total equity</Title3>
            <Title3>$470.000</Title3>
          </Flex>
          <Flex justifyContent="space-between" my={4}>
            <Title3>Your investment</Title3>
            <Title3 fontWeight="500">$50.000</Title3>
          </Flex>
        </Box>
        <Link to="/portfolio">
          <Button w="100%">See my portfolio</Button>
        </Link>
      </Box>
    </Container>
  );
};

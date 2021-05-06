import { Image, Heading, Box, Button, Flex, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Container } from '../../../../components';
import { H6, SubTitle1 } from '../../../../components/text';

import PropertyImg from '../../../../assets/Frame269.png';

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
        <SubTitle1>You are now an owner of 13 Linden St</SubTitle1>
      </Box>
      <Box pos="absolute" bottom={10} left={4} w="calc(100% - 2rem)">
        <Box px={4} my={8} border="1px" layerStyle="lightBorder">
          <Heading size="xs" textAlign="center">
            3 Linden St
          </Heading>
          <Divider />
          <Flex justifyContent="space-between" my={4}>
            <H6>Total equity</H6>
            <H6>$470.000</H6>
          </Flex>
          <Flex justifyContent="space-between" my={4}>
            <H6>Your investment</H6>
            <H6 fontWeight="500">
              $50.000
            </H6>
          </Flex>
        </Box>
        <Link to="/portfolio">
          <Button w="100%">See my portfolio</Button>
        </Link>
      </Box>
    </Container>
  );
};

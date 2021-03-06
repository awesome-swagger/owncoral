import { Link } from 'react-router-dom';
import { Box, Button, Divider, Flex, Heading, Image } from '@chakra-ui/react';

import { BoxLightBorder, Container } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';
import { PortfolioUrl } from '../../../../lib/uriConstants';

import PropertyImg from '../../../../assets/Frame269.png';

export const SuccessTransaction = () => (
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
      <BoxLightBorder px={4} my={8} border="1px">
        <Heading size="xs" textAlign="center">
          3 Linden St
        </Heading>
        <Divider />
        <Flex justifyContent="space-between" my={4}>
          <Title2>Total equity</Title2>
          <Title2>$470.000</Title2>
        </Flex>
        <Flex justifyContent="space-between" my={4}>
          <Title2>Your investment</Title2>
          <Title2 fontWeight="500">$50.000</Title2>
        </Flex>
      </BoxLightBorder>
      <Link to={PortfolioUrl}>
        <Button w="100%">See my portfolio</Button>
      </Link>
    </Box>
  </Container>
);

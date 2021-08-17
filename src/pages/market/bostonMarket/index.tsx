import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Button, Divider, Icon, Image, Box, Text, Flex } from '@chakra-ui/react';
import { Overline, Title1, Caption1 } from '../../../components/text';
import MarketImg from '../../../assets/boston-market.png';
import { Container } from '../../../components';
import { Highlights } from './highlights';

const BostonMarket = () => (
  <Container p={0}>
    <Box>
      <Image src={MarketImg} alt="house_img" w="100%" filter="grayscale(1)" />
      <Icon pos="absolute" top={6} left={6} h={8} w={8} as={AiFillCloseCircle} color="white" />
      <Icon
        pos="absolute"
        top={6}
        right={6}
        h={8}
        w={8}
        p={1}
        as={FiMoreHorizontal}
        borderRadius="full"
        layerStyle="iconColor"
        color="grey"
      />
      <Icon
        pos="absolute"
        top={6}
        right={16}
        mr={2}
        h={8}
        w={8}
        p={1}
        as={AiOutlineUpload}
        borderRadius="full"
        layerStyle="iconColor"
        color="grey"
      />
    </Box>
    <Box px={6}>
      <Box my={6}>
        <Overline>WHY IS IT A KEY PLACE TO INVEST</Overline>
        <Title1 my={3}>Great Boston Area</Title1>
        <Text my={2} textStyle="Body1" fontWeight="600">
          Harvard/MIT + tech capital and top biotech hub
        </Text>
        <Text my={6} textStyle="Body1">
          One of the highest densities of educated millennials in the world — and one of the best
          rental markets. Top universities (Harvard, MIT) providing anti cyclicality and growth in
          the tech and biotech sectors are what make the Greater Boston area so attractive to us.
        </Text>
        <Flex flexWrap="wrap" gridGap={2}>
          <Caption1
            borderRadius="full"
            py="0.375rem"
            px="0.75rem"
            layerStyle="card"
            whiteSpace="nowrap"
          >
            Growth potential
          </Caption1>
          <Caption1
            borderRadius="full"
            py="0.375rem"
            px="0.75rem"
            layerStyle="card"
            whiteSpace="nowrap"
          >
            Good rental yield
          </Caption1>
          <Caption1
            borderRadius="full"
            py="0.375rem"
            px="0.75rem"
            layerStyle="card"
            whiteSpace="nowrap"
          >
            Anti-cyclicality
          </Caption1>
        </Flex>
        <Divider my={6} />
        <Text my={6} textStyle="Body1">
          The Greater Boston area is a tech capital rivaling the Bay Area and New York, and the top
          bitech hub in the US (if not the world).
        </Text>
        <Divider my={6} />
        <Highlights />
      </Box>

      <Divider my={6} />
      <Button w="100%" mt={12}>
        Continue to market properties
      </Button>
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default BostonMarket;

import { Box, Divider, HStack, Text } from '@chakra-ui/react';
import { Subhead, Headline, Overline, Title1 } from '../../../../components/text';

export const AreaDetails = () => {
  const tags = ['Growth potential', ' Good rental yield', 'Anti-cyclicality'];
  return (
    <Box>
      <Overline>WHY IS IT A KEY PLACE TO INVEST</Overline>
      <Title1 my={3}>Great Boston Area</Title1>
      <Headline my={2}>Harvard/MIT + tech capital and top biotech hub</Headline>
      <Text my={6} textStyle="Body1">
        One of the highest densities of educated millennials in the world — and one of the best
        rental markets. Top universities (Harvard, MIT) providing anti-cyclicality and growth in the
        tech and biotech sectors are what make the Greater Boston area so attractive to us.
      </Text>
      <HStack flexWrap="wrap" gridGap={2} spacing={0}>
        {tags.map((tag, index) => (
          <Subhead
            borderRadius="full"
            py="0.375rem"
            px="0.75rem"
            layerStyle="card"
            whiteSpace="nowrap"
            key={index}
          >
            {tag}
          </Subhead>
        ))}
      </HStack>
      <Divider my={6} />
      <Text my={6} textStyle="Body1">
        The Greater Boston area is a tech capital rivaling the Bay Area and New York, and the top
        bitech hub in the US (if not the world).
      </Text>
    </Box>
  );
};

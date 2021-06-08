import type React from 'react';
import { Box, ListItem, UnorderedList, Text } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title2, Caption1 } from '../../../../components/text';

export const Glossary = ({
  data,
  handleGlossary,
}: {
  data: any;
  handleGlossary: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <Box>
      <BackBtn handleClick={() => handleGlossary(null)} />
      <Title2 my={4}>{data.name}</Title2>
      <Text textStyle="Body1">{data.description}</Text>
      <Headline mt={6} mb={2}>
        How to Calculate
      </Headline>
      <UnorderedList mx={4}>
        <ListItem>
          <Text textStyle="Body1">{data.howToCalculate}</Text>
        </ListItem>
      </UnorderedList>
      <Box layerStyle="card" p={4} my={4} borderRadius="2xl">
        <Caption1 mb={2}>Example</Caption1>
        <Text textStyle="Body1">{data.example}</Text>
      </Box>
      <Headline mt={6} mb={2}>
        Other notes
      </Headline>
      <Text textStyle="Body1">{data.note}</Text>
    </Box>
  );
};

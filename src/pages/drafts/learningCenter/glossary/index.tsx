import type React from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title1, Title3 } from '../../../../components/text';

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
      <Title1>{data.name}</Title1>
      <Headline>{data.description}</Headline>
      <Title3>How to Calculate</Title3>
      <UnorderedList mx={4}>
        <ListItem>
          <Headline>{data.howToCalculate}</Headline>
        </ListItem>
      </UnorderedList>
      <Box layerStyle="card" p={4} my={4}>
        <Title3>Example</Title3>
        <Headline>{data.example}</Headline>
      </Box>
      <Title3>Other notes</Title3>
      <Headline>{data.note}</Headline>
    </Box>
  );
};

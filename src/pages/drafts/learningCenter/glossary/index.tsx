import type React from 'react';
import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { BackBtn } from '../../../../components';
import { H4, H6, H6i, SubTitle1 } from '../../../../components/text';

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
      <H4>{data.name}</H4>
      <SubTitle1>{data.description}</SubTitle1>
      <H6>How to Calculate</H6>
      <UnorderedList mx={4}>
        <ListItem>
          <SubTitle1>{data.howToCalculate}</SubTitle1>
        </ListItem>
      </UnorderedList>
      <Box layerStyle="card" p={4} my={4}>
        <H6i>Example</H6i>
        <SubTitle1>{data.example}</SubTitle1>
      </Box>
      <H6>Other notes</H6>
      <SubTitle1>{data.note}</SubTitle1>
    </Box>
  );
};

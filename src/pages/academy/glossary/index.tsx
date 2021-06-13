import type React from 'react';
import { Fragment } from 'react';
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { BackBtn } from '../../../components';
import { Caption1, Headline, Title2 } from '../../../components/text';

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
      {data.description && data.description !== '' && (
        <Text textStyle="Body1">{data.description}</Text>
      )}
      {data.howToCalculate && data.howToCalculate !== '' && (
        <Fragment>
          <Headline mt={6} mb={2}>
            How to Calculate
          </Headline>
          <UnorderedList mx={4}>
            <ListItem>
              <Text textStyle="Body1">{data.howToCalculate}</Text>
            </ListItem>
          </UnorderedList>
        </Fragment>
      )}
      {data.example && data.example !== '' && (
        <Box layerStyle="card" p={4} my={4} borderRadius="2xl">
          <Caption1 mb={2}>Example</Caption1>
          <Text textStyle="Body1">{data.example}</Text>
        </Box>
      )}
      {data.note && data.note !== '' && (
        <Fragment>
          <Headline mt={6} mb={2}>
            Other notes
          </Headline>
          <Text textStyle="Body1">{data.note}</Text>
        </Fragment>
      )}
    </Box>
  );
};

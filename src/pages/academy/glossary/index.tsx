import { Fragment } from 'react';
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { BackBtn, Container } from '../../../components';
import { Caption1, Headline, Title2, Title3 } from '../../../components/text';
import { useParams, useHistory } from 'react-router-dom';
import { GlossaryData } from '../../../lib/glossaryData';

export const Glossary = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  const FilteredData = GlossaryData.filter((val) => val.name.includes(title))[0];

  return (
    <Container>
      <BackBtn handleClick={() => history.goBack()} />
      <Title2 my={4}>{FilteredData.name}</Title2>
      {FilteredData.description && FilteredData.description !== '' && (
        <Text textStyle="Body1">{FilteredData.description}</Text>
      )}
      {FilteredData.howToCalculate && FilteredData.howToCalculate !== '' && (
        <Fragment>
          <Headline mt={6} mb={2}>
            How to Calculate
          </Headline>
          <UnorderedList mx={4}>
            <ListItem>
              <Text textStyle="Body1">{FilteredData.howToCalculate}</Text>
            </ListItem>
          </UnorderedList>
        </Fragment>
      )}
      {FilteredData.example && FilteredData.example !== '' && (
        <Box layerStyle="card" p={4} my={4} borderRadius="2xl">
          <Caption1 mb={2}>Example</Caption1>
          <Text textStyle="Body1">{FilteredData.example}</Text>
        </Box>
      )}
      {FilteredData.note && FilteredData.note !== '' && (
        <Fragment>
          <Headline mt={6} mb={2}>
            Other notes
          </Headline>
          <Text textStyle="Body1">{FilteredData.note}</Text>
        </Fragment>
      )}
    </Container>
  );
};

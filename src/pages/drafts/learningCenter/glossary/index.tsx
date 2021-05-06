import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { H4, H6, H6i, SubTitle1 } from '../../../../components/text';
import { BackBtn } from '../../../../components';

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
      <H4 children={data.name} />
      <SubTitle1 children={data.description} />
      <H6>How to Calculate</H6>
      <UnorderedList mx={4}>
        <ListItem>
          <SubTitle1 children={data.howToCalculate} />
        </ListItem>
      </UnorderedList>
      <Box layerStyle="card" p={4} my={4}>
        <H6i>Example</H6i>
        <SubTitle1 children={data.example} />
      </Box>
      <H6>Other notes</H6>
      <SubTitle1 children={data.note} />
    </Box>
  );
};

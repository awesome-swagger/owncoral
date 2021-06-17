import type React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Container, BackBtn } from '../../../../components';
import { Title3, Headline } from '../../../../components/text';
import { Data } from '../../../../lib/courseDetailData';
import Academy from '../../../../assets/academy-1.svg';
import { titleToUrlFragment } from '../../lib';

const CourseDetail: React.FC = () => {
  const { title }: { title: string } = useParams();
  const history = useHistory();

  const FilteredData = Data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title)
  );

  return (
    <Container>
      <BackBtn pos="absolute" handleClick={() => history.goBack()} />
      {FilteredData ? (
        <Box>
          <Title3 textAlign="center" mx={8} mb={10}>
            {FilteredData.name}
          </Title3>
          {FilteredData.value.map((
            { title, slides }: { title: string; slides: number },
            index: number
          ) => (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              layerStyle="selectionBox"
              borderRadius="2xl"
              cursor="pointer"
              p={4}
              my={6}
              key={index}
            >
              <Box>
                <Headline>{title}</Headline>
                <Text textStyle="Body2" mt={1}>
                  {slides} slides
                </Text>
              </Box>
              <Icon as={Academy} h="auto" w="auto" />
            </Flex>
          ))}
        </Box>
      ) : (
        <Title3 textAlign="center" mt={20}>
          Not Found
        </Title3>
      )}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default CourseDetail;

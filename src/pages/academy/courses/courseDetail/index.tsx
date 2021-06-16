import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, BackBtn } from '../../../../components';
import { Title3, Headline } from '../../../../components/text';
import { Data } from '../../../../lib/courseDetailData';
import Academy from '../../../../assets/academy-1.svg';

const CourseDetail: React.FC = () => {
  const { title }: { title: string } = useParams();
  const history = useHistory();

  const FilteredData = Data.filter(({ name }: { name: string }) =>
    name.toLowerCase().replaceAll(' ', '').includes(title.replaceAll('-', '')),
  );

  return (
    <Container>
      <BackBtn pos="absolute" handleClick={() => history.goBack()} />
      {FilteredData.length !== 0 ? (
        <Box>
          <Title3 textAlign="center" mx={8} mb={10}>
            {FilteredData[0].name}
          </Title3>
          {FilteredData[0].value.map(({ title, slides }: { title: string; slides: number }) => (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              layerStyle="selectionBox"
              borderRadius="2xl"
              cursor="pointer"
              p={4}
              my={6}
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

export default CourseDetail;

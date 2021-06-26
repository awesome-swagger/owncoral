import type React from 'react';
import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Center, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

import Academy from '../../../../assets/academy-1.svg';
import { BackBtn, Container, NavBar } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';
import { Data } from '../../../../lib/courseDetailData';
import { titleToUrlFragment } from '../../lib';

const CourseDetail: React.FC = () => {
  const { title }: { title: string } = useParams();
  const history = useHistory();

  const FilteredData = Data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title),
  );

  const comingSoonColor = useColorModeValue('gray.300', 'whiteAlpha.400');

  return (
    <Fragment>
      <NavBar />
      <Container>
        <BackBtn pos="absolute" handleClick={() => history.goBack()} />
        {FilteredData ? (
          <Box>
            <Title2 textAlign="center" mx={8} mb={10}>
              {FilteredData.name}
            </Title2>
            {FilteredData.value.map(({ title, slides, url }, index: number) => (
              <Box borderRadius="2xl" my={6} pos="relative" key={index}>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  layerStyle="selectionBox"
                  _hover={!url ? { bgColor: 'unset' } : undefined}
                  opacity={url ? 1.0 : 0.35}
                  cursor="pointer"
                  p={4}
                  onClick={url ? () => history.push(url) : undefined}
                  borderRadius="2xl"
                >
                  <Box>
                    <Headline>{title}</Headline>
                    <Text textStyle="Body2" mt={1}>
                      {slides} slides
                    </Text>
                  </Box>
                  <Icon as={Academy} h="auto" w="auto" />
                </Flex>
              </Box>
            ))}
            <Center
              pos="absolute"
              w="100%"
              top="50%"
              left="0%"
              textAlign="center"
              sx={{ transform: 'rotate(-35deg)' }}
              color={comingSoonColor}
              pointer="none"
              textStyle="LargeTitle"
            >
              Coming Soon
            </Center>
          </Box>
        ) : (
          <Title2 textAlign="center" mt={20}>
            Not Found
          </Title2>
        )}
      </Container>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default CourseDetail;

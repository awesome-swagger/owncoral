import type React from 'react';
import { Fragment, lazy } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Center, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { Headline, Title2 } from '../../../../components/text';
import { titleToUrlFragment } from '../../lib';

import { Data } from '../../../../lib/courseDetailData';

import Academy from '../../../../assets/academy-1.svg';

const Error404 = lazy(() => import('../../../error404'));

const CourseDetail: React.FC = () => {
  const { title }: { title: string } = useParams();
  const history = useHistory();

  const comingSoonColor = useColorModeValue('gray.300', 'whiteAlpha.400');
  const isProduction = import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'production';

  const filteredData = Data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name) === title
  );

  return filteredData ? (
    <Fragment>
      <BackBtn pos="absolute" handleClick={() => history.goBack()} />
      <Box>
        <Title2 textAlign="center" mx={8} mb={10} mt={2}>
          {filteredData.name}
        </Title2>
        {filteredData.value.map(({ title, slides, url, hideInProd=false }, index: number) => {
          return (isProduction && hideInProd) ? null : (
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
          );
        })}
        <Center
          pos="absolute"
          w="100%"
          top={isProduction ? "35%" : "75%"}
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
    </Fragment>
  ) : (
    <Error404 isComponent />
  );
}

// eslint-disable-next-line import/no-default-export
export default CourseDetail;

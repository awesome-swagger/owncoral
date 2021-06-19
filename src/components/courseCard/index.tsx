import type React from 'react';
import { Center, Flex, Image } from '@chakra-ui/react';

import { Headline, Subhead } from '../../components/text';

export const CourseCard: React.FC<{
  image: string;
  name: string;
  lesson: number;
  handleClick: any;
}> = ({ image, name, lesson, handleClick }) => (
  <Flex
    flexDirection="column"
    onClick={() => handleClick(name)}
    cursor="pointer"
    borderRadius="2xl"
    textAlign="center"
    layerStyle="selectionBox"
    width="calc(50% - 1rem)"
    minWidth={40}
    maxWidth={44}
    height="224px"
    mx={2}
    my={3}
    py={2}
    px={4}
    filter="drop-shadow(0px 2px 8px rgba(56, 53, 50, 0.04))"
  >
    <Image minH={24} h={24} src={image} alt="course_image" mx="auto" />
    <Center flexDirection="column" h="100%">
      <Headline my={2}>{name}</Headline>
      <Subhead>{lesson} lessons</Subhead>
    </Center>
  </Flex>
);

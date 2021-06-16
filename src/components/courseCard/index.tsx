import { Image, Flex, Center } from '@chakra-ui/react';
import { Headline, Subhead } from '../../components/text';

export const CourseCard: React.FC<{
  image: string;
  name: string;
  lesson: number;
  handleClick: any;
}> = ({ image, name, lesson, handleClick }) => {
  return (
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
      my={2}
      py={2}
      px={4}
    >
      <Image minH={24} h={24} src={image} alt="course_image" mx="auto" />
      <Center flexDirection="column" h="100%">
        <Headline my={2}>{name}</Headline>
        <Subhead>{lesson} lessons</Subhead>
      </Center>
    </Flex>
  );
};

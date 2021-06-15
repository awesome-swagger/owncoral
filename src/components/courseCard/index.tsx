import { useEffect, useState } from 'react';
import { Image, Box } from '@chakra-ui/react';
import { Headline, Subhead } from '../../components/text';

export const CourseCard: React.FC<{
  image: string;
  name: string;
  lesson: number;
  top?: number;
}> = ({ image, name, lesson, top = 0 }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Box
      position="relative"
      cursor="pointer"
      borderRadius="2xl"
      textAlign="center"
      layerStyle="selectionBox"
      width="calc(50% - 1rem)"
      height={
        windowWidth > 623 && windowWidth < 768 ? 'auto' : windowWidth < 426 ? 'auto' : 'fit-content'
      }
      top={windowWidth > 623 && windowWidth < 768 ? 0 : windowWidth > 425 ? -top : 0}
      minWidth={40}
      maxWidth={48}
      my={2}
      py={2}
      px={4}
    >
      <Image h={20} src={image} alt="course_image" mx="auto" />
      <Headline my={2}>{name}</Headline>
      <Subhead>{lesson} lessons</Subhead>
    </Box>
  );
};

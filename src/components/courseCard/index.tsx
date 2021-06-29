import type React from 'react';
import { Box, Center, CenterProps, Flex, Image } from '@chakra-ui/react';

import { Headline, Subhead } from '../../components/text';

export const CourseCard: React.FC<{
  image: string;
  name: string;
  lesson: number;
  handleClick: any;
  isComingSoon: boolean;
}> = ({ image, name, lesson, handleClick, isComingSoon, children }) => (
  <Box
    onClick={() => !isComingSoon && handleClick(name)}
    cursor={isComingSoon ? undefined : 'pointer'}
    borderRadius="2xl"
    layerStyle={isComingSoon ? undefined : 'selectionBox'}
    width="calc(50% - 1rem)"
    minWidth={38}
    maxWidth={44}
    height="224px"
    mx={2}
    my={3}
    pos="relative"
    filter="drop-shadow(0px 2px 8px rgba(56, 53, 50, 0.04))"
  >
    <Flex
      flexDirection="column"
      textAlign="center"
      py={6}
      px={4}
      opacity={isComingSoon ? 0.35 : 1.0}
    >
      <Image minH={24} h={24} src={image} alt="course_image" mx="auto" />
      <Center flexDirection="column" h="100%">
        <Headline my={2}>{name}</Headline>
        <Subhead>{lesson} lessons</Subhead>
      </Center>
    </Flex>
    {isComingSoon && <ComingSoonOverlay />}
  </Box>
);

const ComingSoonOverlay: React.FC<CenterProps> = (props) => (
  <Center
    {...props}
    top={0}
    left={0}
    h="60%"
    w="100%"
    textStyle="Title1"
    fontSize="24px"
    pos="absolute"
  >
    <Box textAlign="center" sx={{ transform: 'rotate(-35deg)' }} color="gray.500">
      Coming Soon
    </Box>
  </Center>
);

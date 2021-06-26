import type React from 'react';
import { useHistory } from 'react-router-dom';
import type { CenterProps } from '@chakra-ui/react';
import { Box, Center, Flex } from '@chakra-ui/react';

import { CourseCard } from '../../../components';
import { Data } from '../../../lib/courseDetailData';
import { titleToUrlFragment } from '../lib';

export const Courses: React.FC = () => {
  const history = useHistory();
  const handleClick = (route: string) =>
    history.push(`/academy/course/${titleToUrlFragment(route)}`);

  return (
    <Flex flexWrap="wrap" justifyContent="space-around" mt={4}>
      {Data.map(({ name, lesson, image, isComingSoon }, index) => (
        <CourseCard
          key={index}
          image={image}
          name={name}
          lesson={lesson}
          handleClick={handleClick}
          isComingSoon={isComingSoon === undefined ? true : isComingSoon}
        />
      ))}
    </Flex>
  );
};

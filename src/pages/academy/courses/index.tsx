import type React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { titleToUrlFragment } from '../lib';
import { CourseCard } from '../../../components';
import { Data } from '../../../lib/courseDetailData';

export const Courses: React.FC = () => {
  const history = useHistory();
  const { url: coursesUrl } = useRouteMatch();

  const handleClick = (route: string) =>
    history.push(coursesUrl + '/' + titleToUrlFragment(route));

  return (
    <Flex flexWrap="wrap" justifyContent="space-around" mt={12}>
      {Data.map(({ name, lessons, image, isComingSoon }, index) => (
        <CourseCard
          key={index}
          image={image}
          name={name}
          lesson={lessons.length}
          handleClick={handleClick}
          isComingSoon={isComingSoon === undefined ? true : isComingSoon}
        />
      ))}
    </Flex>
  );
}

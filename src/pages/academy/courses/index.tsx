import { Fragment } from 'react';
import { Flex } from '@chakra-ui/react';
import { CourseCard } from '../../../components';
import { useHistory } from 'react-router-dom';
import { titleToUrlFragment } from '../lib';
import { Data } from '../../../lib/courseDetailData';

export const Courses: React.FC = () => {
  const history = useHistory();
  const handleClick = (route: string) =>
    history.push(`/academy/course/${titleToUrlFragment(route)}`);

  return (
    <Fragment>
      <Flex flexWrap="wrap" justifyContent="space-around" mt={4}>
        {Data.map(({ name, lesson, image }) => (
          <CourseCard image={image} name={name} lesson={lesson} handleClick={handleClick} />
        ))}
      </Flex>
    </Fragment>
  );
};

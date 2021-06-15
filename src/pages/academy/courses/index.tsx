import { Fragment } from 'react';
import { Flex } from '@chakra-ui/react';
import { CourseCard } from '../../../components';
import Fundamentals from '../../../assets/fundamentals.png';
import Sources from '../../../assets/sources.png';
import Understanding from '../../../assets/understanding.png';
import Valuing from '../../../assets/valuing.png';
import Optimization from '../../../assets/optimization.png';
import Fringilla from '../../../assets/fringilla.png';

export const Courses: React.FC = () => {
  return (
    <Fragment>
      <Flex flexWrap="wrap" justifyContent="space-around" mt={4}>
        <CourseCard image={Fundamentals} name="Real state fundamentals" lesson={4} />
        <CourseCard image={Sources} name="Sources of return" lesson={4} />
        <CourseCard image={Understanding} name="Understanding listings" lesson={5} />
        <CourseCard image={Valuing} name="Valuing real estate" lesson={2} top={6} />
        <CourseCard image={Optimization} name="Optimization for tax-efficiency" lesson={2} />
        <CourseCard image={Fringilla} name="Fringilla est enim" lesson={5} top={12} />
      </Flex>
    </Fragment>
  );
};

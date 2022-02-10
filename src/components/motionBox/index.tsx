import {  Box,  BoxProps } from '@chakra-ui/layout';
import {  motion } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box);

interface PropsT {
  children: React.ReactNode;
  custom: number;
}

type SlideMotionBoxT = React.FC<PropsT>;

export const SlideMotionBox: SlideMotionBoxT = ({ children, custom }) => {
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100vw' : '-100vw',
        opacity: 0,
        transition: { duration: 0.5 },
      };
    },
    visible: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? '100vw' : '-100vw',
        opacity: 0,
        transition: { duration: 0.5 },
      };
    },
  };
  return (
    <MotionBox
      variants={variants}
      initial="enter"
      animate="visible"
      exit="exit"
      height="100%"
      width="100%"
      position="absolute"
      custom={custom}
    >
      {children}
    </MotionBox>
  );
};

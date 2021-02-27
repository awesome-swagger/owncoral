// @ts-nocheck
import React from 'react';
import { Box } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';

interface BackBtnProps {
  pos?: 'initial' | 'absolute';
  handleClick: () => void;
}

export const BackBtn: React.FC<BackBtnProps> = ({ pos = 'initial', handleClick }: BackBtnProps) => (
  <Box pos={pos} top="1.5rem" left="1.5rem" cursor="pointer" onClick={handleClick}>
    <BsChevronLeft style={{ height: '1rem', width: '1rem' }} />
  </Box>
);

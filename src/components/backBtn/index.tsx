// @ts-nocheck
import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';

type BackBtnProps = {
  pos?: 'initial' | 'absolute';
  handleClick: () => void;
};

export const BackBtn: React.FC<BackBtnProps> = ({ pos = 'initial', handleClick }: BackBtnProps) => (
  <Box pos={pos} top={6} left={6} h={6} w={6} cursor="pointer" onClick={handleClick}>
    <Icon as={BsChevronLeft} h={4} w={4} />
  </Box>
);

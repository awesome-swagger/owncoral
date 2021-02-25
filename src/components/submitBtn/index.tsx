import type React from 'react';
import { Button } from '@chakra-ui/react';

type SubmitBtnProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ label, onClick }: SubmitBtnProps) => (
  <Button
    pos="absolute"
    bottom="2.5rem"
    left="1.5rem"
    w="calc(100% - 3rem)"
    h="3rem"
    type="submit"
    bg="#4E504F"
    color="#fff"
    onClick={onClick}
    cursor="pointer"
  >
    {label}
  </Button>
);

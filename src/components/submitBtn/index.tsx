import type React from 'react';
import { Button } from '@chakra-ui/react';

type SubmitBtnProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ label, onClick }: SubmitBtnProps) => (
  <Button
    pos="absolute"
    bottom="42px"
    left="24px"
    w="calc(100% - 48px)"
    h="48px"
    type="submit"
    bg="#4E504F"
    color="#fff"
    onClick={onClick}
    cursor="pointer"
  >
    {label}
  </Button>
);

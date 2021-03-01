import type React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';

type SubmitBtnProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({
  label,
  onClick,
  disabled,
}: SubmitBtnProps) => {
  const colorScheme = useColorModeValue('primary', 'secondary');

  return (
    <Button
      pos="absolute"
      bottom={10}
      left={6}
      w="calc(100% - 3rem)"
      h={12}
      type="submit"
      colorScheme={colorScheme}
      onClick={onClick}
      disabled={disabled}
      cursor="pointer"
    >
      {label}
    </Button>
  );
};

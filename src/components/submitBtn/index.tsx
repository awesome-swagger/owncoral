import type React from 'react';
import type { ButtonProps } from '@chakra-ui/react';
import { Button, forwardRef, Heading } from '@chakra-ui/react';

type SubmitBtnProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const SubmitBtn = forwardRef<SubmitBtnProps & ButtonProps, 'button'>(
  ({ label, ...buttonProps }, ref) => (
    <Button
      pos="absolute"
      bottom={10}
      left={6}
      w="calc(100% - 3rem)"
      h={12}
      type="submit"
      cursor="pointer"
      ref={ref}
      {...buttonProps}
    >
      {label}
    </Button>
  ),
);

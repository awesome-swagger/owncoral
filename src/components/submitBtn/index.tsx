import type React from 'react';
import type { ButtonProps } from '@chakra-ui/react';
import { Button, forwardRef } from '@chakra-ui/react';

type SubmitBtnProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const SubmitBtn = forwardRef<SubmitBtnProps & ButtonProps, 'button'>(
  ({ label, ...buttonProps }, ref) => (
    <Button
      bottom={6}
      pos={{ base: 'fixed', md: 'initial' }}
      w={{ base: 'calc(100% - 3rem)', md: '100%' }}
      type="submit"
      ref={ref}
      {...buttonProps}
    >
      {label}
    </Button>
  ),
);

import type React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { forwardRef, Icon, IconButton, IconButtonProps } from '@chakra-ui/react';

type BackBtnProps = {
  handleClick: () => void;
  'aria-label'?: string;
};

export const BackBtn = forwardRef<Omit<IconButtonProps, 'aria-label'> & BackBtnProps, 'button'>(
  (props, ref) => {
    return (
      <IconButton
        icon={<Icon as={FiChevronLeft} h={7} w={7} />}
        aria-label="Back button"
        variant="unstyled"
        onClick={props.handleClick}
        _focus={{ boxShadow: 0 }}
        ref={ref}
        {...props}
      />
    );
  },
);

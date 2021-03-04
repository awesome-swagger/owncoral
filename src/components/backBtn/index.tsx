import type React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { forwardRef, Icon, IconButton, IconButtonProps } from '@chakra-ui/react';

type BackBtnProps = {
  handleClick: () => void;
};

export const BackBtn = forwardRef<Omit<IconButtonProps & BackBtnProps, 'aria-label'>, 'button'>(
  (props, ref) => {
    const { handleClick }: BackBtnProps = props;

    return (
      <IconButton
        icon={<Icon as={FiChevronLeft} h={7} w={7} />}
        aria-label="Back button"
        variant="unstyled"
        onClick={handleClick}
        _focus={{ boxShadow: 0 }}
        ref={ref}
        {...props}
      />
    );
  },
);

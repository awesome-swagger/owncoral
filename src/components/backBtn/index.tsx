import type React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { forwardRef, Icon, IconButton, IconButtonProps } from '@chakra-ui/react';

type BackBtnProps = {
<<<<<<< HEAD
  pos?: 'initial' | 'absolute';
=======
>>>>>>> 9a8895d69a3eef04519239f54f9a1803ade3b70f
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

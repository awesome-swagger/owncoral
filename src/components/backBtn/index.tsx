import type { Dispatch } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { forwardRef, Icon, IconButton, IconButtonProps } from '@chakra-ui/react';

type BackBtnProps = {
  handleClick: Dispatch<any>;
  'aria-label'?: string;
};

export const BackBtn = forwardRef<Omit<IconButtonProps, 'aria-label'> & BackBtnProps, 'button'>(
  (props, ref) => {
    const { handleClick, ...otherProps } = props;

    return (
      <IconButton
        icon={<Icon as={FiChevronLeft} h={7} w={7} />}
        aria-label="Back button"
        variant="unstyled"
        onClick={handleClick}
        _focus={{ boxShadow: 0 }}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

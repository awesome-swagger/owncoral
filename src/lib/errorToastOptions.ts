import type { UseToastOptions } from '@chakra-ui/toast';

export const DEFAULT_ERROR_TOAST: UseToastOptions = {
  title: 'An error occurred',
  status: 'error',
  duration: 9000,
  isClosable: true,
};

export const DEFAULT_SUCCESS_TOAST: UseToastOptions = {
  title: 'Success',
  status: 'success',
  duration: 5000,
  isClosable: true,
};

export const DEFAULT_WARNING_TOAST: UseToastOptions = {
  title: 'Warning',
  status: 'warning',
  duration: 9000,
  isClosable: true,
};

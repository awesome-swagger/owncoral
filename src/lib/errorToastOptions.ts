import type { UseToastOptions } from '@chakra-ui/toast';

export const DEFAULT_ERROR_TOAST: UseToastOptions = {
  title: 'An error occurred.',
  status: 'error',
  duration: 9000,
  isClosable: true,
};

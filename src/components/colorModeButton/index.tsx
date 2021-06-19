import { FiMoon, FiSun } from 'react-icons/fi';
import {
  forwardRef,
  IconButton,
  IconButtonProps,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';

/**
 * Color mode button that only shows up in dev mode.
 */
export const ColorModeButton = forwardRef<Omit<IconButtonProps, 'aria-label'>, 'button'>(
  (props, ref) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isTouch] = useMediaQuery('(pointer: coarse)');

    if( import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV !== 'development' ) return null;

    return (
      <IconButton
        aria-label=""
        aria-hidden={true}
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        colorScheme="gray"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 0 }}
        _active={isTouch ? {} : { transform: 'scale(0.9)' }}
        ref={ref}
        {...props}
      />
    );
  },
);

import type { ReactNode } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Flex } from '@chakra-ui/react';

export const Option = ({
  children,
  onClick,
  icon = true,
  borderRadius = false,
  className = '',
}: {
  children: ReactNode;
  onClick?: any;
  icon?: boolean;
  borderRadius?: boolean;
  className?: string;
}) => {
  return (
    <Flex
      m="1px 0"
      p={3}
      layerStyle="selectionBox"
      textAlign="left"
      cursor="pointer"
      pos="relative"
      borderRadius={borderRadius ? 'full' : ''}
      alignItems="center"
      textStyle="h5"
      onClick={onClick}
      className={className}
    >
      {children}
      {icon ? (
        <FiChevronRight
          style={{
            height: '1rem',
            width: '1rem',
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      ) : (
        ''
      )}
    </Flex>
  );
};

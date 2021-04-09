import type { ReactNode } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Flex, Heading } from '@chakra-ui/react';

export const Option = ({
  children,
  onClick,
  icon = true,
  borderRadius = false,
}: {
  children: ReactNode;
  onClick?: any;
  icon?: boolean;
  borderRadius?: boolean;
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

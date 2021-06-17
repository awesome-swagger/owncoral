import type { ReactNode } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Flex, Icon } from '@chakra-ui/react';

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
      as="li"
      p={3}
      borderTop="1px"
      borderColor="gray.200"
      marginTop="-1px"
      layerStyle="selectionBox"
      textAlign="left"
      cursor="pointer"
      pos="relative"
      borderRadius={borderRadius ? 'full' : ''}
      alignItems="center"
      textStyle="BodyText2"
      onClick={onClick}
      className={className}
    >
      {children}
      {icon ? (
        <Icon
          as={FiChevronRight}
          color="gray.500"
          h={4}
          w={4}
          pos="absolute"
          right={3}
          top="50%"
          style={{
            transform: 'translateY(-50%)',
          }}
        />
      ) : (
        ''
      )}
    </Flex>
  );
};

import type { ReactNode } from 'react';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

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
  const bgColor = useColorModeValue('gray.100', 'whiteAlpha.100');
  const color = useColorModeValue('gray.900', 'whiteAlpha.900');
  const hover = useColorModeValue({ bg: 'primary.100' }, { bg: 'secondary.800' });

  return (
    <Heading fontSize="sm" m="0">
      <Flex
        m="1px 0"
        p={3}
        _hover={hover}
        bg={bgColor}
        color={color}
        textAlign="left"
        cursor="pointer"
        pos="relative"
        borderRadius={borderRadius ? 'full' : ''}
        alignItems="center"
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
    </Heading>
  );
};

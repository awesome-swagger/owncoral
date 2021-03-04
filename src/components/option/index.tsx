import type { ReactNode } from 'react';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';

export const Option = ({
  children,
  onClick,
  icon = true,
}: {
  children: ReactNode;
  onClick?: any;
  icon?: boolean;
}) => {
  const bgColor = useColorModeValue('#f3f3f3', 'rgba(255, 255, 255, 0.15)');
  const color = useColorModeValue('#4E504F', 'rgba(255, 255, 255, 0.15)');

  return (
    <Heading fontSize="sm" m="0">
      <Flex
        m="1px 0"
        p={3}
        bg={bgColor}
        color={color}
        textAlign="left"
        cursor="pointer"
        pos="relative"
        alignItems="center"
        onClick={onClick}
      >
        {children}
        {icon ? (
          <BsChevronRight
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

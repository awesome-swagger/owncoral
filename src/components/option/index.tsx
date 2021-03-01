import { Flex, useColorModeValue } from '@chakra-ui/react';
import { HeadingTypography } from '../../components';
import { BsChevronRight } from 'react-icons/bs';

export const Option = ({ children, onClick }: { children: React.ReactNode; onClick?: any }) => {
  const bgColor = useColorModeValue('#f3f3f3', 'rgba(255, 255, 255, 0.15)');
  const color = useColorModeValue('#4E504F', 'rgba(255, 255, 255, 0.15)');

  return (
    <HeadingTypography fontSize="sm" m="0">
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
      </Flex>
    </HeadingTypography>
  );
};

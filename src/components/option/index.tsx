/* eslint-disable import/no-duplicates */
import type { ElementType, FC, ReactNode } from 'react';
import type React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react';

type OptionGroupPropsT = {};
export const OptionGroup: FC<OptionGroupPropsT> = ({ children }) => (
  <Box
    as="ul"
    filter="drop-shadow(0px 2px 8px rgba(56, 53, 50, 0.04))"
    borderRadius="2xl"
    overflow="hidden"
  >
    {children}
  </Box>
);

export const Option = ({
  children,
  onClick,
  icon = FiChevronRight,
  borderRadius = false,
  className = '',
}: {
  children: ReactNode;
  onClick?: any;
  icon?: ElementType | null;
  borderRadius?: boolean;
  className?: string;
}) => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');

  return (
    <Flex
      as="li"
      p={3}
      borderTop="1px"
      borderColor={borderColor}
      sx={{
        '&:first-of-type': {
          borderTop: 'unset',
        },
      }}
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
      {icon && (
        <Icon
          as={icon}
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
      )}
    </Flex>
  );
};

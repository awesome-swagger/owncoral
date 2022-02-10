import type React from 'react';
import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiChevronRight, FiCircle } from 'react-icons/fi';

type SelectBoxPropsT = {
  value: string | number;
  state?: string | string[] | number | null;
  icon?: 'chevron' | 'checkbox';
  handleClick: () => void;
  children?: React.ReactNode;
}

export const SelectBox: React.FC<SelectBoxPropsT> = ({
  value,
  state,
  icon,
  handleClick,
  children = null
}) => {
  const selectBoxBg = useColorModeValue('blue.50', 'whiteAlpha.100');
  const selectBoxBgSecondary = useColorModeValue('secondary.100', 'secondary.800');
  const selectBoxSelected = useColorModeValue('gray.300', 'whiteAlpha.400');
  const selectBoxText = useColorModeValue('black', 'white');

  return (
    <Box
      px={6}
      py={3}
      mt={2}
      textAlign="left"
      cursor="pointer"
      pos="relative"
      borderRadius="full"
      color={selectBoxText}
      _hover={{ bg: selectBoxBgSecondary }}
      _active={{ bg: selectBoxBgSecondary }}
      bg={
        value === state || (Array.isArray(state) && state.length > 0 && state.includes(value.toString()))
          ? selectBoxSelected
          : selectBoxBg
      }
      onClick={() => {
        setTimeout(() => {
          handleClick();
        }, 200);
      }}
    >
      {icon === 'checkbox' && (
        <Icon
          as={
            value === state || (Array.isArray(state) && state.length > 0 && state.includes(value.toString()))
              ? FaCheckCircle
              : FiCircle
          }
          layerStyle="iconColor"
          bg="transparent !important"
          h={5}
          w={5}
          mr={2}
        />
      )}
      {children || value}
      {icon === 'chevron' && (
        <Icon pos="absolute" top="50%" right={4} transform="translateY(-50%)" as={FiChevronRight} />
      )}
    </Box>
  );
};

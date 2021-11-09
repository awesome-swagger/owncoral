import { Box, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiChevronRight, FiCircle } from 'react-icons/fi';

interface PropsT {
  value: string;
  state?: string | string[];
  handleClick: () => void;
  icon?: false | 'chevron' | 'checkbox';
}

export const SelectBox: React.FC<PropsT> = ({ value, state, handleClick, icon = 'chevron' }) => {
  const selectBoxBg = useColorModeValue('blue.50', 'whiteAlpha.100');
  const selectBoxText = useColorModeValue('black', 'white');
  const selectBoxBgSecondary = useColorModeValue('secondary.100', 'secondary.800');
  const selectBoxSelected = useColorModeValue('gray.300', 'whiteAlpha.400');

  return (
    <Box
      px={6}
      py={3}
      mt={2}
      textAlign="left"
      cursor="pointer"
      pos="relative"
      key={value}
      borderRadius="full"
      color={selectBoxText}
      _hover={{ bg: selectBoxBgSecondary }}
      _active={{ bg: selectBoxBgSecondary }}
      bg={
        value === state || (state && state.length > 0 && state.includes(value))
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
            value === state || (state && state.length > 0 && state.includes(value))
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
      {value}
      {icon === 'chevron' && (
        <Icon pos="absolute" top="50%" right={4} transform="translateY(-50%)" as={FiChevronRight} />
      )}
    </Box>
  );
};

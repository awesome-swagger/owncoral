import { Heading, Box } from '@chakra-ui/react';
import { Option, BackBtn } from '../../../components';

export const InvestmentGoal = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p="1.5rem">
      <BackBtn handleClick={goBack} pos="absolute" />
      <Heading pos="absolute" right="1.5rem" top="1.5rem" m="0" fontSize="1.25rem" cursor="pointer">
        Save
      </Heading>
      <Heading m=" 0 0 1.5rem 0" fontSize="1.25rem" align="center">
        Investment Goals
      </Heading>
      <Option>Lorem Ipsum</Option>
      <Box p="3px" />

      <Option>Dolor Sir</Option>
      <Box p="3px" />

      <Option>Amet</Option>
      <Box p="3px" />

      <Option>Dolor Sir</Option>
      <Box p="3px" />

      <Option>Lorem</Option>
    </Box>
  );
};

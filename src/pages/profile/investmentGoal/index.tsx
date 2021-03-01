import { Box } from '@chakra-ui/react';
import { Option, BackBtn, HeadingTypography } from '../../../components';

export const InvestmentGoal = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p={6}>
      <BackBtn handleClick={goBack} pos="absolute" />
      <HeadingTypography pos="absolute" right={6} top={6} m="0" fontSize={5} cursor="pointer">
        Save
      </HeadingTypography>
      <HeadingTypography mb={6} mt="0" mx="0" fontSize={5} align="center">
        Investment Goals
      </HeadingTypography>
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

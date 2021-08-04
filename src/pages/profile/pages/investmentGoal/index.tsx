import { Box, Heading } from '@chakra-ui/react';

import { BackBtn, Option } from '../../../../components';

export const InvestmentGoal = ({ goBack }: { goBack: () => void }) => (
  <Box>
    <BackBtn handleClick={goBack} pos="absolute" />
    <Heading pos="absolute" right={6} top={6} m="0" fontSize="lg" cursor="pointer">
      Save
    </Heading>
    <Heading mb={6} mt="0" mx="0" fontSize="lg" align="center">
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

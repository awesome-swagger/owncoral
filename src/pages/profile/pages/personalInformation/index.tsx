import type React from 'react';
import { Box, FormControl, Switch, Heading } from '@chakra-ui/react';
import { Option, BackBtn } from '../../../../components';

export const PersonalInformation = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box>
      <BackBtn handleClick={goBack} pos="absolute" />
      <Heading pos="absolute" right={6} top={6} m="0" fontSize="lg" cursor="pointer">
        Save
      </Heading>
      <Heading mb={6} mt="0" mx="0" fontSize="lg" align="center">
        Personal Information
      </Heading>
      <Option>Full Name</Option>
      <Box p="3px" />

      <Option>Birth Date</Option>
      <Box p="3px" />

      <Option>Email</Option>
      <Box p="3px" />

      <Option>Residental Address</Option>
      <Box p="3px" />

      <Option>Phone Number</Option>
      <Box p="3px" />

      <Option>Social Security Number</Option>
      <Box p="3px" />

      <Option icon={false}>
        <FormControl justifyContent="space-between" display="flex" alignItems="center">
          I&#39;m an accredited visitor
          <Switch id="Features" />
        </FormControl>
      </Option>
    </Box>
  );
};

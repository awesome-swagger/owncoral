import { Heading, Box } from '@chakra-ui/react';
import { Option, BackBtn } from '../../../components';

export const PersonalInformation = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p="1.5rem">
      <BackBtn handleClick={goBack} pos="absolute" />
      <Heading pos="absolute" right="1.5rem" top="1.5rem" m="0" fontSize="1.25rem" cursor="pointer">
        Save
      </Heading>
      <Heading m=" 0 0 1.5rem 0" fontSize="1.25rem" align="center">
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

      <Option>I'm an accredited visitor</Option>
    </Box>
  );
};

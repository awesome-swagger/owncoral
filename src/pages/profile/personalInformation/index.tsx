import { Box } from '@chakra-ui/react';
import { Option, BackBtn, HeadingTypography } from '../../../components';

export const PersonalInformation = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p={6}>
      <BackBtn handleClick={goBack} pos="absolute" />
      <HeadingTypography pos="absolute" right={6} top={6} m="0" fontSize={5} cursor="pointer">
        Save
      </HeadingTypography>
      <HeadingTypography mb={6} mt="0" mx="0" fontSize={5} align="center">
        Personal Information
      </HeadingTypography>
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

      <Option>I&#39;m an accredited visitor</Option>
    </Box>
  );
};

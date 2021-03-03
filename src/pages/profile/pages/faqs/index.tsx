import { Box } from '@chakra-ui/react';
import { Option, BackBtn, HeadingTypography } from '../../../../components';

export const Faqs = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p={6}>
      <BackBtn handleClick={goBack} pos="absolute" />

      <HeadingTypography mb={6} mt="0" mx="0" fontSize="lg" align="center">
        FAQS
      </HeadingTypography>
      <Option>Lorem ipsum dolor sir amet?</Option>
      <Box bg="gray.300" p=".5px" />

      <Option>Amet minim mollit non desernut?</Option>
      <Box bg="gray.300" p=".5px" />

      <Option>Exercitation veniam consequat?</Option>
      <Box bg="gray.300" p=".5px" />

      <Option>Nunc aliqu</Option>
    </Box>
  );
};

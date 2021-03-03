import { Box } from '@chakra-ui/react';
import { ImFileEmpty } from 'react-icons/all';
import { Option, HeadingTypography } from '../../../components';

export const Legal = () => (
  <Box mt={8}>
    <HeadingTypography fontSize="md">Legal</HeadingTypography>
    <Option icon={false}>
      <ImFileEmpty
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <HeadingTypography fontSize="sm" m="0">
        Terms & Conditions
      </HeadingTypography>
    </Option>
    <Option icon={false}>
      <ImFileEmpty
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <HeadingTypography fontSize="sm" m="0">
        Privacy Policy
      </HeadingTypography>
    </Option>
  </Box>
);

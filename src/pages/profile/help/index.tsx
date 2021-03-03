import { Box } from '@chakra-ui/react';
import { BsCircle, BsQuestionCircle, BiSupport } from 'react-icons/all';
import { Option, HeadingTypography } from '../../../components';

export const Help = ({ handleClick }: { handleClick: (x: Number) => void }) => {
  return (
    <Box mt={8}>
      <HeadingTypography fontSize="md">Help</HeadingTypography>
      <Option onClick={() => handleClick(4)}>
        <BsCircle
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <HeadingTypography fontSize="sm" m="0">
          About Coral
        </HeadingTypography>
      </Option>
      <Option onClick={() => handleClick(5)}>
        <BsQuestionCircle
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <HeadingTypography fontSize="sm" m="0">
          FAQS
        </HeadingTypography>
      </Option>
      <Option icon={false}>
        <BiSupport
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <HeadingTypography fontSize="sm" m="0">
          Support
        </HeadingTypography>
      </Option>
    </Box>
  );
};

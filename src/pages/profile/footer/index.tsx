import { FiLogOut, RiDeleteBin6Line } from 'react-icons/all';
import { Box } from '@chakra-ui/react';
import { Option, HeadingTypography } from '../../../components';

export const Footer = ({ handleClick }: { handleClick: (x: String) => void }) => (
  <Box mt={8}>
    <Option onClick={() => handleClick('LogOut')}>
      <FiLogOut
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <HeadingTypography fontSize="sm" m="0">
        Log out
      </HeadingTypography>
    </Option>
    <Option onClick={() => handleClick('DeleteAccount')}>
      <RiDeleteBin6Line
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <HeadingTypography fontSize="sm" m="0">
        Delete Account
      </HeadingTypography>
    </Option>
  </Box>
);

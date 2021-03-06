import { FiLogOut } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Box, Heading } from '@chakra-ui/react';
import { Option } from '../../../components';

export const Footer = ({ handleClick }: { handleClick: (x: String) => void }) => (
  <Box mt={8} pb={20}>
    <Option onClick={() => handleClick('LogOut')}>
      <FiLogOut
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <Heading fontSize="sm" m="0">
        Log out
      </Heading>
    </Option>
    <Option onClick={() => handleClick('DeleteAccount')}>
      <RiDeleteBin6Line
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <Heading fontSize="sm" m="0">
        Delete Account
      </Heading>
    </Option>
  </Box>
);

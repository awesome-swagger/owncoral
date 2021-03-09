import type React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { Option } from '../../../components';

export const Footer = ({ popOver }: { popOver: boolean }) => {
  const history = useHistory();
  return (
    <Box mt={popOver ? 0 : 8} pb={popOver ? 0 : 20}>
      <Option onClick={() => history.push('/logout')}>
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
    </Box>
  );
};

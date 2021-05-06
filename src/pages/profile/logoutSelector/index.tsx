import type React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Box, Heading } from '@chakra-ui/react';

import { Option } from '../../../components';
import { fetchWrap } from '../../../lib/api';

export const LogoutSelector = ({ popOver }: { popOver: boolean }) => {
  const handleLogout = async () => {
    await fetchWrap('/api/logout', { method: 'GET' }, true);
    window.location.href = '/';
  };
  return (
    <Box mt={popOver ? 0 : 8} pb={popOver ? 0 : 20}>
      <Option onClick={handleLogout}>
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

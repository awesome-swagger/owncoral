import type React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { FaRegDotCircle } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

import { Option } from '../../../components';

export const Account = ({
  handleClick,
  popOver,
}: {
  handleClick: (x: Number) => void;
  popOver: boolean;
}) => {
  return (
    <Box mt={8}>
      <Heading fontSize="md" display={popOver ? 'none' : 'initial'}>
        Account
      </Heading>
      <Option onClick={() => handleClick(1)}>
        <BsPerson
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <Heading fontSize="sm" m="0">
          Personal Information
        </Heading>
      </Option>
      <Option onClick={() => handleClick(2)}>
        <FaRegDotCircle
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <Heading fontSize="sm" m="0">
          Investment Goal
        </Heading>
      </Option>
    </Box>
  );
};

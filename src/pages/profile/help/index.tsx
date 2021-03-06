import type React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { BsCircle, BsQuestionCircle } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { Option } from '../../../components';

export const Help = ({ handleClick }: { handleClick: (x: Number) => void }) => {
  return (
    <Box mt={8}>
      <Heading fontSize="md">Help</Heading>
      <Option onClick={() => handleClick(4)}>
        <BsCircle
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <Heading fontSize="sm" m="0">
          About Coral
        </Heading>
      </Option>
      <Option onClick={() => handleClick(5)}>
        <BsQuestionCircle
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <Heading fontSize="sm" m="0">
          FAQS
        </Heading>
      </Option>
      <Option icon={false}>
        <BiSupport
          style={{
            height: '1.25rem',
            width: '1.25rem',
            marginRight: '0.5rem',
          }}
        />
        <Heading fontSize="sm" m="0">
          Support
        </Heading>
      </Option>
    </Box>
  );
};

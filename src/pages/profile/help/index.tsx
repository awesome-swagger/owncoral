import type React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { BsCircle, BsQuestionCircle } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { Option } from '../../../components';

export const Help = ({
  handleClick,
  popOver,
}: {
  handleClick: (x: Number) => void;
  popOver: boolean;
}) => {
  return (
    <Box mt={popOver ? 0 : 8}>
      <Heading fontSize="md" display={popOver ? 'none' : 'initial'}>
        Help
      </Heading>
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
      {/* <Option icon={false}>
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
      </Option> */}
    </Box>
  );
};

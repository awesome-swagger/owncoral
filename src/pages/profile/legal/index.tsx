import type React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ImFileEmpty } from 'react-icons/im';
import { Option } from '../../../components';

export const Legal = ({ popOver }: { popOver: boolean }) => (
  <Box mt={popOver ? 0 : 8}>
    <Heading fontSize="md" display={popOver ? 'none' : 'initial'}>
      Legal
    </Heading>
    <Option icon={false}>
      <ImFileEmpty
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <Heading fontSize="sm" m="0">
        Terms & Conditions
      </Heading>
    </Option>
    <Option icon={false}>
      <ImFileEmpty
        style={{
          height: '1.25rem',
          width: '1.25rem',
          marginRight: '0.5rem',
        }}
      />
      <Heading fontSize="sm" m="0">
        Privacy Policy
      </Heading>
    </Option>
  </Box>
);

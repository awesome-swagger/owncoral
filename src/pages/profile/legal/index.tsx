import type React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { ImFileEmpty } from 'react-icons/im';
import { Box, Heading, Icon, Link as ChakraLink } from '@chakra-ui/react';

import { Option } from '../../../components';

export const Legal = ({ popOver }: { popOver: boolean }) => (
  <Box mt={popOver ? 0 : 8}>
    <Heading fontSize="md" display={popOver ? 'none' : 'initial'}>
      Legal
    </Heading>
    <Option icon={false}>
      <Icon as={FiExternalLink} w={5} h={5} mr={2} verticalAlign="baseline" />
      <ChakraLink href="https://www.owncoral.com/user-agreement" isExternal>
        <Heading fontSize="sm" m="0">
          User Agreement
        </Heading>
      </ChakraLink>
    </Option>
    <Option icon={false}>
      <Icon as={FiExternalLink} w={5} h={5} mr={2} verticalAlign="baseline" />
      <ChakraLink href="https://www.owncoral.com/privacy" isExternal>
        <Heading fontSize="sm" m="0">
          Privacy Policy
        </Heading>
      </ChakraLink>
    </Option>
  </Box>
);

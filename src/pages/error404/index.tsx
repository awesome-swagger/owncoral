import React, { Fragment } from 'react';
import { BiError } from 'react-icons/bi';
import { Center, Heading, Icon } from '@chakra-ui/react';

import { NavBar } from '../../components';

const Error404 = () => (
  <Fragment>
    <NavBar />
    <Center h="100vh">
      <Center
        flexDirection="column"
        boxShadow={{ base: 'none', md: 'lg' }}
        py={{ base: 0, md: 10 }}
        px={{ base: 0, md: 32 }}
        borderRadius="2xl"
      >
        <Icon as={BiError} h={{ base: 28, md: 40 }} w={{ base: 28, md: 40 }} />
        <Heading fontSize={{ base: '5xl', md: '7xl' }} m="0">
          404 Error
        </Heading>
        <Heading fontSize={{ base: 'xl', md: '3xl' }} mt="0">
          Page Not Found
        </Heading>
      </Center>
    </Center>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default Error404;

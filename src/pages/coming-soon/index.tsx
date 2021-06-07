import React, { Fragment } from 'react';
import { BsGear } from 'react-icons/bs';
import { Center, Icon, Text, VStack } from '@chakra-ui/react';

import { NavBar } from '../../components';
import { Title2 } from '../../components/text';

const ComingSoon = () => (
  <Fragment>
    <NavBar />
    <Center w="100%" h="100vh" pos="fixed" top={0}>
      <VStack align="center">
        <Icon as={BsGear} h={{ base: 28, md: 40 }} w={{ base: 28, md: 40 }} />
        <Title2>Coming Soon</Title2>
        <Text textStyle="Body1">Stay tuned, we&rsquo;re hard at work on this feature!</Text>
      </VStack>
    </Center>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default ComingSoon;

import { Fragment } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Center, Icon, Text, VStack } from '@chakra-ui/react';

import { NavBar } from '../../components';
import { Title2 } from '../../components/text';

const Error404 = () => (
  <Fragment>
    <NavBar />
    <Center align="center" w="100%" h="100vh" pos="fixed" top={0}>
      <VStack>
        <Icon as={FiAlertTriangle} h={{ base: 28, md: 40 }} w={{ base: 28, md: 40 }} />
        <Title2>Ooops!</Title2>
        <Text textStyle="Body1">Sorry, we couldn&rsquo;t find this page</Text>
      </VStack>
    </Center>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default Error404;

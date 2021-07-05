import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import { Button, Center, Icon, Text, VStack } from '@chakra-ui/react';

import { NavBar } from '../../components';
import { Title2 } from '../../components/text';

const Error404 = () => {
  const history = useHistory();

  return (
    <Fragment>
      <NavBar />
      <Center align="center" w="100%" h={window.innerHeight} pos="fixed" top={0}>
        <VStack>
          <Icon as={FiAlertTriangle} h={{ base: 28, md: 40 }} w={{ base: 28, md: 40 }} />
          <Title2>Ooops!</Title2>
          <Text textStyle="Body1">Sorry, we couldn&rsquo;t find this page</Text>
          <Button onClick={() => history.goBack()}>Go Back</Button>
        </VStack>
      </Center>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Error404;

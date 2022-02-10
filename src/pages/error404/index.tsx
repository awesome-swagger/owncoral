import { Fragment } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Text, VStack } from '@chakra-ui/react';

import { Container, NavBar } from '../../components';
import { Title2 } from '../../components/text';

const Error404 = ({ isComponent=false } : { isComponent?: boolean }) => {
  const history = useHistory();

  const errorComponent = (
    <VStack sx={{ transform: 'translate(0, 50%)' }}>
      <Icon as={FiAlertTriangle} h={{ base: 28, md: 40 }} w={{ base: 28, md: 40 }} />
      <Title2>Ooops!</Title2>
      <Text textStyle="Body1">Sorry, we couldn&rsquo;t find this page</Text>
      <Button onClick={() => history.goBack()}>Go Back</Button>
    </VStack>
  );

  return !isComponent ? (<Container>{errorComponent}</Container>) : errorComponent;
};

// eslint-disable-next-line import/no-default-export
export default Error404;

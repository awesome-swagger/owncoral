import { Fragment } from 'react';
import { Link as BrowserLink, useRouteMatch } from 'react-router-dom';
import { Button, Heading } from '@chakra-ui/react';

import { Container, NavBar } from '../../components';

const Drafts = () => {
  const { url: draftsUrl } = useRouteMatch();

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Heading>Draft Pages</Heading>
        <Button as={BrowserLink} to={`${draftsUrl}/old-portfolio`}>
          Old Portfolio
        </Button>
      </Container>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Drafts;

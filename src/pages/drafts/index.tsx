import { lazy } from 'react';
import { Link as BrowserLink, Switch, useRouteMatch } from 'react-router-dom';
import { Button, Heading, VStack } from '@chakra-ui/react';

import { Container, ProtectedRoute } from '../../components';
import { InvestmentProfileUrl, MapBoxUrl } from '../../lib/uriConstants';

const PortfolioSplash = lazy(() => import('./portfolio/splash'));
const Transaction = lazy(() => import('./transaction'));

const Drafts = () => {
  const { url: draftsRootUrl } = useRouteMatch();

  return (
    <Switch>
      <ProtectedRoute exact path={`${draftsRootUrl}`}>
        <DraftsMain draftsRootUrl={draftsRootUrl} />
      </ProtectedRoute>

      <ProtectedRoute
        exact
        path={draftsRootUrl + '/portfolio/splash'}
        component={PortfolioSplash}
      />

      <ProtectedRoute exact path={draftsRootUrl + '/transaction'} component={Transaction} />
    </Switch>
  );
};

const DraftsMain = ({ draftsRootUrl }: { draftsRootUrl: string }) => (
  <Container>
    <Heading textAlign="center" mb={6}>
      Draft Pages
    </Heading>
    <VStack>
      <Button colorScheme="secondary" as={BrowserLink} to={InvestmentProfileUrl}>
        New Investment
      </Button>

      <Button colorScheme="secondary" as={BrowserLink} to="/signup">
        Signup
      </Button>

      <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/portfolio/splash`}>
        Portfolio Splash screen
      </Button>

      <Button colorScheme="secondary" as={BrowserLink} to={MapBoxUrl}>
        MapBox
      </Button>

      <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/transaction`}>
        Transaction
      </Button>
    </VStack>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default Drafts;

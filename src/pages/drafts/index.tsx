import React, { Fragment, lazy } from 'react';
import { Link as BrowserLink, Switch, useRouteMatch } from 'react-router-dom';
import { Button, Heading, VStack } from '@chakra-ui/react';

import { Container, NavBar, ProtectedRoute } from '../../components';

const CourseCashFlow = lazy(() => import('../opportunity/courseCashFlow'));

const OldPortfolio = lazy(() => import('./oldPortfolio'));
const PortfolioSplash = lazy(() => import('./portfolio/splash'));
const Transaction = lazy(() => import('./transaction'));
const LearningCenter = lazy(() => import('./learningCenter'));

const Drafts = () => {
  const { url: draftsRootUrl } = useRouteMatch();

  return (
    <Switch>
      <ProtectedRoute exact path={`${draftsRootUrl}`}>
        <DraftsMain draftsRootUrl={draftsRootUrl} />
      </ProtectedRoute>

      <ProtectedRoute exact path={draftsRootUrl + '/old-portfolio'} component={OldPortfolio} />

      <ProtectedRoute
        exact
        path={draftsRootUrl + '/portfolio/splash'}
        component={PortfolioSplash}
      />

      <ProtectedRoute exact path={draftsRootUrl + '/transaction'} component={Transaction} />

      <ProtectedRoute exact path={draftsRootUrl + '/learning-center'} component={LearningCenter} />
      <Container pb={20}>
        <ProtectedRoute exact path={draftsRootUrl + '/course-cash'} component={CourseCashFlow} />
      </Container>
    </Switch>
  );
};

const DraftsMain = ({ draftsRootUrl }: { draftsRootUrl: string }) => {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Heading textAlign="center">Draft Pages</Heading>
        <VStack>
          <Button colorScheme="secondary" as={BrowserLink} to="/investment-profile">
            New Investment
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to="/signup">
            Signup
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/old-portfolio`}>
            Old Portfolio
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/portfolio/splash`}>
            Portfolio Splash screen
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to="/map-box">
            MapBox
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/transaction`}>
            Transaction
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/learning-center`}>
            Learning Center
          </Button>

          <Button colorScheme="secondary" as={BrowserLink} to={`${draftsRootUrl}/course-cash`}>
            Course Cash Flow
          </Button>
        </VStack>
      </Container>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Drafts;

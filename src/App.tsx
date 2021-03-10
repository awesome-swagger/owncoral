import React, { Fragment, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { ChakraProvider, Spinner, Flex } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import AppRootStyle from './AppRootStyle';
import { fetchWrap } from './lib/api';
import AppTheme from './theme';
import { h1, h2, h3, h4, h5, h6 } from './theme/textStyles';
import type { UserT } from './userContext';
import { UserContext } from './userContext';

import { DebugPanel } from './components';

import { default as Login, ForgotCheckEmail, ForgotPassword, NewPassword } from './pages/login';

const Portfolio = lazy(() => import('./pages/portfolio'));
const Profile = lazy(() => import('./pages/profile'));
const Property = lazy(() => import('./pages/property'));
const LoginFlow = lazy(() => import('./pages/investment-profile/steps'));
const Signup = lazy(() => import('./pages/signup'));

const headerStyles = { h1, h2, h3, h4, h5, h6 };

function App() {
  const [user, setUser] = useState<UserT>(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ChakraProvider theme={AppTheme}>
        <Global styles={[AppRootStyle, headerStyles]} />
        <DebugPanel />
        <Suspense fallback={<Loading />}>
          <Router>
            {/* Note: server handles not-logged-in redirection for the SPA bundle */}
            {/*
            TODO: refactor to just use nested routes / URL parameters
            https://reactrouter.com/web/guides/philosophy/nested-routes
          */}
            <Signup />
            <LoginFlow /> {/* setUser={setUser} */}
            {/* TODO: Redirect not-signed-up users to signup */}
            <Route exact path="/">
              <Redirect to="/portfolio" />
            </Route>
            <AuthRoutes />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/property/:address" component={Property} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}
            {/* <Route exact path="/documents" component={Docs} /> */}
            {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
          </Router>
        </Suspense>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

// TODO: pull static routes into this file
function AuthRoutes() {
  return (
    <Fragment>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/forgot">
        <ForgotPassword />
      </Route>
      <Route exact path="/forgot-check-email">
        <ForgotCheckEmail />
      </Route>
      <Route exact path="/new-password/:resetToken">
        <NewPassword />
      </Route>
    </Fragment>
  );
}

async function getUser(setUser: (u: UserT) => void): Promise<void> {
  const resp = await fetchWrap('/api/currentUser');

  if (resp.ok) {
    setUser(await resp.json());
  }
}

const Loading = () => (
  <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
    <Spinner size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" />
  </Flex>
);

// eslint-disable-next-line import/no-default-export
export default App;

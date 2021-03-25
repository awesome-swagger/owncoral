import React, { Fragment, lazy, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import AppRootStyle from './AppRootStyle';
import {
  DebugPanel,
  ErrorFallback,
  Loading,
  MyErrorHandler,
  PropertyCard,
  ProtectedRoute,
} from './components';
import AppTheme from './theme';
import { h1, h2, h3, h4, h5, h6 } from './theme/textStyles';
import type { UserT } from './userContext';
import { UserContext } from './userContext';

const Login = lazy(() => import('./pages/login'));
const ForgotCheckEmail = lazy(() => import('./pages/login/ForgotCheckEmail'));
const ForgotPassword = lazy(() => import('./pages/login/ForgotPassword'));
const NewPassword = lazy(() => import('./pages/login/NewPassword'));

const Portfolio = lazy(() => import('./pages/portfolio'));
const Profile = lazy(() => import('./pages/profile'));
const Property = lazy(() => import('./pages/property'));
const InvestmentProfileFlow = lazy(() => import('./pages/investment-profile/steps'));
const Signup = lazy(() => import('./pages/signup'));
const PropertyDetail = lazy(() => import('./pages/property/propertyDetail'));
const Error404 = lazy(() => import('./pages/error404'));

const headerStyles = { h1, h2, h3, h4, h5, h6 };

function App() {
  const [user, setUser] = useState<UserT>(null);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={MyErrorHandler}>
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
              <AuthRoutes />
              <Signup />
              <InvestmentProfileFlow />
              <ProtectedRoute exact path="/">
                <Redirect to="/portfolio" />
              </ProtectedRoute>
              <ProtectedRoute exact path="/portfolio" component={Portfolio} />
              <ProtectedRoute exact path="/property/:address" component={Property} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <ProtectedRoute exact path="/property-card" component={PropertyCard} />
              <ProtectedRoute exact path="/property-detail" component={PropertyDetail} />
              {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}
              {/* <Route exact path="/documents" component={Docs} /> */}
              {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
            </Router>
          </Suspense>
        </ChakraProvider>
      </UserContext.Provider>
    </ErrorBoundary>
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
      <Route exact path="/welcome-to-coral/:resetToken">
        <NewPassword isWelcome />
      </Route>
    </Fragment>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;

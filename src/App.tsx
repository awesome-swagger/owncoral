import React, { Fragment, lazy, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import type { UserProfileT } from './shared-fullstack/types';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import AppRootStyle from './AppRootStyle';
import {
  DebugPanel,
  ErrorFallback,
  MapBox,
  MyErrorHandler,
  PropertyCard,
  ProtectedRoute,
} from './components';
import AppTheme from './theme';
import { h1, LargeTitle, Title1, Title2, Title3, XLargeTitle } from './theme/textStyles';
import { UserContext } from './userContext';

const Login = lazy(() => import('./pages/login'));
const ForgotCheckEmail = lazy(() => import('./pages/login/ForgotCheckEmail'));
const ForgotPassword = lazy(() => import('./pages/login/ForgotPassword'));
const NewPassword = lazy(() => import('./pages/login/NewPassword'));

const Academy = lazy(() => import('./pages/academy'));
const Drafts = lazy(() => import('./pages/drafts'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Profile = lazy(() => import('./pages/profile'));
const Property = lazy(() => import('./pages/opportunity'));
const InvestmentProfileFlow = lazy(() => import('./pages/investment-profile/steps'));
const SignupFlow = lazy(() => import('./pages/signup'));
const OpportunityDetail = lazy(() => import('./pages/opportunity/detail'));
const GlossaryDetail = lazy(() => import('./pages/academy/glossary/glossaryDetail'));
const CourseDetail = lazy(() => import('./pages/academy/courses/courseDetail'));
const ComingSoon = lazy(() => import('./pages/coming-soon'));
const Error404 = lazy(() => import('./pages/error404'));

const headerStyles = { h1, h2: XLargeTitle, h3: LargeTitle, h4: Title1, h5: Title2, h6: Title3 };

function App() {
  const [user, setUser] = useState<UserProfileT | null>(null);

  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen && !splashScreen.hasAttribute('hidden')) {
    splashScreen.setAttribute('hidden', 'true');
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={MyErrorHandler}>
      <UserContext.Provider value={[user, setUser]}>
        <ChakraProvider theme={AppTheme}>
          <Global styles={[AppRootStyle, headerStyles]} />
          <DebugPanel />
          {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
          <Suspense fallback={<Fragment />}>
            <Router>
              <Switch>
                {/* Note: server handles not-logged-in redirection for the SPA bundle */}
                {authRoutes}

                <ProtectedRoute exact path="/">
                  <Redirect to="/portfolio" />
                </ProtectedRoute>

                <ProtectedRoute path="/portfolio" component={Portfolio} />

                <ProtectedRoute exact path="/property/:address" component={Property} />

                <ProtectedRoute path="/profile">
                  <Profile />
                </ProtectedRoute>

                <ProtectedRoute path="/coming-soon" component={ComingSoon} />

                <ProtectedRoute exact path="/academy">
                  <Redirect to="/academy/glossary" />
                </ProtectedRoute>
                <ProtectedRoute exact path="/academy/:tab" component={Academy} />
                <ProtectedRoute path="/academy/course/:title" component={CourseDetail} />
                <ProtectedRoute path="/academy/glossary/:title" component={GlossaryDetail} />

                {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' && (
                  <Route path="/signup">
                    <SignupFlow />
                  </Route>
                )}

                {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' && (
                  <Route path="/investment-profile">
                    <InvestmentProfileFlow />
                  </Route>
                )}

                {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' && (
                  <ProtectedRoute path="/drafts" component={Drafts} />
                )}

                {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' && (
                  <ProtectedRoute exact path="/property-card" component={PropertyCard} />
                )}
                {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' && (
                  <ProtectedRoute
                    exact
                    path="/opportunities/detail"
                    component={OpportunityDetail}
                  />
                )}

                {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' && (
                  <ProtectedRoute exact path="/map-box" component={MapBox} />
                )}

                <ProtectedRoute path="*" component={Error404} />
                {/* <Route exact path="/documents" component={Docs} /> */}
              </Switch>
            </Router>
          </Suspense>
        </ChakraProvider>
      </UserContext.Provider>
    </ErrorBoundary>
  );
}

// Note: we're not using a <Fragment> here, because the <Switch> component
// which contains this block does not work with Fragments
const authRoutes = [
  <Route exact path="/login" key="/login">
    <Login />
  </Route>,
  <Route exact path="/forgot" key="/forgot">
    <ForgotPassword />
  </Route>,
  <Route exact path="/forgot-check-email" key="/forgot-check-email">
    <ForgotCheckEmail />
  </Route>,
  <Route exact path="/new-password/:resetToken" key="/new-password/:resetToken">
    <NewPassword />
  </Route>,
  <Route exact path="/welcome-to-coral/:resetToken" key="/welcome-to-coral/:resetToken">
    <NewPassword isWelcome />
  </Route>,
];

// eslint-disable-next-line import/no-default-export
export default App;

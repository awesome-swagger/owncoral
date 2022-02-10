import React, { Fragment, lazy, Suspense, useReducer, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Redirect, Route, useLocation } from 'react-router-dom';
import type { UserProfileT } from './shared-fullstack/types';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import AppRootStyle from './AppRootStyle';
import {
  ErrorFallback,
  LogPageViews,
  MapBox,
  MyErrorHandler,
  NavBar,
  ProtectedRoute,
  SwitchWrapper,
} from './components';
import {
  AcademyUrl,
  ComingSoonUrl,
  DraftsUrl,
  InvestmentProfileUrl,
  ListingsUrl,
  MapBoxUrl,
  MarketUrl,
  NewsfeedUrl,
  PortfolioUrl,
  ProfileUrl,
} from './lib/uriConstants';
import { InvestmentProfileProvider } from './pages/investment-profile';
import { AuthRouteArray } from './pages/login';
import type { SignupReducerT } from './pages/signup/signupContext';
import { EMPTY_SIGNUP, SignupContext, signupReducer } from './pages/signup/signupContext';
import AppTheme from './theme';
import {
  Headline,
  LargeTitle,
  Title1,
  Title2,
  XLargeTitle,
  XXLargeTitle,
} from './theme/textStyles';
import { UserContext } from './userContext';
const AuthPages = lazy(() => import('./pages/login'));
const Academy = lazy(() => import('./pages/academy'));
const Newsfeed = lazy(() => import('./pages/newsfeed'));
const Drafts = lazy(() => import('./pages/drafts'));
const Listings = lazy(() => import('./pages/listings'));
const Market = lazy(() => import('./pages/market'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Profile = lazy(() => import('./pages/profile'));
const InvestmentProfileFlow = lazy(() => import('./pages/investment-profile'));
const SignupFlow = lazy(() => import('./pages/signup'));

const ComingSoon = lazy(() => import('./pages/coming-soon'));
const Error404 = lazy(() => import('./pages/error404'));

const headerStyles = {
  h1: XXLargeTitle,
  h2: XLargeTitle,
  h3: LargeTitle,
  h4: Title1,
  h5: Title2,
  h6: Headline,
};

function App() {
  const [user, setUser] = useState<UserProfileT | null>(null);
  const [signupInfo, dispatch] = useReducer<SignupReducerT>(signupReducer, EMPTY_SIGNUP);

  const isProd = import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'production';

  const NavbarWrap = () => {
    const location = useLocation(); // Can only useLocation in child components
    return user && !location.pathname.startsWith('/signup') ? <NavBar /> : null;
  };

  const splashScreen = document.querySelector('.splash-screen');
  splashScreen?.classList.add('hidden');

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={MyErrorHandler}>
      <UserContext.Provider value={[user, setUser]}>
        <ChakraProvider theme={AppTheme}>
          <Global styles={[AppRootStyle, headerStyles]} />
          {/* <DebugPanel /> */}
          {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
          <Suspense fallback={<Fragment />}>
            <Router>
              <LogPageViews>
                <NavbarWrap />
                <SwitchWrapper>
                  {/* Note: server handles not-logged-in redirection for the SPA bundle */}
                  <Route exact path={AuthRouteArray.map(({ route }) => route)}>
                    <AuthPages />
                  </Route>

                  {/* TODO: show listings only for signed in users */}
                  <ProtectedRoute path={ListingsUrl}>
                    <Listings />
                  </ProtectedRoute>

                  <ProtectedRoute path={MarketUrl}>
                    <Market />
                  </ProtectedRoute>

                  <ProtectedRoute exact path="/">
                    <Redirect push to={ListingsUrl} />
                  </ProtectedRoute>

                  <ProtectedRoute path={PortfolioUrl} component={Portfolio} />

                  <ProtectedRoute path={ProfileUrl}>
                    <Profile />
                  </ProtectedRoute>

                  <ProtectedRoute path={ComingSoonUrl} component={ComingSoon} />

                  <ProtectedRoute path={AcademyUrl} component={Academy} />

                  <ProtectedRoute path={NewsfeedUrl} component={Newsfeed} />

                  <Route path="/signup">
                    <SignupContext.Provider value={{ signupInfo, dispatch }}>
                      <SignupFlow />
                    </SignupContext.Provider>
                  </Route>

                  {!isProd && [
                    <Route path={InvestmentProfileUrl} key={InvestmentProfileUrl}>
                      <InvestmentProfileProvider>
                        <InvestmentProfileFlow />
                      </InvestmentProfileProvider>
                    </Route>,

                    <ProtectedRoute path={DraftsUrl} key={DraftsUrl} component={Drafts} />,

                    <ProtectedRoute exact path={MapBoxUrl} key={MapBoxUrl} component={MapBox} />,
                  ]}

                  <Route path="*" component={Error404} />
                </SwitchWrapper>
              </LogPageViews>
            </Router>
          </Suspense>
        </ChakraProvider>
      </UserContext.Provider>
    </ErrorBoundary>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;

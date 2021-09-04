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
  LogPageViews,
  MapBox,
  MyErrorHandler,
  PropertyCard,
  ProtectedRoute,
} from './components';
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

const Login = lazy(() => import('./pages/login'));
const ForgotCheckEmail = lazy(() => import('./pages/login/ForgotCheckEmail'));
const ForgotPassword = lazy(() => import('./pages/login/ForgotPassword'));
const NewPassword = lazy(() => import('./pages/login/NewPassword'));

const Academy = lazy(() => import('./pages/academy'));
const Drafts = lazy(() => import('./pages/drafts'));
const Listings = lazy(() => import('./pages/listings'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Profile = lazy(() => import('./pages/profile'));
const Property = lazy(() => import('./pages/opportunity'));
const InvestmentProfileFlow = lazy(() => import('./pages/investment-profile/steps'));
const SignupFlow = lazy(() => import('./pages/signup'));
const OpportunityDetail = lazy(() => import('./pages/opportunity/detail'));
const GlossaryDetail = lazy(() => import('./pages/academy/glossary/glossaryDetail'));
const CourseDetail = lazy(() => import('./pages/academy/courses/courseDetail'));
const CourseCashFlow = lazy(() => import('./pages/academy/courses/cashFlow'));
const CourseRealizingAppreciation = lazy(
  () => import('./pages/academy/courses/realizingAppreciation'),
);
const CourseOwnershipStructure = lazy(() => import('./pages/academy/courses/ownershipStructure'));
const CourseFinanacingWithCommercial = lazy(
  () => import('./pages/academy/courses/financingWithCommercial'),
);
const BostonMarket = lazy(() => import('./pages/market/bostonMarket'));
const BostonSubMarket = lazy(() => import('./pages/market/bostonSubMarket'));

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

  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen && !splashScreen.hasAttribute('hidden')) {
    splashScreen.setAttribute('hidden', 'true');
  }

  const isProd = import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'production';
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
                <Switch>
                  {/* Note: server handles not-logged-in redirection for the SPA bundle */}
                  {authRoutes}
                  {marketRoutes}
                  {courseRoutes}
                  <Route path="/listings">
                    <Listings />
                  </Route>

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
                    <Redirect to="/academy/courses" />
                  </ProtectedRoute>

                  <ProtectedRoute exact path="/academy/:tab" component={Academy} />
                  <ProtectedRoute path="/academy/course/:title" component={CourseDetail} />
                  <ProtectedRoute path="/academy/glossary/:title" component={GlossaryDetail} />

                  {!isProd && (
                    <Fragment>
                      <Route path="/signup">
                        <SignupFlow />
                      </Route>

                      <Route path="/investment-profile">
                        <InvestmentProfileFlow />
                      </Route>

                      <ProtectedRoute path="/drafts" component={Drafts} />

                      <ProtectedRoute exact path="/property-card" component={PropertyCard} />

                      <ProtectedRoute
                        exact
                        path="/opportunities/detail"
                        component={OpportunityDetail}
                      />

                      <ProtectedRoute exact path="/map-box" component={MapBox} />
                    </Fragment>
                  )}

                  {/* <Route exact path="/documents" component={Docs} /> */}

                  <ProtectedRoute path="*" component={Error404} />
                </Switch>
              </LogPageViews>
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

const marketRoutes = [
  <Route exact path="/boston-market" component={BostonMarket} />,
  <Route exact path="/boston-market/:name" component={BostonSubMarket} />,
];

const courseRoutes = [
  <ProtectedRoute exact path="/academy/unit/cash-flow">
    <Redirect to="/academy/unit/cash-flow/1" />
  </ProtectedRoute>,
  <ProtectedRoute path="/academy/unit/cash-flow/:title" component={CourseCashFlow} />,

  <ProtectedRoute exact path="/academy/unit/realizing-appreciation-without-selling">
    <Redirect to="/academy/unit/realizing-appreciation-without-selling/1" />
  </ProtectedRoute>,
  <ProtectedRoute
    path="/academy/unit/realizing-appreciation-without-selling/:title"
    component={CourseRealizingAppreciation}
  />,

  <ProtectedRoute exact path="/academy/unit/ownership-structure">
    <Redirect to="/academy/unit/ownership-structure/1" />
  </ProtectedRoute>,
  <ProtectedRoute
    path="/academy/unit/ownership-structure/:title"
    component={CourseOwnershipStructure}
  />,

  <ProtectedRoute exact path="/academy/unit/financing-with-commercial-loans">
    <Redirect to="/academy/unit/financing-with-commercial-loans/1" />
  </ProtectedRoute>,
  <ProtectedRoute
    path="/academy/unit/financing-with-commercial-loans/:title"
    component={CourseFinanacingWithCommercial}
  />,
];

// eslint-disable-next-line import/no-default-export
export default App;
